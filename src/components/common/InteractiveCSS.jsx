import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveCSS = () => {
  const [padding, setPadding] = useState(24);
  const [margin, setMargin] = useState(20);
  const [borderWidth, setBorderWidth] = useState(4);
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderColor, setBorderColor] = useState('#FF6000');
  const [borderRadius, setBorderRadius] = useState(16);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [boxSizing, setBoxSizing] = useState('border-box');

  const cssCode = `div {
  width: 200px;
  height: 200px;
  background-color: ${backgroundColor};
  padding: ${padding}px;
  margin: ${margin}px;
  border: ${borderWidth}px ${borderStyle} ${borderColor};
  border-radius: ${borderRadius}px;
  box-sizing: ${boxSizing};
}`;

  return (
    <div className="animate-up" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2>체험형 CSS 놀이터</h2>
        <p className="lead">슬라이더를 움직여 박스 모델이 어떻게 변하는지 확인해보세요.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.2fr', 
        gap: '40px', 
        flex: 1,
        minHeight: 0
      }}>
        {/* Controls */}
        <div className="pbl-card" style={{ 
          padding: '24px', 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px' 
        }}>
          <ControlItem label="Padding" value={padding} unit="px">
            <input 
              type="range" min="0" max="80" value={padding} 
              onChange={(e) => setPadding(Number(e.target.value))}
              className="pbl-slider"
            />
          </ControlItem>

          <ControlItem label="Margin" value={margin} unit="px">
            <input 
              type="range" min="0" max="80" value={margin} 
              onChange={(e) => setMargin(Number(e.target.value))}
              className="pbl-slider"
            />
          </ControlItem>

          <ControlItem label="Border Width" value={borderWidth} unit="px">
            <input 
              type="range" min="0" max="20" value={borderWidth} 
              onChange={(e) => setBorderWidth(Number(e.target.value))}
              className="pbl-slider"
            />
          </ControlItem>

          <ControlItem label="Border Radius" value={borderRadius} unit="px">
            <input 
              type="range" min="0" max="100" value={borderRadius} 
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              className="pbl-slider"
            />
          </ControlItem>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <ControlItem label="Border Style">
              <select 
                value={borderStyle} 
                onChange={(e) => setBorderStyle(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ddd' }}
              >
                {['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </ControlItem>
            <ControlItem label="Box Sizing">
              <select 
                value={boxSizing} 
                onChange={(e) => setBoxSizing(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ddd' }}
              >
                <option value="border-box">border-box</option>
                <option value="content-box">content-box</option>
              </select>
            </ControlItem>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <ControlItem label="Border Color">
              <input 
                type="color" value={borderColor} 
                onChange={(e) => setBorderColor(e.target.value)}
                style={{ width: '100%', height: '40px', border: 'none', background: 'none', cursor: 'pointer' }}
              />
            </ControlItem>
            <ControlItem label="Background">
              <input 
                type="color" value={backgroundColor} 
                onChange={(e) => setBackgroundColor(e.target.value)}
                style={{ width: '100%', height: '40px', border: 'none', background: 'none', cursor: 'pointer' }}
              />
            </ControlItem>
          </div>
        </div>

        {/* Preview & Code */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="pbl-card" style={{ 
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: '#f8f9fa',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Outline for Margin visualization */}
            <div style={{
               border: '1px dashed #ccc',
               width: 'fit-content',
               height: 'fit-content',
               position: 'relative'
            }}>
                <motion.div 
                    layout
                    style={{
                        width: '200px',
                        height: '200px',
                        padding: `${padding}px`,
                        margin: `${margin}px`,
                        border: `${borderWidth}px ${borderStyle} ${borderColor}`,
                        borderRadius: `${borderRadius}px`,
                        backgroundColor: backgroundColor,
                        boxSizing: boxSizing,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        transition: 'padding 0.2s, margin 0.2s, border-width 0.2s, border-radius 0.2s'
                    }}
                >
                    <div style={{ 
                        background: 'rgba(255, 96, 0, 0.1)', 
                        width: '100%', 
                        height: '100%', 
                        border: '1px dashed var(--ll-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--ll-orange)'
                    }}>
                        CONTENT
                    </div>
                </motion.div>
                {/* Margin Label */}
                {margin > 0 && (
                    <div style={{ 
                        position: 'absolute', 
                        top: '4px', 
                        left: '4px', 
                        fontSize: '0.7rem', 
                        color: '#999',
                        pointerEvents: 'none'
                    }}>
                        Margin: {margin}px
                    </div>
                )}
            </div>
          </div>

          <div style={{ 
            background: '#111', 
            borderRadius: '20px', 
            padding: '24px', 
            color: '#A5B4FC',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ color: '#6366F1', marginBottom: '8px', fontSize: '0.8rem', fontWeight: 700 }}>CSS CODE</div>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{cssCode}</pre>
          </div>
        </div>
      </div>
      
      <style>{`
        .pbl-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: #eee;
          border-radius: 3px;
          outline: none;
        }
        .pbl-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          background: var(--ll-orange);
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.1s;
        }
        .pbl-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

const ControlItem = ({ label, value, unit, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#444' }}>{label}</label>
      {value !== undefined && (
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ll-orange)', background: 'var(--ll-orange-light)', padding: '2px 8px', borderRadius: '4px' }}>
          {value}{unit}
        </span>
      )}
    </div>
    {children}
  </div>
);

export default InteractiveCSS;
