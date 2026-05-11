import SectionOne from './Parallax/SectionOne';
import SectionTwo from './Parallax/SectionTwo';
import SectionThree from './Parallax/SectionThree';
import SectionFour from './Parallax/SectionFour';

export default function ParallaxSections() {
  return (
    <div id="parallax-container" className="relative">
      
      {/* SECCIÓN 1 - Añadimos mx-auto max-w-6xl y px-4 (para igualar el padding del header) */}
      <div id="parallax-1" className="sticky top-0 h-screen overflow-hidden z-10 mx-auto max-w-6xl px-0 pt-28">
        <SectionOne />
      </div>
      
      {/* SECCIÓN 2 */}
      <div id="parallax-2"  className="sticky top-0 h-screen overflow-hidden z-20  mx-auto max-w-6xl px-0 pt-28">
        <SectionTwo />
      </div>
      
      {/* SECCIÓN 3 */}
      <div id="parallax-3" className="sticky top-0 h-screen overflow-hidden z-30  mx-auto max-w-6xl px-0 pt-28">
        <SectionThree />
      </div>

      {/* SECCIÓN 4 */}
      <div id="parallax-4" className="sticky top-0 h-screen overflow-hidden z-40  mx-auto max-w-6xl px-0 pt-28">
        <SectionFour />
      </div>
      
    </div>
  );
}