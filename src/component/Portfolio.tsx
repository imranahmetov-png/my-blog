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
          <div className="text-[#FEFEFE] text-[24px] sm:text-[40px] font-bold text-center flex flex-col justify-center items-center tracking-[0.03em]">
            Portfolio
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap">
            {allCategories.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-[10px] sm:px-10 sm:py-[14px] rounded-lg transition-all mx-2 mb-4
                  ${
                    tag === 'All'
                      ? 'bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-[#FFFFFF] font-bold transition cursor-pointer'
                      : 'bg-white/8 text-[#C6C6C6] text-[16px] font-bold cursor-pointer tracking-[0.03em]'
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
        <div className="max-w-[1445px] flex gap-6 flex-wrap justify-center items-center">
          {/* Карточка 1 */}
          {filteredProjects.map((project) => (
            <a
              className="max-w-[354px] sm:min-w-[415px] rounded-2xl overflow-hidden"
              href={project.img}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.img}
                alt="photoEX1"
                className="max-w-[354px] sm:min-w-[415px] sm:min-h-[473px] object-cover"
              />
              <div className="px-4 h-[54px] bg-white/8 rounded-b-[20px] flex justify-between items-center">
                <p className="text-[16px] text-[#c6c6c6] font-bold">
                  {project.name}
                </p>
                <p className="text-[16px] text-[#959595] font-bold tracking-[0.03em]">
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
