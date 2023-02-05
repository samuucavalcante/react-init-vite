import React from 'react'
import { ThemeProvider } from './ThemeProvider'

export const AppProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
