import { ThemeContext } from "providers/ThemeProvider"
import { useCallback, useContext } from "react"

export function useTheme() {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = useCallback(() => {
    setTheme(old => old === "dark" ? "light" : "dark")
  },[])

  return {
    toggleTheme,
    theme
  }
}