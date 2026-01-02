import photoEX1 from '@/assets/img/photoEX1.svg'
export default function UiPortfolio() {
  const Projects = [
    {
      name: 'project1',
      img: photoEX1,
      categories: ['web'],
    },
    {
      name: 'project1',
      img: photoEX1,
      categories: ['web'],
    },
    {
      name: 'project1',
      img: photoEX1,
      categories: ['web'],
    },
    {
      name: 'project1',
      img: photoEX1,
      categories: ['web'],
    },
    {
      name: 'project1',
      img: photoEX1,
      categories: ['web'],
    },
    {
      name: 'project1',
      img: photoEX1,
      categories: ['web'],
    },
  ]
  return (
    <div className="flex flex-col justify-center items-center gap-[70px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center gap-10">
          <div className="text-[#FEFEFE] text-[40px] font-bold text-center flex flex-col justify-center items-center tracking-[0.03em]">
            Portfolio
          </div>
        </div>
      </div>

      {/* Галерея проектов */}
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[1445px] flex gap-[24px] flex-wrap">
          {/* Карточка 1 */}
          {Projects.map((project) => (
            <div className="w-[415px] h-[473px] rounded-[16px] overflow-hidden">
              <img
                src={project.img}
                alt="photoEX1"
                className="w-[415px] h-[415px] object-cover"
              />
              <div className="h-[58px] px-[16px] bg-white/8 rounded-b-[20px] overflow-hidden flex flex-row justify-between items-center">
                <p className="text-[16px] text-[#c6c6c6] font-bold ">
                  {project.name}
                </p>
                <p className="text-[16px] text-[#959595] font-bold ">
                  {project.categories}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
//overflow-hidden -> Обрезает всё, что выходит за границы контейнера
