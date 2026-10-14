import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Stylization.css'
import TheMainProj from './TheMainProj' //no " .jsx " here!!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TheMainProj />
  </StrictMode>,
)
