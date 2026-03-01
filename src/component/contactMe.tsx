import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  subject: string // Поле-ловушка (Honeypot)
}

export default function UiContactMe() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    subject: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // e.target.name должен совпадать с ключами в FormData
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // если скрытое поле заполнено, значит это бот
    if (formData.subject) return
    setStatus('loading')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_ACCESS_WEB3_KEY,
          ...formData,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          subject: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start items-center gap-10 sm:gap-12,5"
    >
      <div className="flex flex-col gap-4,5">
        {/* Скрытое поле для защиты от спама */}
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="hidden"
        />
        <p className="text-[#FEFEFE] text-[24px] sm:text-[40px] tracking-[0.03em] font-bold whitespace-nowrap flex items-center justify-center">
          Contact Me
        </p>
        <p className="text-[16px] sm:text-[18px] text-[#707070] tracking-[0.03em] font-medium flex items-center justify-center text-center px-4 max-w-95,5 mx-auto">
          Cultivating Connections: Reach Out and Connect with Me
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:flex-wrap">
        {/* Name and Email fields */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[30px] w-full">
          <div className="w-full sm:w-[491px] h-[54px] bg-white/4 rounded-lg flex items-center px-6">
            <span className="text-[16px] text-[#959595] tracking-[0.03em] font-medium mr-2">
              Name:
            </span>
            <input
              type="text"
              name="name"
              value={formData.name} // Привязка к стейту
              onChange={handleChange} // Слушатель изменений
              required
              placeholder=". . ."
              className="flex-1 bg-transparent text-[16px] text-[#FFFFFF] placeholder-[#FFFFFF] focus:outline-none"
            />
          </div>

          <div className="w-full sm:w-[491px] h-[54px] bg-white/4 rounded-lg flex items-center px-6">
            <span className="text-[16px] text-[#959595] tracking-[0.03em] font-medium mr-2">
              Email:
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=". . ."
              className="flex-1 bg-transparent text-[16px] text-[#FFFFFF] placeholder-[#FFFFFF] focus:outline-none"
            />
          </div>
        </div>

        {/* Phone Number and Service of Interest fields */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[30px] w-full">
          <div className="w-full sm:w-[491px] h-[54px] bg-white/4 rounded-lg flex items-center whitespace-nowrap px-6">
            <span className="text-[16px] text-[#959595] tracking-[0.03em] font-medium mr-2">
              Phone Number:
            </span>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=". . ."
              className="flex-1 bg-transparent text-[16px] text-[#FFFFFF] placeholder-[#FFFFFF] focus:outline-none"
            />
          </div>

          <div className="relative w-full sm:w-[491px]">
            <div className="w-full h-[54px] bg-white/4 rounded-lg flex items-center justify-between px-6">
              <div className="flex items-center gap-2">
                <span className="text-[16px] text-[#959595] tracking-[0.03em] font-medium">
                  Service of Interest:
                </span>
                <span className="text-[16px] text-[#FFFFFF] tracking-[0.03em] font-medium">
                  {formData.service || '- - -'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`text-[#959595] curcor-poiter transition-transform ${isOpen ? 'rotate-180' : ''}`}
              >
                ▼
              </button>
            </div>

            {isOpen && (
              <div className="sm:absolute top-[60px] left-0 w-full bg-[#1A1A1A] text-[#FFFFFF] rounded-lg overflow-hidden z-10">
                {['Web Design', 'UI / UX', 'Frontend Development'].map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, service: item }))
                        setIsOpen(false)
                      }}
                      className="px-6 py-3 cursor-pointer text-[#FFFFFF] hover:bg-white/5"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Project Details field */}
        <div className="w-full h-[162px] sm:min-w-[491px] sm:min-h-[162px]">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Project Details..."
            className="w-[386px] h-[162px] sm:min-w-[491px] sm:min-h-[162px] bg-white/4 rounded-lg text-[16px] text-[#959595] tracking-[0.03em] font-medium px-6 py-[14px] resize-none"
          ></textarea>
        </div>

        {/* Send button */}
        <div className="flex justify-center sm:justify-start w-full">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-[85px] h-[35px] sm:w-[127px] sm:h-[48px] transition-transform duration-300 hover:scale-105 text-[#959595] text-center text-[16px] sm:text-[18px] font-bold tracking-[0.03em] border-2 border-[#959595] rounded-lg flex items-center justify-center cursor-pointer"
          >
            Send
          </button>
        </div>
        {/* Уведомления о статусе */}
        {status === 'success' && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500">Something went wrong. Try again.</p>
        )}
      </div>
    </form>
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
