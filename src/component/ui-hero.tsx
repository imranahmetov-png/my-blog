import avatar from '@/assets/img/avatar.svg'
import inst from '@/assets/img/inst.svg'
import klyaksa from '@/assets/img/klyaksa.svg'
import telegram from '@/assets/img/telegram.svg'
import github from '@/assets/img/github.svg'
export default function UiHero() {
  const startDate = new Date('2025-09-17') // дата начала опыта
  const today = new Date() // текущая дата
  const diffTime = today.getTime() - startDate.getTime() // разница в миллисекундах
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) // переводим в дни

  return (
    <div className="flex justify-between items-center gap-[150px]">
      <div className="flex flex-col mr-auto justify-start items-start gap-[80px]">
        <div className="flex flex-col justify-start items-start gap-[61px]">
          <div className="flex flex-col justify-start items-start gap-[17px]">
            {/*frame 1*/}
            <div className="flex flex-col justify-start items-start gap-[24px]">
              <div className="flex flex-col min-w-[219px] min-h-[73px] justify-start items-start text-left gap-[10px] flex-wrap">
                <p className="text-[24px] text-left text-[#707070] typewriter-1">
                  Hi I am
                </p>
                <p className="text-[28px] text-[#707070] font-bold typewriter-2">
                  Akhmetov Imran
                </p>
              </div>
              <p className="bg-clip-text bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors text-[70px] text-center flex items-center font-bold text-transparent">
                IT-Specialist
              </p>
            </div>
            {/*frame 2*/}
            <div className="min-w-[95px] min-h-[40px] flex items-end gap-2">
              {/*Instagram*/}
              <a
                href="https://www.instagram.com/imra_n_96?igsh=Zmw0NjJxM3k4cHRo&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={inst}
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
            </div>
          </div>
          <div className="flex items-center gap-4 min-w-[389px] min-h-[48px]">
            <a
              href="https://discord.gg/2h8kgfT5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a href="https://discord.gg/2h8kgfT5"></a>
              <div className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] linear-gradient min-w-[156px] min-h-[48px] text-[20px] text-[#FFFFFF] text-center px-5 py-2 rounded-lg font-bold  cursor-pointer hover:opacity-80 transition relative z-50">
                Hire me
              </div>
            </a>
            <div className="min-w-[209px] min-h-[48px] border-2 border-[#959595] px-5 py-2 rounded-lg text-[20px] text-[#959595] text-center font-bold">
              Download CV
            </div>
          </div>
        </div>
        <div className="flex min-w-[408px] min-h-[99px] justify-center items-center gap-[15px] rounded-[8px] bg-[#ffffff]/4 p-[24px] text-center text-[20px] font-bold text-[#FFFFFF]">
          <div className="flex flex-col items-center justify-center pr-[30px] border-r border-[#959595]">
            {/* число дней сверху */}
            <div className="flex-1 text-[24px] font-bold text-[#FD6F00]">
              {diffDays} day
            </div>
            {/* название снизу */}
            <div className="flex-1 text-[20px] font-bold">Experiences</div>
          </div>
          <div className="flex flex-col items-center justify-center pl-[15px] pr-[30px] border-r border-[#959595]">
            <div className="flex-1 text-[24px] font-bold text-[#FD6F00]">1</div>
            <div className="flex-1 text-[20px] font-bold">Project done</div>
          </div>
          <div className="flex flex-col items-center justify-center pl-[15px] pr-[5px]">
            <div className="flex-1 text-[24px] font-bold">Novice</div>
            <div className="flex-1 text-[20px] font-bold">specialist</div>
          </div>
        </div>
      </div>
      <div className="rounded-full ml-auto min-w-[618px] min-h-[618px] bg-[#E46400] flex justify-center items-center">
        <img
          src={avatar}
          alt="avatar"
          className="min-w-[550px] min-h-[550px] rounded-full object-cover"
        />
      </div>
      <img
        src={klyaksa}
        alt="klyaksa"
        className="absolute left-2 top-62 min-w-[600.65px] min-h-[516.74px]"
      />
    </div>
  )
}
