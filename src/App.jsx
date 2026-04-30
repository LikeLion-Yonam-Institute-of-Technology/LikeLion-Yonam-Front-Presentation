import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { weeklySlides } from './data/weeklySlides';

function App() {
  const availableWeeks = Object.keys(weeklySlides)
    .map(Number)
    .filter((week) => weeklySlides[week]?.slides?.length > 0);

  const getInitialWeek = () => {
    const weekParam = Number(new URLSearchParams(window.location.search).get('week'));
    if (availableWeeks.includes(weekParam)) return weekParam;
    return availableWeeks[0] || 1;
  };

  const [currentWeek, setCurrentWeek] = useState(getInitialWeek);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const weekData = weeklySlides[currentWeek] || { title: '', slides: [] };
  const slides = weekData.slides;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    setCurrentSlideIndex((prev) => {
      if (slides.length === 0) return 0;
      return Math.min(prev, slides.length - 1);
    });
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // 텍스트 편집 중에는 슬라이드 넘김 방지
      if (
        e.target.tagName === 'INPUT' || 
        e.target.tagName === 'TEXTAREA' || 
        e.target.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);
  
  const isPrintMode = new URLSearchParams(window.location.search).get('print') === 'true';

  if (isPrintMode) {
    return (
      <div className="print-mode">
        {slides.map((SlideComponent, idx) => (
          <div key={idx} className="print-slide slide-content-wrapper">
            <SlideComponent />
          </div>
        ))}
      </div>
    );
  }

  const CurrentSlideComponent = slides[currentSlideIndex];
  const hasSlides = slides.length > 0 && CurrentSlideComponent;
  const progressPercent = hasSlides ? ((currentSlideIndex + 1) / slides.length) * 100 : 0;

  return (
    <div className="app-shell">
      {/* PROGRESS BAR */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progressPercent}%` }} 
        />
      </div>

      {/* HEADER */}
      <header className="global-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/assets/likelion_logo.png" 
            className="header-logo" 
            alt="LIKELION UNIV." 
          />
          <div className="header-divider" />
          <span className="header-title">
            연암공과대학교 프론트엔드 트랙
          </span>
        </div>
        <div className="status-badge" style={{ padding: '0 12px', display: 'flex', alignItems: 'center' }}>
          <select 
            value={currentWeek} 
            onChange={(e) => {
              setCurrentWeek(Number(e.target.value));
              setCurrentSlideIndex(0);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'inherit',
              fontFamily: 'inherit',
              fontWeight: 'inherit',
              fontSize: 'inherit',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {Object.keys(weeklySlides).map(week => (
              <option
                key={week}
                value={week}
                disabled={!weeklySlides[week].slides?.length}
                style={{ color: 'black' }}
              >
                {weeklySlides[week].title}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <div className="slide-content-wrapper">
          {hasSlides ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentWeek}-${currentSlideIndex}`}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: '100%' }}
              >
                <CurrentSlideComponent />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div style={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
              <div>
                <h2>No slides found.</h2>
                <p className="lead">슬라이드가 등록된 주차를 선택해 주세요.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* NAVIGATION */}
      <footer className="global-nav">
        <div className="nav-counter">
          {String(hasSlides ? currentSlideIndex + 1 : 0).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        
        <div className="nav-buttons">
          <button 
            className="nav-btn" 
            onClick={prevSlide} 
            disabled={!hasSlides || currentSlideIndex === 0}
          >
            PREV
          </button>
          <button 
            className={`nav-btn ${currentSlideIndex < slides.length - 1 ? 'primary' : ''}`}
            onClick={nextSlide} 
            disabled={!hasSlides || currentSlideIndex === slides.length - 1}
          >
            {currentSlideIndex === slides.length - 1 ? 'FINISH' : 'NEXT →'}
          </button>
        </div>

        <div className="footer-copyright">
          © 2026. LIKELION Univ. all rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
