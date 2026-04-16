import { RevealItem } from '../motion/RevealItem'

const backgroundImageUrl = '/quer.png'

export function ContactCtaSection() {
  return (
    <section
      className="relative flex min-h-[13rem] items-center justify-center overflow-hidden px-6 py-12 sm:px-10 lg:min-h-[206px] lg:px-20 lg:py-20"
      id="contato"
    >
      <div className="absolute inset-0">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center grayscale"
          src={backgroundImageUrl}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex max-w-[22rem] flex-col items-center gap-5 px-2 text-center sm:max-w-none sm:gap-6 sm:px-0">
        <RevealItem axis="y" delayMs={60} distance={18}>
          <h2 className="text-balance text-[1.35rem] font-bold uppercase leading-tight text-[var(--color-accent)] sm:text-[1.85rem] sm:leading-none lg:text-[30px]">
            Quer levar o Nariko para o seu evento?
          </h2>
        </RevealItem>

        <RevealItem axis="y" delayMs={140} distance={14}>
          <a
            className="inline-flex min-h-12 w-full max-w-[20rem] items-center justify-center rounded-[50px] border-2 border-[var(--color-accent)] px-7 py-3.5 text-[1rem] font-bold leading-none text-[var(--color-accent)] transition-colors duration-200 active:bg-[var(--color-accent)]/15 sm:w-auto sm:max-w-none sm:px-10 sm:py-4 hover:bg-[var(--color-accent)] hover:text-[var(--color-title-left)] lg:min-h-0 lg:px-[40px] lg:py-[20px] lg:text-[22px]"
            href="#"
          >
            Entrar em contato
          </a>
        </RevealItem>
      </div>
    </section>
  )
}
