import Web from '../assets/img/Web-Development.svg'
import ReactInterfaces from '../assets/img/React-Interfaces.svg'
import CodeFixing from '../assets/img/Code-Fixing.svg'
import GameDevelopment from '../assets/img/Game-Development.svg'
import LogicAlgorithms from '../assets/img/Logic&Algorithms.svg'
import StudentProjects from '../assets/img/Student Projects.svg'

function UiService() {
  const service = [
    {
      title: 'Web Development',
      description:
        'I build simple and responsive websites using HTML, CSS, and Tailwind.',
      img: Web,
    },
    {
      title: 'React Interfaces',
      description:
        'I develop clean UI components and simple interactive interfaces with React.',
      img: ReactInterfaces,
    },
    {
      title: 'Code Fixing',
      description:
        'I fix bugs, improve code structure, and help with small projects.',
      img: CodeFixing,
    },
    {
      title: 'Game Development',
      description:
        'I create simple 2D games with basic mechanics, logic, and levels. Experience with a game like Fire and Water.',
      img: GameDevelopment,
    },
    {
      title: 'Logic & Algorithms',
      description:
        'I implement timers, progress bars, counters, and basic game logic.',
      img: LogicAlgorithms,
    },
    {
      title: 'Student Projects',
      description:
        'I help with educational and college projects, including games and websites.',
      img: StudentProjects,
    },
  ]

  return (
    <div className="flex flex-col justify-start items-center gap-20 overflow-hidden">
      {/* Центрируем текст по горизонтали */}
      <div className="flex justify-center items-center text-white text-[24px] sm:text-[40px] leading-none font-bold tracking-[0.03em]">
        Services
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {service.map((s, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF]/4 w-full max-w-[183px] sm:min-w-[420px] sm:min-h-[340px] text-[#575757] flex flex-col rounded-xl py-[34px] px-[34px] gap-4 tracking-[0.03em]"
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src={s.img}
                alt={s.title}
                className="w-[34px] h-[34px] sm:w-[70px] sm:h-[70px]"
              />
              <div className="font-bold text-[20px] sm:text-[24px] text-[#FD6F00] text-center tracking-[0.03em]">
                {s.title}
              </div>
            </div>

            <div className="text-center font-medium text-[16px] sm:text-[20px] text-[#C6C6C6] tracking-[0.03em]">
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
