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
      <div className="w-[1298px] h-[808px] gap-[100px]"></div>
    </div>
  )
}

export default UiAboutMe
//whitespace-nowrap → гарантирует, что текст никогда не перенесётся на вторую строку
//leading-none → убирает лишнюю высоту строки
//px-3 —отступы слева и справа по 0.75rem (12px)
