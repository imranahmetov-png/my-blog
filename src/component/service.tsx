import servisephoto from '../assets/img/servisephoto.svg'
function UiFrame() {
  return (
    <div className="bg-[#121212] min-w-screen min-h-screen flex justify-between items-center gap-[80px]">
      <div className="text-w-[156px] text-h-[48px] text-[#FFFFFF] text-center flex items-start text-[18px]">
        Services
      </div>
      <div className="min-w-[399.67px] min-h-[322px] gap-[40px]">
        <div className="bg-[#575757] min-w-[399.67px] min-h-[322px] rounded-xl text-[#959595]">
          <img
            src={servisephoto}
            alt="Service"
            className="min-w-[70px] min-h-[70px] items-start"
          />
          <div className="font-bold text-[24px] text-[#FD6F00] text-center items-start ">
            App Design
          </div>
          <div className="min-w-[339px] min-h-[96px] text-center">
            iiiinnnnffffoooo
          </div>
        </div>
      </div>
    </div>
  )
}
export default UiFrame
//7 секции
