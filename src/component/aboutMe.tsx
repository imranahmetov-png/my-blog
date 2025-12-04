import avatar from '../assets/img/avatar.svg'
import downloadCv from '../assets/img/downloadCv.svg'
function UiAboutMe() {
  return (
    <div className="bg-[#121212] min-w-screen min-h-screen flex flex-col justify-start items-center pt-20 gap-[40px]">
      <div className="w-[188px] h-[98px] flex flex-col">
        <div className="h-[48px] flex items-center justify-center">
          <p className="text-[#FEFEFE] text-[40px] font-bold leading-none whitespace-nowrap">
            About Me
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center px-3">
          <p className="text-[#707070] text-[16px] text-center leading-none whitespace-nowrap">
            Info about me
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[1298px] h-[808px] gap-25">
        <div className=" w-[566px] h-[808px] pt-32 px-[22px]">
          <div className="w-[523px] h-[676px] bg-[#FFFFFF]/4 flex flex-col justify-between items-center px-[48px] pl-16 rounded-t-[261.5px] rounded-b-[12px] p-[32px] ">
            <img
              src={avatar}
              alt="avatar"
              className="min-w-[550px] min-h-[550px] rounded-full object-cover"
            />
          </div>
        </div>
        <div className="w-[631px] h-[544px] gap-10">
          <div className="w-[631px] h-[456px] text-[20px] text-[#959595] font-normal leading-[32px]">
            <p className="mb-4">
              Hi! My name is Imran, I am 17 years old, and I am a sophomore at
              AUES College majoring in Information Systems Technology.
            </p>
            <p className="mb-4">
              I am interested in Frontend development and actively studying I am
              interested in Frontend development and actively studying
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
          <div className="w-[224px] h-[48px] bg-gradient-to-r from-[#FD6F00] to-[#E46400] linear-gradient gap-[10px] border-2 px-5 py-2 rounded-lg text-[20px] text-center font-bold flex flex-col justify-between items-center">
            <img
              src={downloadCv}
              alt="DownloadCv"
              className="min-w-[48px] min-h-[48px] rounded-full object-cover"
            />
            <div className="text-[20px] text-[#FFFFFF] font-bold">
              Download CV
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UiAboutMe
//whitespace-nowrap → гарантирует, что текст никогда не перенесётся на вторую строку
//leading-none → убирает лишнюю высоту строки
//px-3 —отступы слева и справа по 0.75rem (12px)
