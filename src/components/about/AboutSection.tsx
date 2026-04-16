import { Link } from 'react-router-dom'

import { RevealItem } from '../motion/RevealItem'

const paragraphs = [
  'Dailson Cardoso dos Reis, o Nariko Hair Style, comecou aos 13 anos e transformou a barbearia em arte.',
  'Especialista em Hair Tattoo, desenvolveu uma tecnica propria que combina precisao e realismo, criando cortes unicos que vao alem do convencional.',
  'Seu trabalho ultrapassou fronteiras e hoje impacta mais de 120 paises, sendo responsavel pelo visual de atletas que vivem o futebol no mais alto nivel, como Neymar Jr., Thiago Silva, Gabriel Jesus e Richarlison.',
  'Hoje, cortar com o Nariko nao e so estetica.',
  'E fazer parte de um padrao.',
]

export function AboutSection() {
  return (
    <section
      className="bg-[var(--color-title-left)] px-5 py-9 sm:px-10 sm:py-14 lg:px-20 lg:py-20"
      id="sobre"
    >
      <div className="mx-auto flex max-w-[1446px] flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-20">
        <RevealItem axis="x" className="shrink-0 lg:w-[290px]" delayMs={40} distance={28}>
          <h2 className="text-[clamp(2.65rem,11vw,3.25rem)] font-bold uppercase leading-none tracking-[-0.04em] text-[var(--color-accent)] sm:text-[4rem] lg:text-[5rem]">
            Sobre
          </h2>
        </RevealItem>

        <div className="flex min-w-0 flex-1 flex-col items-start lg:items-end">
          <div className="max-w-[726px] text-[var(--color-accent)]">
            <RevealItem axis="y" delayMs={90} distance={22}>
              <p className="text-balance text-[1.35rem] font-bold leading-snug sm:text-[1.75rem] sm:leading-[1.25] lg:text-[2.18rem]">
                De Sao Vicente para o topo do futebol mundial.
              </p>
            </RevealItem>

            <div className="mt-5 space-y-3 text-[1.05rem] leading-relaxed sm:mt-6 sm:text-[1.2rem] sm:leading-[1.28] lg:text-[25px]">
              {paragraphs.map((paragraph, index) => (
                <RevealItem axis="y" delayMs={140 + index * 55} distance={16} key={paragraph}>
                  <p className={paragraph === 'E fazer parte de um padrao.' ? 'mt-[-0.5rem]' : ''}>
                    {paragraph}
                  </p>
                </RevealItem>
              ))}
            </div>
          </div>

          <RevealItem axis="y" className="mt-8 sm:mt-10 lg:mt-[3.1rem]" delayMs={420} distance={14}>
            <Link
              className="inline-flex min-h-11 items-center text-[1.25rem] font-bold uppercase leading-none text-[#5e5e5e] transition-opacity duration-200 active:opacity-70 sm:text-[1.6rem] hover:opacity-70 lg:min-h-0 lg:text-[30px]"
              to="/sobre"
            >
              Pagina Sobre &gt;
            </Link>
          </RevealItem>
        </div>
      </div>
    </section>
  )
}
