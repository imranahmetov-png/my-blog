import avatar from '../assets/img/avatar.svg'
import downloadCv from '../assets/img/downloadCv.svg'
import figmaIcone from '../assets/img/figmaIcone.svg'
export default function UiAboutMe() {
  return (
    <div className="flex flex-col justify-start items-center gap-10">
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
      <div className="w-[1296px] h-[1135px] flex flex-col justify-between items-center gap-25">
        <div className="flex justify-between items-center w-[1297px] h-[808px] gap-25">
          <div className=" w-[566px] h-[808px] pt-32 px-[22px]">
            <div className="w-[523px] h-[676px] bg-[#FFFFFF]/4 flex flex-col justify-between items-center px-[48px] pl-16 rounded-t-[261.5px] rounded-b-[12px] p-[32px] ">
              <img
                src={avatar}
                alt="avatar"
                className="min-w-[550px] min-h-[550px] rounded-full object-cover"
              />
            </div>
          </div>
          <div className="">
            <div className="w-[631px] h-[456px] text-[20px] text-[#959595] font-normal leading-[32px]">
              <p className="mb-4">
                Hi! My name is Imran, I am 17 years old, and I am a sophomore at
                AUES College majoring in Information Systems Technology.
              </p>
              <p className="mb-4">
                I am interested in Frontend development and actively studying I
                am interested in Frontend development and actively studying
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
            <div className="w-[224px] h-[48px] bg-gradient-to-r from-[#FD6F00] to-[#E46400] rounded-lg text-[20px] text-center font-bold flex justify-center items-center gap-[10px] px-[30px]">
              <img
                src={downloadCv}
                alt="DownloadCv"
                className="min-w-[24px] min-h-[24px] rounded-full object-cover"
              />
              <div className="text-[20px] text-[#FFFFFF] font-bold whitespace-nowrap">
                Download CV
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1227px] h-[227px] flex justify-start items-start gap-[96px]">
          <div className="w-[200px] h-[227px] flex flex-col justify-between items-center gap-[24px]">
            <img
              src={figmaIcone}
              alt="figmaIcone"
              className="min-w-[60.19px] min-h-[60.19px] rounded-full object-cover"
            />
            <div className="w-[77px] h-[73px] flex flex-col justify-between items-center gap-[8px]">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-[30px] font-bold">
                100%
              </div>
              <div className="text-[24px] text-[#959595] font-normal text-center ">
                Figma
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//whitespace-nowrap → гарантирует, что текст никогда не перенесётся на вторую строку
//leading-none → убирает лишнюю высоту строки
//px-3 —отступы слева и справа по 0.75rem (12px)
