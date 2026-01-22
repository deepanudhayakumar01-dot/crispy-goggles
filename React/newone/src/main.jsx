import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './Button.jsx'
import Loin from './Loin.jsx'
import Timer from './Timer.jsx'

createRoot(document.getElementById('root')).render(
   <Timer/>
)
