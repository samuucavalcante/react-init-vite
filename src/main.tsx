import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './providers'
import { Routes } from 'routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
     <Routes />
    </AppProvider>
  </React.StrictMode>,
)