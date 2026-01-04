import UIHeader from './component/header'
import UiHero from './component/ui-hero'
import UiFrame from './component/service'
import UiAboutMe from './component/aboutMe'
import UiPortfolio from './component/Portfolio'
import UiContactMe from './component/contactMe'
// tracking-[0.03em] ВЕЗДЕ РАСТАВЬ
function App() {
  return (
    <div className="bg-[#121212] min-w-screen min-h-screen pt-[57px] sm:min-w-screen overflow-x-hidden sm:min-h-screen">
      <div className="flex flex-col justify-between items-center gap-[150px]">
        {/* UI HERO SECTION */}
        <div
          id="Home"
          className="flex flex-col w-full justify-between items-center gap-[150px] p-4"
        >
          <UIHeader />
          <UiHero />
        </div>
        {/*Services Section */}
        <div
          id="Services"
          className="flex flex-col justify-start items-center gap-[150px] p-4"
        >
          <UiFrame />
        </div>
        {/* About Me Section */}
        <div
          id="About me"
          className="flex flex-col justify-start items-center gap-[150px] p-4"
        >
          <UiAboutMe />
        </div>
        {/* Portfolio Section */}
        <div
          id="Portfolio"
          className="flex flex-col justify-center items-center gap-[150px] p-4"
        >
          <UiPortfolio />
        </div>
        {/* Contact Me Section */}
        <div
          id="Contact me"
          className="flex flex-col justify-center items-center gap-[150px] p-4"
        >
          <UiContactMe />
        </div>
      </div>
    </div>
  )
}

export default App
// все что связано с HTML, Tailwind
