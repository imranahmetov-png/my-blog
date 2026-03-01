import { useTheme } from '@/context/theme/useTheme'
import ThemeD from '../assets/img/themeDark.svg'
import ThemeL from '../assets/img/themeLight.svg'

export default function UIHeader() {
  const { theme, switchTheme } = useTheme()
  return (
    <header className="flex w-full justify-center text-align:center items-center sm:px-8 sm:py-4">
      <div className="text-transparent mr-[10px] sm:mr-[50px] bg-clip-text bg-linear-to-r from-[#FD6F00] to-[#E60026] text-lg sm:text-[30px] text-align:left flex items-center pl-4 font-bold ">
        Imran
      </div>
      <nav className="flex justify-center items-end gap-2 sm:gap-6 tracking-[0.03em]">
        <a
          href="#Home"
          className="text-[#FD6F00] hover:text-[#ff8a33] transition-colors duration-300 text-sm sm:text-[23px] text-center flex items-center font-bold"
        >
          Home
        </a>
        <a
          href="#Services"
          className="text-[#959595] hover:text-gray-300 transition-colors duration-300 text-sm sm:text-[23px] text-center flex items-center "
        >
          Services
        </a>
        <a
          href="#About me"
          className="text-[#959595] hover:text-gray-300 transition-colors duration-300 text-sm sm:text-[23px] text-center whitespace-nowrap flex items-center"
        >
          About me
        </a>
        <a
          href="#Portfolio"
          className="text-[#959595] hover:text-gray-300 transition-colors duration-300 text-sm sm:text-[23px] text-center "
        >
          Portfolio
        </a>
        <a
          href="#Contact me"
          className="text-[#959595] hover:text-gray-300 transition-colors duration-300 text-sm sm:text-[23px] text-center whitespace-nowrap flex items-center"
        >
          Contact me
        </a>
        <button
          onClick={() => switchTheme(theme === 'light' ? 'dark' : 'light')}
          className="h-8 flex items-center justify-center cursor-pointer"
        >
          <img
            src={theme === 'light' ? ThemeD : ThemeL}
            alt={theme === 'light' ? 'Луна' : 'Солнце'}
            className={`w-7 h-7 filter transition-transform duration-300
          ${theme === 'light' ? 'hover:brightness-200' : 'hover:brightness-900'}
        `}
          />
        </button>
        <a
          href="https://discord.gg/2h8kgfT5"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-r from-[#FD6F00] to-[#E46400] linear-gradient text-white px-5 py-2 rounded-lg font-bold whitespace-nowrap transition-transform duration-300 hover:scale-105"
        >
          Hire Me
        </a>
      </nav>
    </header>
  )
}
