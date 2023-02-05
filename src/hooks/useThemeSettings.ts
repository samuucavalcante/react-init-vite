import { ThemeContext } from 'providers/ThemeProvider'
import { useContext } from 'react'

export function useThemeSettings() {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return {
    toggleTheme,
    theme,
  }
}
