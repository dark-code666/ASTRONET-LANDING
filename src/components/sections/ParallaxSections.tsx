import SectionOne from './parallax/SectionOne';
import SectionTwo from './parallax/SectionTwo';
import SectionThree from './parallax/SectionThree';
import SectionFour from './parallax/SectionFour';

export default function ParallaxSections() {
  return (
    <div id="parallax-container" className="relative">
      
      {/* SECCIÓN 1 - Añadimos mx-auto max-w-6xl y px-4 (para igualar el padding del header) */}
      <div id="parallax-1" className="sticky top-16 h-[calc(100vh-64px)] overflow-hidden z-10 mx-auto max-w-6xl px-0">
        <SectionOne />
      </div>
      
      {/* SECCIÓN 2 */}
      <div id="parallax-2"  className="sticky top-16 h-[calc(100vh-64px)] overflow-hidden z-20  mx-auto max-w-6xl px-0">
        <SectionTwo />
      </div>
      
      {/* SECCIÓN 3 */}
      <div id="parallax-3" className="sticky top-16 h-[calc(100vh-64px)] overflow-hidden z-30  mx-auto max-w-6xl px-0">
        <SectionThree />
      </div>

      {/* SECCIÓN 4 */}
      <div id="parallax-4" className="sticky top-16 h-[calc(100vh-64px)] overflow-hidden z-40  mx-auto max-w-6xl px-0">
        <SectionFour />
      </div>
      
    </div>
  );
}