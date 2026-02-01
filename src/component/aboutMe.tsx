import avatar from '../assets/img/avatar.svg'
import Figma from '../assets/img/Figma.svg'
import HTML5 from '../assets/img/HTML5.svg'
import React from '../assets/img/React.svg'
import JS from '../assets/img/JS.svg'
import CSS from '../assets/img/CSS.svg'
// при смене (perсent: 0.1) следи за (percentText: ['10%'])
export default function UiAboutMe() {
  const CircleBar = [
    {
      circle: 'circle',
      name: ['Figma'],
      perсent: 0.1,
      percentText: ['10%'],
      img: Figma,
      line: 'line',
    },
    {
      circle: 'circle',
      name: ['JS'],
      perсent: 0.1,
      percentText: ['10%'],
      img: JS,
      line: 'line',
    },
    {
      circle: 'circle',
      name: ['Css'],
      perсent: 0.1,
      percentText: ['10%'],
      img: CSS,
      line: 'line',
    },
    {
      circle: 'circle',
      name: ['Html'],
      perсent: 0.1,
      percentText: ['10%'],
      img: HTML5,
      line: 'line',
    },
    {
      circle: 'circle',
      name: ['React'],
      perсent: 0.1,
      percentText: ['10%'],
      img: React,
      line: 'line',
    },
  ]
  const radius = 46
  const circumference = 2 * Math.PI * radius
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-[188px] h-[98px] flex flex-col">
        <div className="h-[48px] flex items-center justify-center">
          <p className="text-[#FEFEFE] text-[40px] font-bold leading-none whitespace-nowrap">
            About Me
          </p>
        </div>

        <div className="flex items-center justify-center px-3">
          <p className="text-[#707070] text-[16px] text-center leading-none whitespace-nowrap">
            Info about me
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-25">
        <div className="flex flex-col sm:flex sm:flex-row justify-between items-center gap-25">
          <div className="max-w-[365.64px] max-h-[564.88px] sm:min-w-[523px] sm:min-h-[676px] bg-[#FFFFFF]/4 flex flex-col justify-between items-center rounded-t-[261.5px] rounded-b-[12px] p-[32px] ">
            <img
              src={avatar}
              alt="avatar"
              className="min-w-[550px] min-h-[550px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="max-w-[365.64px] sm:min-w-[631px] sm:min-h-[456px] text-[16px] sm:text-[20px] text-[#959595] font-normal leading-[32px]">
              <p className="mb-4">
                Hi! My name is Imran, I am 17 years old, and I am a sophomore at
                AUES College majoring in Information Systems Technology.
              </p>
              <p className="mb-4">
                I am interested in Frontend development and actively studying
                JavaScript, creating my first projects and continually expanding
                my knowledge of web technologies.
              </p>
              <p className="mb-4">
                Outside of school, I practice swimming, study English, and enjoy
                spending time playing computer games.
              </p>
              <p className="mb-4">
                I am a young developer with a strong desire to grow, experiment,
                and turn my ideas into functional interfaces.
              </p>
            </div>
          </div>
        </div>
        {/* Прогресс бары */}
        <div className="flex justify-between items-start w-full">
          {CircleBar.map((s, index) => (
            <div
              key={index}
              className="w-[200px] h-[227px] flex flex-col items-center gap-[24px]"
            >
              <div className="relative flex items-center justify-center">
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 100 100"
                  className="transform rotate-[-90deg]"
                >
                  {/* Характеристики круга */}
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#959595"
                    stroke-width="7"
                    fill="none"
                  />
                  {/* Линия градиента(програесс) */}
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FD6F00" />
                      <stop offset="100%" stopColor="#E46400" />
                    </linearGradient>
                  </defs>
                  {/* (Сам прогресс, цвет и проценты)Прогресс */}
                  {s.line}
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="url(#grad)"
                    strokeWidth="8"
                    fill="none"
                    stroke-dasharray={`${circumference * s.perсent} ${
                      circumference * (1 - s.perсent)
                    }`} // высчитваем видимую и невидимую часть линии
                    stroke-dashoffset="0"
                    stroke-linecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
                <img
                  src={s.img}
                  className="min-w-[60.19px] min-h-[60.19px] absolute z-20 rounded-full object-cover"
                />
              </div>
              <div className="w-[77px] h-[73px] flex flex-col items-center gap-[8px]">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-[30px] font-bold">
                  {s.percentText}
                </div>
                <div className="text-[24px] text-[#959595] font-normal text-center ">
                  {s.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

//whitespace-nowrap → гарантирует, что текст никогда не перенесётся на вторую строку
//leading-none → убирает лишнюю высоту строки
//px-3 —отступы слева и справа по 0.75rem (12px)

//Автоматические вычисления линии круга{
//circumference * s.percent → видимая часть линии
//circumference * (1 - s.percent) → невидимая часть линии
//s.percent — это число от 0 до 1 (например, 0.1 = 10%, 0.5 = 50%)}

//perсent
