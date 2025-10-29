import avatar from '@/assets/img/image 2.svg'
import inst from '@/assets/img/inst.svg'
import klyaksa from '@/assets/img/klyaksa.svg'
import telegram from '@/assets/img/telegram.svg'
function UiHero() {
  return (
    <div className="flex justify-between items-center px-8 py-4 min-w-[90%] min-h-[618px] pl-13">
      <div className="flex flex-col min-w-[408px] min-h-[511px] justify-start items-start gap-[80px]">
        <div className="flex flex-col min-w-[408px] min-h-[347px] justify-start items-start gap-[61px]">
          <div className="flex flex-col min-w-[408px] min-h-[238px] justify-start items-start gap-[17px]">
            {/*frame 1*/}
            <div className="flex flex-col min-w-[408px] min-h-[181px] justify-start items-start gap-[24px]">
              <div className="flex flex-col min-w-[219px] min-h-[73px] justify-start items-start gap-[10px] flex-wrap">
                <p className="text-[24px] text-[#707070]">Hi I am</p>
                <p className="text-[28px] text-[#707070] font-bold">
                  Akhmetov Imran
                </p>
              </div>
              <p className="bg-clip-text bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors text-[70px] text-center flex items-center font-bold text-transparent">
                IT-Specialist
              </p>
            </div>
            {/*frame 2*/}
            <div className="min-w-[95px] min-h-[40px] flex items-end gap-2">
              <img
                src={inst}
                alt="Instagram"
                className="min-w-[40px] min-h-[40px]"
              />
              <img
                src={telegram}
                alt="Telegram"
                className="min-w-[40px] min-h-[40px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 min-w-[389px] min-h-[48px]">
            <div className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] linear-gradient min-w-[156px] min-h-[48px] text-[20px] text-[#FFFFFF] text-center px-5 py-2 rounded-lg font-bold transition">
              Hire me
            </div>
            <div className="min-w-[209px] min-h-[48px] border-2 border-[#959595] px-5 py-2 rounded-lg text-[20px] text-[#959595] text-center font-bold">
              Download CV
            </div>
          </div>
        </div>
        <div className="flex min-w-[387px] min-h-[84px] justify-center items-center gap-[30px] rounded-[8px] bg-[#ffffff]/4 p-[24px] text-center text-[20px] font-bold text-[#FFFFFF]">
          <div className="min-w-[189px] min-h-[36px] flex-col items-start justify-start gap-[12px] pt-[6px] pb-[6px] pr-[30px] font-bold text-white border-r border-[#959595]">
            Novice specialist
          </div>
          Project done
        </div>
      </div>
      <div className="rounded-full min-w-[618px] min-h-[618px] bg-[#E46400] flex justify-center items-center">
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
export default UiHero
