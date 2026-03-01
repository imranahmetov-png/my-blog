import avatar from '@/assets/img/avatar.svg'
import Instagram from '@/assets/img/Instagram.svg'
import telegram from '@/assets/img/telegram.svg'
import github from '@/assets/img/github.svg'
import WhatsApp from '@/assets/img/WhatsApp.svg'

export default function UiHero() {
  const startDate = new Date('2025-09-17') // дата начала опыта
  const today = new Date() // текущая дата
  const diffTime = today.getTime() - startDate.getTime() // разница в миллисекундах
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) // переводим в дни
  //
  return (
    <div className="flex flex-col sm:flex sm:flex-row justify-between items-center gap-[150px]">
      <div className="flex flex-col justify-start items-center sm:items-start gap-20 text-center sm:text-left">
        <div className="flex flex-col justify-start items-start gap-[61px]">
          <div className="flex flex-col justify-start items-start gap-[17px]">
            {/*frame 1*/}
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-center gap-[10px] w-full text-center sm:items-start">
                <p className="text-[16px] sm:text-[24px] text-[#707070] typewriter-1 tracking-[0.03em]">
                  Hi I am
                </p>
                <p className="text-[20px] sm:text-[28px] text-[#707070] font-bold typewriter-2 tracking-[0.03em]">
                  Akhmetov Imran
                </p>
              </div>

              <p className="bg-clip-text bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors text-[50px] sm:text-[70px] text-center font-bold text-transparent flex items-center tracking-[0.03em]">
                IT-Specialist
              </p>
            </div>
            {/*frame 2*/}
            <div className="flex justify-center sm:justify-start items-end gap-[20px] w-full">
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
          </div>
          <div className="flex items-center gap-4 w-full justify-center sm:justify-start">
            <a
              href="https://discord.gg/2h8kgfT5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] linear-gradient tracking-[0.03em] font-bold cursor-pointer hover:opacity-80 transition min-w-[156px] min-h-[48px] text-[20px] text-[#FFFFFF] text-center py-2 rounded-lg">
                Hire me
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-start gap-[15px] rounded-[8px] bg-[#ffffff]/4 py-5 px-3 sm:p-6 text-center text-[20px] font-bold text-[#FFFFFF]">
          <div className="flex flex-col justify-center items-start pr-4 sm:pr-5 border-r border-[#959595] tracking-[0.03em]">
            {/* число дней сверху */}
            <div className="text-[20px] sm:text-[24px] font-bold text-[#FD6F00] tracking-[0.03em]">
              {diffDays} day
            </div>
            {/* название снизу */}
            <div className="text-[16px] sm:text-[20px] font-bold">
              Experiences
            </div>
          </div>
          <div className="flex flex-col justify-center items-start pr-4 sm:pl-2 sm:pr-5 border-r border-[#959595] tracking-[0.03em]">
            <p className="text-[20px] sm:text-[24px] font-bold">Novice</p>
            <p className="text-[16px] sm:text-[20px] font-bold">specialist</p>
          </div>
          <div className="flex flex-col justify-center items-start tracking-[0.03em]">
            <div className="text-[20px] sm:text-[24px] font-bold text-[#FD6F00]">
              1
            </div>
            <div className="text-[16px] sm:text-[20px] font-bold whitespace-nowrap">
              Project done
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full max-w-[354px] max-h-[354px] sm:min-w-[618px] sm:min-h-[618px] bg-[#FFFFFF]/4 flex justify-center items-center">
        <img
          src={avatar}
          alt="avatar"
          className="min-w-[550px] min-h-[550px] rounded-full object-cover"
        />
      </div>
    </div>
  )
}
