import { useEffect } from 'react'
import type { RefObject } from 'react'

export const useClickOutsite = (
  refs: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      // Превращение в массив чтобы игнорировать клики по меню, бургеру и переключателю темы
      const refArray = Array.isArray(refs) ? refs : [refs]

      // Проверка был ли клик внутри ХОТЯ БЫ ОДНОГО из указанных элементов
      const isInside = refArray.some(
        (ref) => ref.current && ref.current.contains(target)
      )

      if (!isInside) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [refs, callback])
}
// почему именно масив-тк передается уже 3 элемента (меню, кнопка-бургер, переключатель темы)
// e: MouseEvent - тип события
// e.target as Node - приведение типа, т.к. contains принимает Node
// перенес определение функции handleClick внутрь useEffect. Тогда она перестанет быть внешней зависимостью
