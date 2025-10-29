import UIHeader from './component/header'
import UiHero from './component/ui-hero'
import UiFrame from './component/frame-23'
function App() {
  return (
    <div className="bg-[#1B1B1B] min-w-screen min-h-screen pt-[57px] sm:min-w-screen sm:min-h-screen">
      <div className="flex flex-col justify-start items-center gap-[150px]">
        {/* UI HERO SECTION */}
        <div className="min-w-screen h-[854px] flex flex-col justify-start items-center gap-[30px]">
          <UIHeader />
          <UiHero />
          <UiFrame />
        </div>
      </div>
    </div>
  )
}

export default App
// все что связано с HTML, Tailwind
