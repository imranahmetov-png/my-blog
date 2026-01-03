import servisephoto from '../assets/img/servisephoto.svg'
function UiService() {
  const service = [
    {
      title: 'App Design',
      description: 'I can make simple initial websites.',
      img: servisephoto,
    },
    {
      title: 'App Design',
      description: 'I can make simple initial websites.',
      img: servisephoto,
    },
    {
      title: 'App Design',
      description: 'I can make simple initial websites.',
      img: servisephoto,
    },
    {
      title: 'App Design',
      description: 'I can make simple initial websites.',
      img: servisephoto,
    },
    {
      title: 'App Design',
      description: 'I can make simple initial websites.',
      img: servisephoto,
    },
    {
      title: 'App Design',
      description: 'I can make simple initial websites.',
      img: servisephoto,
    },
  ]

  return (
    <div className="bg-[#121212] flex flex-col justify-start items-center gap-[80px] overflow-hidden">
      {/* Центрируем текст по горизонтали */}
      <div className="w-[156px] h-[48px] flex justify-center items-center text-white text-[clamp(20px,4vw,40px)] leading-none font-bold">
        Services
      </div>
      <div className="grid grid-cols-3 gap-6">
        {service.map((s, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF]/4 min-w-[420px] min-h-[340px] rounded-xl text-[#575757]"
          >
            <div className="min-w-[131px] min-h-[124px] flex flex-col justify-center items-center gap-[16px] pt-[32px]">
              <img
                src={s.img}
                alt={s.title}
                className="min-w-[70px] min-h-[70px]"
              />
              <div className="font-bold text-[24px] text-[#FD6F00] text-center">
                {s.title}
              </div>
            </div>

            <div className="min-w-[339px] min-h-[96px] text-center">
              {s.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default UiService
//7 секции
//позволяет тексту подстраиваться под экран, не выходя за рамки блока (text-[clamp(20px,4vw,40px)] ).
//текст не «поднимается» и не «опускается» внутри строки, визуально становится плотным и проще центрируется в блоке, благодаря этому текст выглядит аккуратнее (leading-none).
