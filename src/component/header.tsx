export default function UIHeader() {
  return (
    <header className="flex justify-between text-align:center items-center px-8 py-4 min-w-[90%] min-h-[43px]">
      <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FD6F00] to-[#E60026] text-[30px] text-align:left min-w-[81px] min-h-[39px] flex items-center pl-4 font-bold ">
        Imran
      </div>
      <nav className="flex gap-6 min-w-[653px] min-h-[24px] text-align:center align-top">
        <a
          href="#Home"
          className="relative text-[#FD6F00] transition text-[20px] text-align:center flex items-center pl4- font-bold"
        >
          Home
        </a>
        <a
          href="#Services"
          className="relative text-[#959595] transition text-[20px] text-align:center flex items-center pl4"
        >
          Services
        </a>
        <a
          href="#About me"
          className="relative text-[#959595] transition text-[20px] text-align:center flex items-center pl4"
        >
          About me
        </a>
        <a
          href="#Portfolio"
          className="relative text-[#959595] transition text-[20px] text-align:center flex items-center pl4"
        >
          Portfolio
        </a>
        <a
          href="#Contact me"
          className="relative text-[#959595] transition text-[20px] text-align:center flex items-center pl4"
        >
          Contact me
        </a>
      </nav>
      <a
        href="#hire"
        className="bg-[#FD6F00] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#ff8800] transition"
      >
        Hire Me
      </a>
    </header>
  )
}
