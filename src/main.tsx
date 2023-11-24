import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokedexApp } from './PokedexApp.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokedexApp />
    </BrowserRouter>
  </React.StrictMode>,
)
