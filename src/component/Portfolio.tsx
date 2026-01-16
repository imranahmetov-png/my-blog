import imgWebSait from '@/assets/img/imgWebSait.png'

import { useState } from 'react'

export default function UiPortfolio() {
  const [selectedTag, setSelectedTag] = useState('All')

  const Projects = [
    {
      name: 'Personal website',
      img: imgWebSait,
      categories: ['Web'],
    },
  ]
  const allCategories = [
    'All',
    ...new Set(Projects.flatMap((p) => p.categories)),
  ]

  const filteredProjects =
    selectedTag === 'All'
      ? Projects
      : Projects.filter((p) => p.categories.includes(selectedTag))

  return (
    <div className="flex flex-col justify-center items-center gap-[70px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center gap-10">
          <div className="text-[#FEFEFE] text-[40px] font-bold text-center flex flex-col justify-center items-center tracking-[0.03em]">
            Portfolio
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap">
            {allCategories.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg transition-all mx-2 mb-4
                  ${
                    tag === 'All'
                      ? 'bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-[#FFFFFF] font-bold hover:bg-[#ff8800] transition cursor-pointer'
                      : 'bg-white/8 text-[#C6C6C6] text-[16px] font-bold cursor-pointer'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Галерея проектов */}
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[1445px] flex gap-[24px] flex-wrap justify-center items-center">
          {/* Карточка 1 */}
          {filteredProjects.map((project) => (
            <a
              className="w-[415px] h-[473px] rounded-[16px] overflow-hidden"
              href={project.img}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.img}
                alt="photoEX1"
                className="w-[415px] h-[415px] object-cover "
              />
              <div className="h-[58px] px-[16px] bg-white/8 rounded-b-[20px] overflow-hidden flex flex-row justify-between items-center">
                <p className="text-[16px] text-[#c6c6c6] font-bold ">
                  {project.name}
                </p>
                <p className="text-[16px] text-[#959595] font-bold ">
                  {project.categories}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
//overflow-hidden -> Обрезает всё, что выходит за границы контейнера
//  Работа кнопок
//${ tag === 'All'
// ? ЕСЛИ АЛЛ, РАБОТАЕТ ЭТО
// : ЕСЛИ НЕТ, ТО ЭТО }
