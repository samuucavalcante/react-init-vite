import { createContext, useCallback, useContext, useState } from 'react'

export type ITheme = "dark" | "light"

type ContextThemeData = {
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>
  theme: ITheme
}

export const ThemeContext = createContext({} as ContextThemeData)

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme}} >
      {children}
    </ThemeContext.Provider>
  )
}

