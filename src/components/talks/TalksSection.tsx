import { RevealItem } from '../motion/RevealItem'

const paragraphs = [
  'Com presenca em eventos e projetos como o Cruzeiro da Beleza, Nariko fala sobre muito mais do que corte.',
  'Suas palestras abordam desde tecnica avancada - como Hair Tattoo e construcao de identidade visual - ate o que realmente diferencia profissionais no longo prazo: mentalidade, posicionamento e consistencia.',
  'Mais do que ensinar, ele mostra o caminho de quem saiu do zero e hoje atua ao lado dos maiores nomes do futebol mundial.',
]

export function TalksSection() {
  return (
    <section
      className="bg-[var(--color-accent)] px-5 py-9 text-[var(--color-title-left)] sm:px-10 sm:py-14 lg:px-20 lg:py-20"
      id="palestras"
    >
      <div className="mx-auto flex max-w-[1446px] flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-20">
        <RevealItem axis="x" className="shrink-0 lg:w-[309px]" delayMs={40} distance={28}>
          <h2 className="text-[clamp(2.65rem,11vw,3.25rem)] font-bold uppercase leading-none tracking-[-0.04em] sm:text-[4rem] lg:text-[5rem]">
            Palestras
          </h2>
        </RevealItem>

        <div className="flex min-w-0 flex-1 flex-col items-start lg:items-end">
          <div className="max-w-[726px]">
            <RevealItem axis="y" delayMs={90} distance={22}>
              <p className="text-balance text-[1.35rem] font-bold leading-snug sm:text-[1.75rem] sm:leading-[1.25] lg:text-[2.18rem]">
                Muito alem da cadeira. Mentalidade de quem joga em outro nivel.
              </p>
            </RevealItem>

            <div className="mt-5 space-y-5 text-[1.05rem] font-normal leading-relaxed sm:mt-6 sm:space-y-6 sm:text-[1.2rem] sm:leading-[1.28] lg:text-[25px]">
              {paragraphs.map((paragraph, index) => (
                <RevealItem axis="y" delayMs={150 + index * 70} distance={16} key={paragraph}>
                  <p>{paragraph}</p>
                </RevealItem>
              ))}
            </div>
          </div>

          <RevealItem axis="y" className="mt-8 sm:mt-10 lg:mt-[2rem]" delayMs={360} distance={14}>
            <a
              className="inline-flex min-h-11 items-center text-[1.25rem] font-bold uppercase leading-none transition-opacity duration-200 active:opacity-70 sm:text-[1.6rem] hover:opacity-70 lg:min-h-0 lg:text-[40px]"
              href="#"
            >
              Palestras &gt;
            </a>
          </RevealItem>
        </div>
      </div>
    </section>
  )
}
