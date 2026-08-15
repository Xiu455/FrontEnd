import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'prop-for-that/auto'

import './index.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
