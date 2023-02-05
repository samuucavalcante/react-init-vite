import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'

export function useTheme() {
  const context = useContext(ThemeContext)

  return {
    theme: context.themeColors
  }

}
