import { useState } from 'react'

export default function UiContactMe() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  return (
    <div className="flex flex-col justify-start items-center gap-[50px]">
      <div className="w-[547px] h-[98px] flex flex-col gap-[18px]">
        <div className="text-[#FEFEFE] text-[40px] tracking-[0.03em] font-bold whitespace-nowrap flex items-center justify-center">
          Contact Me
        </div>
        <div className="text-[18px] text-[#707070] tracking-[0.03em] font-medium flex items-center justify-center">
          Cultivating Connections: Reach Out and Connect with Me
        </div>
      </div>

      <div className="h-[408px] flex flex-col gap-[30px]">
        <div className="h-[54px] flex items-center gap-[30px]">
          <div className="w-[491px] h-[54px] bg-white/4 rounded-[8px] flex flex-row justify-left items-center px-[24px]">
            <span className="text-[16px] text-[#959595] tracking-[0.03em] font-medium mr-2">
              Name:
            </span>
            {/* Поле для ввода */}
            <input
              type="text"
              className="flex-1 bg-transparent text-[16px] text-[#FFFFFF] placeholder-[#959595] focus:outline-none"
              placeholder=". . ."
            />
          </div>
          <div className="w-[491px] h-[54px] bg-white/4 rounded-[8px] flex flex-row justify-left items-center px-[24px]">
            <span className="text-[16px] text-[#959595] tracking-[0.03em] font-medium mr-2">
              Email:
            </span>
            {/* Поле для ввода */}
            <input
              type="text"
              className="flex-1 bg-transparent text-[16px] text-[#FFFFFF] placeholder-[#959595] focus:outline-none"
              placeholder=". . ."
            />
          </div>
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="w-[491px] h-[54px] bg-white/4 rounded-[8px] flex flex-row justify-left items-center px-[24px]">
            {/* Левый текст */}
            <span className="text-[16px] text-[#959595] tracking-[0.03em] font-medium mr-2">
              Phone Number
            </span>
            {/* Поле для ввода */}
            <input
              type="text"
              className="flex-1 bg-transparent text-[16px] text-[#FFFFFF] placeholder-[#959595] focus:outline-none"
              placeholder=". . ."
            />
          </div>
          <div className="relative w-[491px]">
            {/* Поле */}
            <div className="h-[54px] bg-white/4 rounded-[8px] flex items-center justify-between px-[24px]">
              {/* Левая часть: Service of Interest + выбранная услуга */}
              <div className="flex items-center gap-2">
                <div className="text-[16px] text-[#959595] tracking-[0.03em] font-medium">
                  Service of Interest:
                </div>
                <div className="text-[16px] text-[#FFFFFF] tracking-[0.03em] font-medium">
                  {selectedService || '-'}
                </div>
              </div>
              {/* Стрелка — всегда справа */}
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-[#959595] cursor-pointer transition-transform"
              >
                <span
                  className={
                    isOpen ? 'rotate-180 inline-block' : 'inline-block'
                  }
                >
                  ▼
                </span>
              </button>
            </div>
            {/* Dropdown */}
            {isOpen && (
              <div className="absolute top-[60px] left-0 w-full bg-[#1A1A1A] rounded-[8px] overflow-hidden z-10">
                {['Web Design', 'UI / UX', 'Frontend Development'].map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setSelectedService(item)
                        setIsOpen(false)
                      }}
                      className="px-[24px] py-[12px] cursor-pointer text-[#959595] hover:bg-white/5"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start gap-[30px]">
          <div className="w-[491px] h-[54px] bg-white/4 rounded-[8px] flex items-center px-[24px]">
            {/* Левый текст */}
            <span className="text-[16px] text-[#959595] tracking-[0.03em] font-medium mr-2">
              Timeline:
            </span>

            {/* Поле для ввода */}
            <input
              type="text"
              className="flex-1 bg-transparent text-[16px] text-[#FFFFFF] placeholder-[#959595] focus:outline-none"
              placeholder=". . ."
            />
          </div>

          <textarea
            className="w-[491px] h-[162px] bg-white/4 rounded-[8px] text-[16px] text-[#959595] tracking-[0.03em] font-medium px-[24px] py-[14px] resize-none"
            placeholder="Project Details..."
          ></textarea>
        </div>

        <div className="flex flex-col justify-center items-end">
          <button className="w-[127px] h-[48px] text-[#959595] text-[18px] font-bold tracking-[0.03em] border-2 border-[#959595] rounded-[8px] transition flex items-center justify-center cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
//       Service of Interest — выбранная услуга(работает вместе с дропдауном)
//onClick={() => setIsOpen((prev) => !prev)} → переключатель состояния: открыто/закрыто
// selectedService — выбранная услуга
// isOpen — состояние открытия/закрытия дропдауна
//setSelectedService(item) → сохраняем выбранную услугу
// setIsOpen(false) → закрываем dropdown

//       Project Details... — детали проекта(текст-подсказка в поле для ввода)
//<textarea> — поле для ввода текста
//placeholder="Project Details..." — текст, который виден до того, как пользователь начал писать
//resize-none — запрещает изменять размер поля вручную

// focus:outline-none — убирает обводку при фокусе на input
// placeholder="..." — текст-подсказка в поле для ввода
// flex-1 — input занимает всё доступное пространство внутри контейнера
