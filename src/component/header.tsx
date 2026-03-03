import { useRef, useState } from 'react'
import { useTheme } from '@/context/theme/useTheme'
import { useClickOutsite } from '../hooks/useClickOutsite'
import ThemeD from '../assets/img/themeDark.svg'
import ThemeL from '../assets/img/themeLight.svg'
import MenuImg from '../assets/img/MenuImg.svg'

export default function UIHeader() {
  const { theme, switchTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const handleLinkClick = () => {
    setIsOpen(false) // закроет меню
  }
  const menuRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null) // Реф для кнопки
  // Закрывание меню при клике вне него
  useClickOutsite([menuRef, buttonRef], () => setIsOpen(false))
  return (
    <header className="relative container mx-auto w-full max-w-5xl flex justify-between sm:justifu-center items-center sm:px-8">
      {/* 1. ЛОГОТИП (На мобилках по центру, на ПК слева) */}
      <div className="flex-1 sm:flex-none text-center sm:text-left order-2 sm:order-1">
        <p className="inline-block text-transparent bg-clip-text bg-linear-to-r from-[#FD6F00] to-[#E60026] text-lg sm:text-[30px] font-bold">
          Imran
        </p>
      </div>

      {/* 2. БУРГЕР-МЕНЮ (На мобилках слева, на ПК скрыто) */}
      <button
        ref={buttonRef}
        className="sm:hidden flex items-center text-[20px] order-1" // order-1 ставит его первым на мобилке
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img src={MenuImg} alt="MenuImg" />
      </button>

      {/* 3. НАВИГАЦИЯ (Центр на ПК, скрыта в бургер на мобилках) */}
      <nav
        ref={menuRef}
        className={`
        fixed top-[115px] left-0 w-full bg-[#ffffff]/6 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col rounded-xl p-6  overflow-hidden sm:static sm:flex sm:flex-row sm:translate-x-0 sm:h-auto sm:w-auto sm:bg-transparent
        sm:order-2 sm:flex-1 sm:justify-center `} // Эти классы центрируют меню на ПК
      >
        <div className="flex flex-col gap-3 sm:gap-10 px-2 sm:flex-row ">
          <a
            href="#Home"
            onClick={handleLinkClick}
            className="text-[#FD6F00] hover:text-[#ff8a33] font-bold text-lg sm:text-[23px]"
          >
            Home
          </a>
          <a
            href="#Services"
            onClick={handleLinkClick}
            className="text-[#959595] hover:text-gray-300 text-lg sm:text-[23px]"
          >
            Services
          </a>
          <a
            href="#About me"
            onClick={handleLinkClick}
            className="text-[#959595] hover:text-gray-300 text-lg sm:text-[23px] whitespace-nowrap"
          >
            About me
          </a>
          <a
            href="#Portfolio"
            onClick={handleLinkClick}
            className="text-[#959595] hover:text-gray-300 text-lg sm:text-[23px]"
          >
            Portfolio
          </a>
          <a
            href="#Contact me"
            onClick={handleLinkClick}
            className="text-[#959595] hover:text-gray-300 text-lg sm:text-[23px] whitespace-nowrap"
          >
            Contact me
          </a>
        </div>
      </nav>

      {/* 4. ПРАВАЯ ЧАСТЬ (Тема и Кнопка) */}
      <div className="flex items-center gap-2 sm:gap-4 order-3">
        <button
          onClick={() => switchTheme(theme === 'light' ? 'dark' : 'light')}
          className="h-8 flex items-center justify-center p-2 rounded-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={theme === 'light' ? ThemeD : ThemeL}
            alt={theme === 'light' ? 'Луна' : 'Солнце'}
            className="w-6 h-6"
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
      </div>
    </header>
  )
}
//Логотип «Imran» теперь центрируется за счет flex-1 и text-center, а бургер-меню имеет order-1
