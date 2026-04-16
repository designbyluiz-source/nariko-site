import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Garante que, ao mudar de rota, a janela volte ao topo (evita herdar scroll da página anterior). */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
