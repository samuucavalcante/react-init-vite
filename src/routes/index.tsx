import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { RouterConfig } from './routesConfig'

export const Routes: React.FC = () => {
  return <RouterProvider router={RouterConfig} />
}
