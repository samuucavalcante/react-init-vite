import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { RouterConfig } from './routesConfig'
import { useTheme } from 'styled-components'

export const Routes: React.FC = () => {
  

  return <RouterProvider router={RouterConfig} />
}
