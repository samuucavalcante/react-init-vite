import { Home } from 'pages/Home'
import { User } from 'pages/User'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user',
    element: <User />,
  },
] satisfies RouteObject[]

export const RouterConfig = createBrowserRouter(routes)
