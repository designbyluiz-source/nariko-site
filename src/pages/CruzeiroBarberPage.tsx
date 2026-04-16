import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'

const heroImageSrc = '/cruzeirobarber.png'

export function CruzeiroBarberPage() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <PageShell>
      <div className="relative flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-[var(--color-accent)] text-[var(--color-title-left)] lg:flex-row lg:items-stretch">
        <Link
          className="absolute left-4 top-5 z-30 text-[1.05rem] font-normal leading-none text-[var(--color-accent)] transition-opacity duration-200 hover:opacity-70 sm:left-6 sm:top-6 sm:text-lg lg:left-[65px] lg:top-[37px] lg:text-[28px]"
          to="/#eventos"
        >
          &lt; VOLTAR
        </Link>

        <div className="relative h-[min(38dvh,22rem)] w-full shrink-0 lg:h-full lg:min-h-0 lg:w-1/2 lg:max-w-[50%]">
          <img
            alt="Grupo no Cruzeiro Barber, evento em alto-mar."
            className="absolute inset-0 h-full w-full object-cover object-center grayscale"
            decoding="async"
            src={heroImageSrc}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
        </div>

        <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden bg-[var(--color-accent)] lg:w-1/2 lg:max-w-[50%]">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-3 pb-3 pt-14 sm:px-4 sm:pt-16 lg:px-[10px] lg:pb-[10px] lg:pt-10">
            <div className="mx-auto flex w-full max-w-[582px] flex-col items-end text-[1.05rem] font-normal leading-normal sm:text-[1.15rem] lg:text-[25px]">
              <p className="mb-0 w-full font-bold">Cruzeiro Barber</p>
              <p className="mb-0 mt-3 w-full">Onde os maiores nomes da barbearia se encontram.</p>

              <p className="mb-0 mt-6 w-full">
                O Cruzeiro Barber, parte do Cruzeiro da Beleza, é uma das experiências mais exclusivas do
                universo da barbearia na América Latina.
              </p>
              <p className="mb-0 mt-4 w-full">
                Realizado em alto-mar, dentro de um navio, o evento reúne durante vários dias alguns dos
                profissionais mais influentes do setor para uma imersão completa em técnica, mentalidade e
                evolução de carreira.
              </p>
              <p className="mb-0 mt-4 w-full">
                Mais do que um evento, o Cruzeiro Barber é um ambiente onde o mercado se encontra em seu
                nível mais elevado — conectando profissionais que não apenas executam, mas constroem
                referência.
              </p>

              <p className="mb-0 mt-8 w-full font-bold">Uma imersão além da técnica</p>

              <p className="mb-0 mt-4 w-full">Durante a experiência, os participantes têm acesso a:</p>
              <ul className="mb-0 mt-3 w-full list-disc space-y-1 pl-6">
                <li>Demonstrações técnicas ao vivo</li>
                <li>Workshops com especialistas</li>
                <li>Palestras sobre posicionamento e crescimento</li>
                <li>Troca direta com grandes nomes da barbearia</li>
              </ul>

              <p className="mb-0 mt-6 w-full">O foco vai além do corte.</p>
              <p className="mb-0 mt-4 w-full">
                O Cruzeiro Barber trabalha a construção completa do profissional — da técnica à
                mentalidade, da execução ao posicionamento no mercado.
              </p>

              <p className="mb-0 mt-8 w-full font-bold">Nariko no Cruzeiro Barber</p>

              <p className="mb-0 mt-4 w-full">
                Entre os nomes que representam esse nível de excelência está Dailson Cardoso dos Reis.
              </p>
              <p className="mb-0 mt-4 w-full">
                Reconhecido internacionalmente por seu trabalho com atletas de elite e pela sua técnica
                autoral em Hair Tattoo, Nariko leva para o palco mais do que demonstrações — ele compartilha
                visão.
              </p>
              <p className="mb-0 mt-4 w-full">
                Sua participação no Cruzeiro Barber reforça um posicionamento claro:
                <br />
                não apenas executar em alto nível, mas influenciar e formar a próxima geração de
                profissionais.
              </p>

              <p className="mb-0 mt-6 w-full">Em suas palestras, Nariko aborda temas que vão além da técnica:</p>
              <ul className="mb-0 mt-3 w-full list-disc space-y-1 pl-6">
                <li>Construção de marca pessoal</li>
                <li>Disciplina e consistência</li>
                <li>Posicionamento no mercado</li>
                <li>Evolução profissional e visão de longo prazo</li>
              </ul>

              <p className="mb-0 mt-6 w-full">
                Sua fala conecta prática e mentalidade, mostrando que o crescimento na barbearia não
                acontece por acaso — é resultado de direção, decisão e execução contínua.
              </p>

              <p className="mb-0 mt-8 w-full font-bold">Um novo padrão</p>

              <p className="mb-0 mt-4 w-full">
                Participar do Cruzeiro Barber não é apenas estar presente em um evento.
              </p>
              <p className="mb-0 mt-4 w-full">
                É fazer parte de um ambiente onde o nível é mais alto, a troca é mais intensa e a visão é
                mais ampla.
              </p>
              <p className="mb-0 mt-4 w-full">E estar no palco desse cenário não é comum.</p>
              <p className="mb-0 mt-4 w-full">
                É onde poucos chegam —
                <br />
                e onde referências se consolidam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
