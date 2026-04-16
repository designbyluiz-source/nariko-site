import type { PropsWithChildren } from 'react'
import { useEffect, useId, useState } from 'react'

const LOADING_DURATION_MS = 5000
const ICON_CYCLE_MS = 1200
const EXIT_ANIMATION_MS = 520

const ICONS = [
  { src: '/loading-icons/comb.svg', alt: '', rotate: false },
  { src: '/loading-icons/barber-scissors.svg', alt: '', rotate: false },
  { src: '/loading-icons/barber-clippers.svg', alt: '', rotate: true },
] as const

type LoadingGateProps = PropsWithChildren<{
  /** Tempo total com a tela de loading visível antes da animação de saída. */
  durationMs?: number
  /** Intervalo entre troca dos 3 ícones. */
  iconCycleMs?: number
}>

export function LoadingGate({
  children,
  durationMs = LOADING_DURATION_MS,
  iconCycleMs = ICON_CYCLE_MS,
}: LoadingGateProps) {
  const titleId = useId()
  const [iconIndex, setIconIndex] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [done])

  useEffect(() => {
    if (done) return

    const intervalId = window.setInterval(() => {
      setIconIndex((i) => (i + 1) % ICONS.length)
    }, iconCycleMs)

    const exitStartId = window.setTimeout(() => {
      setExiting(true)
    }, durationMs)

    const removeId = window.setTimeout(() => {
      setDone(true)
    }, durationMs + EXIT_ANIMATION_MS)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(exitStartId)
      window.clearTimeout(removeId)
    }
  }, [done, durationMs, iconCycleMs])

  const current = ICONS[iconIndex]!

  return (
    <>
      {children}
      {!done ? (
        <div
          aria-busy="true"
          aria-labelledby={titleId}
          aria-live="polite"
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 bg-[#fff8c6] px-6 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[max(2.5rem,env(safe-area-inset-top))] transition-transform duration-500 ease-[cubic-bezier(0.2,0.9,0.2,1)] will-change-transform sm:gap-6 sm:p-16 lg:p-20 ${
            exiting ? '-translate-y-full' : 'translate-y-0'
          }`}
          role="status"
        >
          <div className="flex h-[140px] w-[140px] shrink-0 items-center justify-center overflow-hidden">
            <div className="loading-icon-swap flex size-[100px] items-center justify-center" key={iconIndex}>
              <div className={current.rotate ? 'rotate-[-36.947deg]' : undefined}>
                <img alt={current.alt} className="h-full w-full object-contain" src={current.src} />
              </div>
            </div>
          </div>

          <p
            className="text-[1.4rem] font-normal leading-normal tracking-normal text-[#f44] sm:text-[1.65rem] lg:text-[28px]"
            id={titleId}
          >
            LOADING...
          </p>
        </div>
      ) : null}
    </>
  )
}
