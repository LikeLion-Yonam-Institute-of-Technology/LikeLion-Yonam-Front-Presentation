import EmbeddedFroggy from "./froggy/EmbeddedFroggy";
import { froggyLevels } from "./froggy/froggyLevels";

// 중간연결파일
export const froggyLevelSlides = froggyLevels.map((level) => {
  const FroggyLevelSlide = () => <EmbeddedFroggy level={level} />;

  return FroggyLevelSlide;
});
