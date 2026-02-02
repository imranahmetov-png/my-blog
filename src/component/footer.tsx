import Instagram from '@/assets/img/Instagram.svg'
import telegram from '@/assets/img/telegram.svg'
import WhatsApp from '@/assets/img/WhatsApp.svg'
import github from '@/assets/img/github.svg'
import mail from '@/assets/img/mail.svg'
import phone from '@/assets/img/phone.svg'

export default function UiEnd() {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px] sm:gap-[50px] px-[80px]">
      <p className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FD6F00] to-[#E60026] text-[30px] font-bold tracking-[0.03em] flex items-center pt-[40px]">
        Imran
      </p>
      <nav className="flex flex-wrap gap-6 sm:gap-15 justify-center items-center">
        {/* Первая строка: Home, Services, About me */}
        <a
          href="#Home"
          className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center pl-4"
        >
          Home
        </a>
        <a
          href="#Services"
          className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center pl-4"
        >
          Services
        </a>
        <a
          href="#About me"
          className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center pl-4 whitespace-nowrap"
        >
          About me
        </a>

        {/* Вторая строка на мобильных: Portfolio + Contact me */}
        <div className="flex w-full justify-center gap-6 sm:w-auto sm:flex-none">
          <a
            href="#Portfolio"
            className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center pl-4"
          >
            Portfolio
          </a>
          <a
            href="#Contact me"
            className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center pl-4"
          >
            Contact me
          </a>
        </div>
      </nav>

      <div className="flex items-end gap-[20px]">
        {/*Instagram*/}
        <a
          href="https://www.instagram.com/imra_n_96?igsh=Zmw0NjJxM3k4cHRo&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="min-w-[40px] min-h-[40px] cursor-pointer hover:opacity-80 transition relative z-50"
          />
        </a>
        {/*Telegram*/}
        <a
          href="https://t.me/Shifu_km"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={telegram}
            alt="Telegram"
            className="min-w-[40px] min-h-[40px] cursor-pointer hover:opacity-80 transition relative z-50"
          />
        </a>
        <a
          href="https://github.com/imranahmetov-png/my-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="GitHub"
            className="min-w-[40px] min-h-[40px] cursor-pointer hover:opacity-80 transition relative z-50"
          />
        </a>
        <a
          href="https://wa.me/77079614194"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={WhatsApp}
            alt="WhatsApp"
            className="min-w-[40px] min-h-[40px] cursor-pointer hover:opacity-80 transition relative z-50"
          />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="flex flex-row items-center gap-[14px]">
          <img
            src={mail}
            alt="Mail"
            className="min-w-[24px] min-h-[24px] relative"
          />
          <p className="text-[#959595] text-[20px] tracking-[0.03em] font-bold">
            imranahmetov28@gmail.com
          </p>
        </div>
        <div className="flex flex-row items-center gap-[14px]">
          <img
            src={phone}
            alt="Phone"
            className="min-w-[24px] min-h-[24px] relative"
          />
          <p className="text-[#959595] text-[20px] tracking-[0.03em] font-bold">
            +7 (707) 961-41-94
          </p>
        </div>
      </div>

      <div className="flex flex-col border-t border-[#FFFFFF]/35">
        <div className="text-[#FFFFFF]/35 text-[16px] tracking-[0.03em] font-bold pr-[120px] pl-[120px] pt-[16px] flex flex-col items-center pb-[24px]">
          © Developed by programmer Akhmetov Imran
        </div>
      </div>
    </div>
  )
}
