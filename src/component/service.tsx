import servisephoto from '../assets/img/servisephoto.svg'
function UiFrame() {
  return (
    <div className="bg-[#121212] min-w-screen min-h-screen flex flex-col justify-start items-center pt-20 gap-[80px]">
      {/* Центрируем текст по горизонтали */}
      <div className="w-[156px] h-[48px] flex justify-center items-center text-white text-[clamp(20px,4vw,40px)] leading-none">
        Services
      </div>
      <div className="min-w-[1297px] min-h-[340px] gap-[80px] align-left flex flex-row justify-center items-center">
        <div className="min-w-[420px] min-h-[340px] gap-[40px] align-left flex flex-col justify-center items-center">
          <div className="bg-[#2b2b2b] min-w-[420px] min-h-[340px] rounded-xl text-[#575757] ">
            <div className="min-w-[131px] min-h-[124px] flex flex-col justify-center items-center gap-[16px] pt-[32px]">
              <img
                src={servisephoto}
                alt="Service"
                className="min-w-[70px] min-h-[70px] justify-start items-start"
              />
              <div className="font-bold text-[24px] text-[#FD6F00] text-center items-start ">
                App Design
              </div>
            </div>
            <div className="min-w-[339px] min-h-[96px] text-center gap-auto items-center ">
              I can make simple initial websites.
            </div>
          </div>
        </div>
        <div className="min-w-[420px] min-h-[340px] gap-[40px] align-left flex flex-col justify-center items-center">
          <div className="bg-[#2b2b2b] min-w-[420px] min-h-[340px] rounded-xl text-[#575757] ">
            <div className="min-w-[131px] min-h-[124px] flex flex-col justify-center items-center gap-[16px] pt-[32px]">
              <img
                src={servisephoto}
                alt="Service"
                className="min-w-[70px] min-h-[70px] justify-start items-start"
              />
              <div className="font-bold text-[24px] text-[#FD6F00] text-center items-start ">
                App Design
              </div>
            </div>
            <div className="min-w-[339px] min-h-[96px] text-center gap-auto items-center ">
              I can make simple initial websites.
            </div>
          </div>
        </div>
        <div className="min-w-[420px] min-h-[340px] gap-[40px] align-left flex flex-col justify-center items-center">
          <div className="bg-[#2b2b2b] min-w-[420px] min-h-[340px] rounded-xl text-[#575757] ">
            <div className="min-w-[131px] min-h-[124px] flex flex-col justify-center items-center gap-[16px] pt-[32px]">
              <img
                src={servisephoto}
                alt="Service"
                className="min-w-[70px] min-h-[70px] justify-start items-start"
              />
              <div className="font-bold text-[24px] text-[#FD6F00] text-center items-start ">
                App Design
              </div>
            </div>
            <div className="min-w-[339px] min-h-[96px] text-center gap-auto items-center ">
              I can make simple initial websites.
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[1297px] min-h-[340px] gap-[80px] align-left flex flex-row justify-center items-center">
        <div className="min-w-[420px] min-h-[340px] gap-[40px] align-left flex flex-col justify-center items-center">
          <div className="bg-[#2b2b2b] min-w-[420px] min-h-[340px] rounded-xl text-[#575757] ">
            <div className="min-w-[131px] min-h-[124px] flex flex-col justify-center items-center gap-[16px] pt-[32px]">
              <img
                src={servisephoto}
                alt="Service"
                className="min-w-[70px] min-h-[70px] justify-start items-start"
              />
              <div className="font-bold text-[24px] text-[#FD6F00] text-center items-start ">
                App Design
              </div>
            </div>
            <div className="min-w-[339px] min-h-[96px] text-center gap-auto items-center ">
              I can make simple initial websites.
            </div>
          </div>
        </div>
        <div className="min-w-[420px] min-h-[340px] gap-[40px] align-left flex flex-col justify-center items-center">
          <div className="bg-[#2b2b2b] min-w-[420px] min-h-[340px] rounded-xl text-[#575757] ">
            <div className="min-w-[131px] min-h-[124px] flex flex-col justify-center items-center gap-[16px] pt-[32px]">
              <img
                src={servisephoto}
                alt="Service"
                className="min-w-[70px] min-h-[70px] justify-start items-start"
              />
              <div className="font-bold text-[24px] text-[#FD6F00] text-center items-start ">
                App Design
              </div>
            </div>
            <div className="min-w-[339px] min-h-[96px] text-center gap-auto items-center ">
              I can make simple initial websites.
            </div>
          </div>
        </div>
        <div className="min-w-[420px] min-h-[340px] gap-[40px] align-left flex flex-col justify-center items-center">
          <div className="bg-[#2b2b2b] min-w-[420px] min-h-[340px] rounded-xl text-[#575757] ">
            <div className="min-w-[131px] min-h-[124px] flex flex-col justify-center items-center gap-[16px] pt-[32px]">
              <img
                src={servisephoto}
                alt="Service"
                className="min-w-[70px] min-h-[70px] justify-start items-start"
              />
              <div className="font-bold text-[24px] text-[#FD6F00] text-center items-start ">
                App Design
              </div>
            </div>
            <div className="min-w-[339px] min-h-[96px] text-center gap-auto items-center ">
              I can make simple initial websites.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UiFrame
//7 секции
//позволяет тексту подстраиваться под экран, не выходя за рамки блока (text-[clamp(20px,4vw,40px)] ).
//текст не «поднимается» и не «опускается» внутри строки, визуально становится плотным и проще центрируется в блоке, благодаря этому текст выглядит аккуратнее (leading-none).
