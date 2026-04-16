import { Link } from 'react-router-dom'

import { RevealItem } from '../motion/RevealItem'

const imgLeftLarge = '/cruzeirobarber.png'
const imgTopLeft = '/about-gallery/01.png'
const imgTopRight = '/about-gallery/03.png'
const imgBottomWide = '/about-gallery/ib.png'

const pillButtonClassName =
  'touch-manipulation rounded-[50px] border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 text-center text-xs font-bold leading-none text-[var(--color-title-left)] shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-[transform,opacity,filter] duration-200 active:brightness-95 hover:brightness-110 sm:px-8 sm:py-4 sm:text-[1.05rem] lg:px-[40px] lg:py-[20px] lg:text-[22px]'

type GalleryTileProps = {
  to: string
  label: string
  src: string
  alt: string
  containerClassName: string
}

function GalleryTile({ to, label, src, alt, containerClassName }: GalleryTileProps) {
  return (
    <div className={`group relative min-h-0 w-full overflow-hidden ${containerClassName}`}>
      <img
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-[filter,transform] duration-500 ease-out group-active:scale-[1.01] lg:group-hover:scale-[1.02] lg:group-focus-within:scale-[1.02]"
        src={src}
      />

      <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-3 pb-4 sm:items-center sm:p-4 sm:pb-4 lg:items-center lg:pb-4">
        <Link
          className={`pointer-events-auto max-w-[min(100%,18rem)] translate-y-0 text-balance text-center opacity-100 transition-[opacity,transform] duration-200 sm:max-w-none sm:whitespace-nowrap lg:pointer-events-none lg:translate-y-2 lg:opacity-0 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:pointer-events-auto lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 ${pillButtonClassName}`}
          to={to}
        >
          {label}
        </Link>
      </div>
    </div>
  )
}

export function GallerySection() {
  return (
    <section className="w-full bg-black" id="eventos">
      <div className="flex w-full min-h-0 flex-col lg:h-[831px] lg:min-h-0 lg:flex-row">
        <RevealItem
          axis="x"
          className="w-full min-h-0 self-stretch lg:h-full lg:w-1/2"
          delayMs={40}
          distance={34}
        >
          <GalleryTile
            alt="Grupo em evento com iluminacao colorida no teto."
            containerClassName="aspect-[5/6] w-full sm:aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-0"
            label="Cruzeiro Barber"
            src={imgLeftLarge}
            to="/projetos/cruzeiro-barber"
          />
        </RevealItem>

        <div className="flex min-h-0 w-full min-w-0 flex-col self-stretch lg:h-full lg:w-1/2">
          <div className="flex min-h-0 w-full flex-1 flex-col sm:flex-row sm:min-h-[clamp(12rem,32vw,20rem)] lg:min-h-0 lg:flex-[1.55]">
            <RevealItem
              axis="y"
              className="w-full min-h-0 min-w-0 sm:h-full sm:flex-1 lg:h-full"
              delayMs={110}
              distance={22}
            >
              <GalleryTile
                alt="Equipe em ambiente de barbearia com faixa Instituto Mix e INJR."
                containerClassName="aspect-[4/3] w-full sm:aspect-auto sm:h-full sm:min-h-0 lg:h-full lg:min-h-0"
                label="Instituto NJR"
                src={imgTopLeft}
                to="/projetos/instituto-njr"
              />
            </RevealItem>

            <RevealItem
              axis="y"
              className="w-full min-h-0 min-w-0 sm:h-full sm:flex-1 lg:h-full"
              delayMs={170}
              distance={22}
            >
              <GalleryTile
                alt="Palestra em auditorio com plateia em cadeiras vermelhas."
                containerClassName="aspect-[4/3] w-full sm:aspect-auto sm:h-full sm:min-h-0 lg:h-full lg:min-h-0"
                label="Beauty & Barber Business"
                src={imgTopRight}
                to="/projetos/beauty-barber-business"
              />
            </RevealItem>
          </div>

          <RevealItem
            axis="y"
            className="flex min-h-0 w-full flex-1 flex-col lg:min-h-0 lg:flex-1"
            delayMs={230}
            distance={22}
          >
            <GalleryTile
              alt="Ita Beauty 2025."
              containerClassName="aspect-[2/1] w-full sm:aspect-[2170/948] lg:aspect-auto lg:h-full lg:min-h-0 lg:flex-1"
              label="Ita Beauty 2025"
              src={imgBottomWide}
              to="/projetos/workshop-masterclass"
            />
          </RevealItem>
        </div>
      </div>
    </section>
  )
}
