import { useEffect, useMemo, useRef, useState } from 'react'

type CursorVariant = 'light' | 'dark'

function parseRgb(color: string): { r: number; g: number; b: number; a: number } | null {
  const trimmed = color.trim()

  const rgbaMatch = trimmed.match(
    /^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
  )
  if (!rgbaMatch) return null

  const r = Number(rgbaMatch[1])
  const g = Number(rgbaMatch[2])
  const b = Number(rgbaMatch[3])
  const a = rgbaMatch[4] === undefined ? 1 : Number(rgbaMatch[4])

  if ([r, g, b, a].some((value) => Number.isNaN(value))) return null

  return { r, g, b, a }
}

function parseHex(color: string): { r: number; g: number; b: number } | null {
  const trimmed = color.trim()
  if (!trimmed.startsWith('#')) return null

  const hex = trimmed.slice(1)
  if (hex.length === 3) {
    const r = Number.parseInt(hex[0] + hex[0], 16)
    const g = Number.parseInt(hex[1] + hex[1], 16)
    const b = Number.parseInt(hex[2] + hex[2], 16)
    return Number.isFinite(r) && Number.isFinite(g) && Number.isFinite(b) ? { r, g, b } : null
  }

  if (hex.length === 6) {
    const r = Number.parseInt(hex.slice(0, 2), 16)
    const g = Number.parseInt(hex.slice(2, 4), 16)
    const b = Number.parseInt(hex.slice(4, 6), 16)
    return Number.isFinite(r) && Number.isFinite(g) && Number.isFinite(b) ? { r, g, b } : null
  }

  return null
}

function colorDistanceSquared(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number },
) {
  const dr = a.r - b.r
  const dg = a.g - b.g
  const db = a.b - b.b
  return dr * dr + dg * dg + db * db
}

function linearize(channel: number) {
  const c = channel / 255
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }) {
  const R = linearize(r)
  const G = linearize(g)
  const B = linearize(b)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

function isLightBackground(color: string) {
  const parsed = parseRgb(color)
  if (!parsed) return false
  if (parsed.a < 0.08) return false

  const luminance = relativeLuminance(parsed)
  const maxChannel = Math.max(parsed.r, parsed.g, parsed.b)

  return luminance > 0.86 || maxChannel >= 245
}

function isAccentRedBackground(color: string, accentRgb: { r: number; g: number; b: number }) {
  const parsed = parseRgb(color)
  if (!parsed) return false
  if (parsed.a < 0.08) return false

  if (colorDistanceSquared(parsed, accentRgb) <= 35 * 35) return true

  const max = Math.max(parsed.r, parsed.g, parsed.b)
  const min = Math.min(parsed.r, parsed.g, parsed.b)
  const saturation = max === 0 ? 0 : (max - min) / max

  return (
    parsed.r >= 200 &&
    parsed.r - parsed.g >= 55 &&
    parsed.r - parsed.b >= 55 &&
    saturation >= 0.55 &&
    relativeLuminance(parsed) < 0.72
  )
}

function resolveBackgroundColor(start: Element | null): string | null {
  let current: Element | null = start
  for (let depth = 0; depth < 14 && current; depth += 1) {
    if (current instanceof HTMLElement) {
      const bg = getComputedStyle(current).backgroundColor
      const parsed = parseRgb(bg)
      if (parsed && parsed.a > 0.08) return bg
    }
    current = current.parentElement
  }

  const bodyBg = getComputedStyle(document.body).backgroundColor
  const htmlBg = getComputedStyle(document.documentElement).backgroundColor

  const bodyParsed = parseRgb(bodyBg)
  if (bodyParsed && bodyParsed.a > 0.08) return bodyBg

  const htmlParsed = parseRgb(htmlBg)
  if (htmlParsed && htmlParsed.a > 0.08) return htmlBg

  return null
}

export function CustomCursor() {
  const enabled = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  }, [])

  const [variant, setVariant] = useState<CursorVariant>('dark')
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const frameRef = useRef<number | null>(null)
  const pendingRef = useRef<{ x: number; y: number } | null>(null)
  const lastPositionRef = useRef<{ x: number; y: number }>({ x: -1, y: -1 })
  const lastVariantRef = useRef<CursorVariant>('dark')

  const hotspot = useMemo(() => ({ x: 20, y: 4 }), [])

  useEffect(() => {
    if (!enabled) return

    const accentRgb =
      parseHex(
        getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim(),
      ) ?? { r: 244, g: 68, b: 68 }

    const flush = () => {
      frameRef.current = null
      const next = pendingRef.current
      if (!next) return

      const lastPos = lastPositionRef.current
      const moved = Math.abs(next.x - lastPos.x) > 0.25 || Math.abs(next.y - lastPos.y) > 0.25
      if (moved) {
        lastPositionRef.current = next
        setPosition(next)
      }

      const target = document.elementFromPoint(next.x, next.y)
      const bg = resolveBackgroundColor(target)

      let nextVariant: CursorVariant = 'dark'
      if (bg) {
        if (isAccentRedBackground(bg, accentRgb)) {
          nextVariant = 'dark'
        } else if (isLightBackground(bg)) {
          nextVariant = 'light'
        }
      }

      if (nextVariant !== lastVariantRef.current) {
        lastVariantRef.current = nextVariant
        setVariant(nextVariant)
      }
    }

    const schedule = (x: number, y: number) => {
      pendingRef.current = { x, y }
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(flush)
    }

    const handleMove = (event: MouseEvent) => {
      setVisible(true)
      schedule(event.clientX, event.clientY)
    }

    const handleLeaveWindow = () => {
      setVisible(false)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseleave', handleLeaveWindow)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeaveWindow)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [enabled])

  if (!enabled) return null

  const src =
    variant === 'light' ? '/barber-clippers-cursor-red.svg' : '/barber-clippers-cursor-white.svg'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed z-[9999] transition-opacity duration-150 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate3d(${position.x - hotspot.x}px, ${position.y - hotspot.y}px, 0)`,
        willChange: 'transform, opacity',
      }}
    >
      <img
        alt=""
        className="select-none"
        draggable={false}
        height={40}
        src={src}
        width={40}
        style={{
          filter:
            variant === 'light'
              ? 'drop-shadow(0 10px 18px rgba(0,0,0,0.18))'
              : 'drop-shadow(0 12px 22px rgba(0,0,0,0.45))',
        }}
      />
    </div>
  )
}
