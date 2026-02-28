import Instagram from '@/assets/img/Instagram.svg'
import telegram from '@/assets/img/telegram.svg'
import WhatsApp from '@/assets/img/WhatsApp.svg'
import github from '@/assets/img/github.svg'
import mail from '@/assets/img/mail.svg'
import phone from '@/assets/img/phone.svg'

export default function UiEnd() {
  return (
    <footer className="flex flex-col justify-center items-center gap-[30px] sm:gap-[50px] px-20">
      <p className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FD6F00] to-[#E60026] text-[30px] font-bold tracking-[0.03em] flex items-center pt-10">
        Imran
      </p>
      <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
        {/* Первая строка: Home, Services, About me */}
        <div className="flex w-full sm:w-auto justify-center gap-4 sm:gap-6">
          <a
            href="#Home"
            className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center justify-center"
          >
            Home
          </a>
          <a
            href="#Services"
            className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center justify-center"
          >
            Services
          </a>
          <a
            href="#About me"
            className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center justify-center whitespace-nowrap"
          >
            About me
          </a>
        </div>
        {/* Вторая строка: Portfolio + Contact me */}
        <div className="flex w-full sm:w-auto justify-center gap-4 sm:gap-6">
          <a
            href="#Portfolio"
            className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center justify-center"
          >
            Portfolio
          </a>
          <a
            href="#Contact me"
            className="text-[#959595] tracking-[0.03em] font-medium text-[16px] sm:text-[20px] flex items-center justify-center"
          >
            Contact me
          </a>
        </div>
      </nav>

      <div className="flex items-end gap-5">
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

      <div className="flex flex-col sm:flex-row justify-center items-center gap-y-5 sm:gap-10">
        <div className="flex flex-row items-center gap-[14px]">
          <img
            src={mail}
            alt="Mail"
            className="min-w-[24px] min-h-[24px] relative"
          />
          <p className="text-[#959595] text-[16px] sm:text-[20px] tracking-[0.03em] font-bold">
            imranahmetov28@gmail.com
          </p>
        </div>
        <div className="flex flex-row items-center gap-[14px]">
          <img
            src={phone}
            alt="Phone"
            className="min-w-[24px] min-h-[24px] relative"
          />
          <p className="text-[#959595] text-[16px] sm:text-[20px] tracking-[0.03em] font-bold">
            +7 (707) 961-41-94
          </p>
        </div>
      </div>

      <div className="w-full border-t border-[#FFFFFF]/35">
        <div className="text-[#FFFFFF]/35 text-[14px] sm:text-[16px] tracking-[0.03em] font-bold px-4 py-4 text-center max-w-full sm:max-w-[600px] mx-auto break-words">
          © Developed by programmer Akhmetov Imran
        </div>
      </div>
    </footer>
  )
}
// break-words - позволяет переносить длинные слова на новую строку, чтобы избежать переполнения контейнера.
