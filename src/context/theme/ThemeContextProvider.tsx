import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'
const THEME_KEY = 'app-theme'

// ReactNode - тип детей

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const themeSaved = localStorage.getItem(THEME_KEY) as Theme
    if (themeSaved) {
      setTheme(themeSaved)
      document.documentElement.setAttribute('data-theme', themeSaved)
    }
  }, [])

  const switchTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

//Provider- кто внутри передает что то()
//'data-theme'- ключ к css
//'app-theme' - ключ
