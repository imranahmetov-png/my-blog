import { useTheme } from '@/context/theme/useTheme'

export default function UIHeader() {
  const { theme, switchTheme } = useTheme()
  return (
    <header className="flex w-full justify-center text-align:center items-center sm:px-8 sm:py-4">
      <div className="text-transparent mr-[10px] sm:mr-[50px] bg-clip-text bg-linear-to-r from-[#FD6F00] to-[#E60026] text-lg sm:text-[30px] text-align:left flex items-center pl-4 font-bold ">
        Imran
      </div>
      <nav className="flex  gap-2 sm:gap-6 justify-center items-center">
        <a
          href="#Home"
          className="text-[#FD6F00] transition text-sm sm:text-[20px] text-center flex items-center font-bold"
        >
          Home
        </a>
        <a
          href="#Services"
          className="text-[#959595] transition text-sm sm:text-[20px] text-center flex items-center "
        >
          Services
        </a>
        <a
          href="#About me"
          className="text-[#959595] transition text-sm sm:text-[20px] text-center whitespace-nowrap flex items-center"
        >
          About me
        </a>
        <a
          href="#Portfolio"
          className="text-[#959595] transition text-sm sm:text-[20px] text-centerflex items-center"
        >
          Portfolio
        </a>
        <a
          href="#Contact me"
          className="text-[#959595] transition text-sm sm:text-[20px] text-center whitespace-nowrap flex items-center"
        >
          Contact me
        </a>
        <button
          onClick={() => switchTheme(theme === 'light' ? 'dark' : 'light')}
          type="button"
          className="px-4 py-2 rounded-lg cursor-pointer bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <a
          href="https://discord.gg/2h8kgfT5"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FD6F00] text-white px-5 py-2 rounded-lg font-bold hover:bg-[#ff8800] whitespace-nowrap transition"
        >
          Hire Me
        </a>
      </nav>
    </header>
  )
}
