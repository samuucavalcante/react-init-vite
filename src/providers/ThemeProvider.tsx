import React from 'react'
import { Theme, useLocalStorage } from 'hooks/useLocalStorage'
import { useOnceCall } from 'hooks/useOnceCall'
import { createContext } from 'react'
import { IAppTheme } from 'theme/light'
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'

const { dark } = await import('../theme/dark')
const { light } = await import('../theme/light')

export type ITheme = 'dark' | 'light'

type ContextThemeData = {
  setTheme: (value: Theme | ((val: Theme) => Theme)) => void
  theme: ITheme
  themeColors: IAppTheme
}

export const ThemeContext = createContext({} as ContextThemeData)

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [themeStorage, setThemeStorage] = useLocalStorage('theme')

  useOnceCall(() => {
    if (!themeStorage) setThemeStorage('light')
  })

  const themeColors = themeStorage === 'dark' ? dark : light
  document.body.style.background = themeColors.colors.background

  return (
    <ThemeContext.Provider value={{ theme: themeStorage, themeColors, setTheme: setThemeStorage }}>
      <ThemeProviderStyledComponents theme={themeColors}>{children}</ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  )
}
