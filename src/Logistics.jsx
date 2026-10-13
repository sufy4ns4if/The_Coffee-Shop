import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Stylization.css'
import TheMainProj from './TheMainProj.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TheMainProj />
  </StrictMode>,
)
