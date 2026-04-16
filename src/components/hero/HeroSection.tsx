import type { MouseEvent } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { heroSlideCount, heroSlidePairs } from './heroSlides'
import { HeroNav } from './HeroNav'
import { HeroPager } from './HeroPager'

export function HeroSection() {
  const middleIndex = Math.floor(heroSlideCount / 2)
  const [activeIndex, setActiveIndex] = useState(middleIndex)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })

  const leftSlides = useMemo(
    () => heroSlidePairs.map((pair) => ({ src: pair.esquerda, alt: `Hero slide ${pair.n} — imagem esquerda` })),
    [],
  )

  const rightSlides = useMemo(
    () => heroSlidePairs.map((pair) => ({ src: pair.direita, alt: `Hero slide ${pair.n} — imagem direita` })),
    [],
  )

  const reversedRightSlides = useMemo(() => [...rightSlides].reverse(), [rightSlides])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlideCount)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const offsetX = (event.clientX - centerX) / centerX
    const offsetY = (event.clientY - centerY) / centerY

    setParallaxOffset({
      x: offsetX * 11,
      y: offsetY * 11,
    })
  }

  const handleMouseLeave = () => {
    setParallaxOffset({ x: 0, y: 0 })
  }

  return (
    <section
      className="relative isolate min-h-[100dvh] overflow-hidden bg-white pb-[env(safe-area-inset-bottom,0px)] lg:min-h-0 lg:pb-0"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="flex min-h-[100dvh] flex-col lg:h-[831px] lg:min-h-0 lg:flex-row">
        <div className="relative min-h-[min(22rem,48dvh)] overflow-hidden sm:min-h-[min(26rem,50dvh)] lg:h-full lg:min-h-0 lg:w-[50.02%]">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${activeIndex * 100}%)` }}
          >
            {leftSlides.map((slide, index) => (
              <div className="relative h-full w-full overflow-hidden" key={slide.src}>
                <img
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-transform duration-700"
                  decoding={index === activeIndex ? 'sync' : 'async'}
                  loading={index === activeIndex ? 'eager' : 'lazy'}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={slide.src}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col bg-[var(--color-surface)] px-4 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6 lg:h-full lg:min-h-0 lg:w-[49.98%] lg:flex-none lg:px-[52px] lg:pb-0 lg:pt-[35px]">
          <HeroNav />

          <div className="flex flex-1 items-center justify-center py-8 sm:py-10 lg:py-0">
            <div className="flex w-full max-w-[22rem] flex-col items-center gap-6 sm:max-w-none sm:gap-8 lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-[50px]">
              <div
                className="relative aspect-square w-full max-w-[min(100%,18.5rem)] overflow-hidden bg-[var(--color-title-left)] sm:max-w-[21rem] sm:shrink-0 lg:h-[377px] lg:w-[377px] lg:max-w-none"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${(heroSlideCount - activeIndex - 1) * 100}%)` }}
                >
                  {reversedRightSlides.map((slide, index) => (
                    <div className="relative h-full w-full overflow-hidden" key={slide.src}>
                      <img
                        alt={slide.alt}
                        className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-transform duration-700"
                        decoding={index === heroSlideCount - activeIndex - 1 ? 'sync' : 'async'}
                        loading={index === heroSlideCount - activeIndex - 1 ? 'eager' : 'lazy'}
                        sizes="(min-width: 1024px) 380px, 90vw"
                        src={slide.src}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <HeroPager
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                total={heroSlideCount}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-full max-lg:top-[63%] -translate-x-1/2 -translate-y-1/2">
        <div className="mx-auto flex max-w-[1446px] items-center justify-center px-3 sm:px-4">
          <h1
            className="max-w-[100vw] text-center text-[clamp(2.85rem,15.5vw,9.375rem)] font-bold uppercase leading-[0.92] tracking-[-0.08em] text-[var(--color-accent)] transition-transform duration-300 ease-out will-change-transform sm:leading-none lg:text-[clamp(4.5rem,11vw,9.375rem)]"
            style={{
              transform: `translate3d(${parallaxOffset.x * 1.12}px, ${parallaxOffset.y * 1.12}px, 0)`,
            }}
          >
            NARIKO
          </h1>
        </div>
      </div>
    </section>
  )
}
