function UiHero() {
  return (
    <div className="flex justify-between items-center px-8 py-4 min-w-full min-h-[618px] pl-13">
      <div className="flex flex-col min-w-[408px] min-h-[511px] justify-start items-start gap-[80px]">
        <div className="flex flex-col min-w-[408px] min-h-[347px] justify-start items-start gap-[61px]">
          <div className="flex flex-col min-w-[408px] min-h-[238px] justify-start items-start gap-[17px]">
            <div className="flex flex-col min-w-[408px] min-h-[181px] justify-start items-start gap-[24px]">
              <div className="flex flex-col min-w-[219px] min-h-[73px] justify-start items-start gap-[10px] flex-wrap">
                <div className="text-[24px] text-[#707070]">Hi I am</div>
                <div className="text-[28px] text-[#707070] font-bold">
                  Akhmetov Imran
                </div>
              </div>
              <div className="relative bg-clip-text bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] transition-colors text-[70px] text-center flex items-center font-bold text-transparent">
                IT-Specialist
              </div>
            </div>
            <div className="icon"></div>
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
        <div className="flex min-w-[387px] min-h-[84px] justify-center items-start gap-[30px] rounded-[8px] bg-[#3c3c3c] opasity-4 p-[24px] text-center text-[20px] font-bold text-[#FFFFFF]">
          Novice specialist | Project done
        </div>
      </div>
      <div className="rounded-full min-w-[618px] min-h-[618px] bg-[#E46400] "></div>
    </div>
  )
}
export default UiHero
//opasity-прозрачность
//19 строка инста телега и тд
//linear-gradient ????????
//justify-right items-right нужно круг сделать, и справо
