import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Stairs from './components/common/stairs.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Stairs/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
