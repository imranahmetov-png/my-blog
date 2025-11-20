import UIHeader from './component/header'
import UiHero from './component/ui-hero'
import UiService from './component/service'
function App() {
  return (
    <div className="bg-[#121212] min-w-screen min-h-screen pt-[57px] sm:min-w-screen overflow-x-hidden sm:min-h-screen">
      <div className="flex flex-col justify-start items-center gap-[150px]">
        {/* UI HERO SECTION */}
        <div className="min-w-[100%] h-[854px] flex flex-col justify-start items-center gap-[100px] p-4">
          <UIHeader />
          <UiHero />
        </div>
        {/*Services Section */}
        <div className="min-w-[100%] h-[854px] flex flex-col justify-start items-center gap-[100px] p-4">
          <UiService />
        </div>
      </div>
    </div>
  )
}

export default App
// все что связано с HTML, Tailwind
