import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LoadingGate } from './components/loading/LoadingGate'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingGate durationMs={5000} iconCycleMs={1200}>
        <App />
      </LoadingGate>
    </BrowserRouter>
  </StrictMode>,
)
