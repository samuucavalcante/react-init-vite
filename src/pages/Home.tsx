import { Card } from 'components/Card'
import { useTheme } from 'hooks/useTheme'
import { useThemeSettings } from 'hooks/useThemeSettings'
import React from 'react'

export const Home: React.FC = () => {
  const { toggleTheme, theme } = useThemeSettings()
  const { theme: themeColors } = useTheme()

  return (
    <div>
      <Card />
      <div style={{ color: themeColors.colors.primary }}>Home: {theme}</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}
