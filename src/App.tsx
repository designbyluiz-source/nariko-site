import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { EventProjectPage } from './pages/EventProjectPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/sobre" />
        <Route element={<EventProjectPage />} path="/projetos/:slug" />
      </Routes>
    </>
  )
}

export default App
