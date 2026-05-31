import SectionOne from './Parallax/SectionOne'
import SectionTwo from './Parallax/SectionTwo'
import SectionThree from './Parallax/SectionThree'
import SectionFour from './Parallax/SectionFour'

export default function ParallaxSections() {
  return (
    <div id="parallax-container" className="relative">
      <div id="parallax-1" className="relative z-10 mx-auto max-w-6xl overflow-hidden px-0 lg:sticky lg:top-0 lg:h-screen lg:pt-28">
        <SectionOne />
      </div>

      <div id="parallax-2" className="relative z-20 mx-auto max-w-6xl overflow-hidden px-0 lg:sticky lg:top-0 lg:h-screen lg:pt-28">
        <SectionTwo />
      </div>

      <div id="parallax-3" className="relative z-30 mx-auto max-w-6xl overflow-hidden px-0 lg:sticky lg:top-0 lg:h-screen lg:pt-28">
        <SectionThree />
      </div>

      <div id="parallax-4" className="relative z-40 mx-auto max-w-6xl overflow-hidden px-0 lg:sticky lg:top-0 lg:h-screen lg:pt-28">
        <SectionFour />
      </div>
    </div>
  )
}
