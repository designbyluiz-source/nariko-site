import { Link } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'

const heroImageSrc = '/cruzeirobarber.png'
const immersionImageSrc = '/about-gallery/04.png'
const narikoSectionImageSrc = '/cb.jpg'

const immersionListItems = [
  'Demonstrações técnicas ao vivo',
  'Workshops com especialistas',
  'Palestras sobre posicionamento e crescimento',
  'Troca direta com grandes nomes da barbearia',
]

const narikoListItems = [
  'Construção de marca pessoal',
  'Disciplina e consistência',
  'Posicionamento no mercado',
  'Evolução profissional e visão de longo prazo',
]

export function CruzeiroBarberPage() {
  return (
    <PageShell>
      <section className="flex min-h-screen flex-col lg:h-[670px] lg:min-h-0 lg:flex-row">
        <div className="relative h-[min(42rem,52dvh)] w-full shrink-0 overflow-hidden lg:h-full lg:w-1/2">
          <img
            alt="Grupo no evento Cruzeiro Barber."
            className="absolute inset-0 h-full w-full object-cover object-center grayscale"
            decoding="async"
            src={heroImageSrc}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

          <Link
            className="absolute left-4 top-5 z-20 text-[1.05rem] font-normal leading-none text-[var(--color-accent)] transition-opacity duration-200 hover:opacity-70 sm:left-6 sm:top-6 sm:text-lg lg:left-[46px] lg:top-[31px] lg:text-[28px]"
            to="/#eventos"
          >
            &lt; VOLTAR
          </Link>
        </div>

        <div className="flex min-h-[48dvh] flex-1 items-center bg-[var(--color-accent)] px-5 py-10 text-[var(--color-title-left)] sm:px-8 sm:py-12 lg:h-full lg:w-1/2 lg:px-[10px] lg:py-10">
          <div className="mx-auto w-full max-w-[582.095px] text-[1.12rem] font-normal leading-[1.3] sm:text-[1.3rem] lg:text-[25px] lg:leading-normal">
            <h1 className="m-0 text-[1.65rem] font-bold leading-none sm:text-[2.1rem] lg:text-[25px] lg:leading-normal">
              Cruzeiro Barber
            </h1>
            <p className="m-0 mt-2 text-balance">
              Onde os maiores nomes da barbearia se encontram.
            </p>
            <p className="m-0 mt-6">
              O Cruzeiro Barber, parte do Cruzeiro da Beleza, e uma das experiencias mais exclusivas do
              universo da barbearia na America Latina.
            </p>
            <p className="m-0">
              Realizado em alto-mar, dentro de um navio, o evento reune durante varios dias alguns dos
              profissionais mais influentes do setor para uma imersao completa em tecnica, mentalidade e
              evolucao de carreira.
            </p>
            <p className="m-0">
              Mais do que um evento, o Cruzeiro Barber e um ambiente onde o mercado se encontra em seu
              nivel mais elevado — conectando profissionais que nao apenas executam, mas constroem
              referencia.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col bg-[var(--color-title-left)] lg:h-[670px] lg:flex-row">
        <div className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8 sm:py-12 lg:w-1/2 lg:px-[10px] lg:py-10">
          <div className="w-full max-w-[582.095px] text-[1.12rem] font-normal leading-[1.3] text-[var(--color-accent)] sm:text-[1.3rem] lg:text-[25px] lg:leading-normal">
            <h2 className="m-0 text-[1.35rem] font-bold leading-snug sm:text-[1.65rem] lg:text-[25px] lg:leading-normal">
              Uma imersão além da técnica
            </h2>
            <p className="m-0 mt-5">Durante a experiência, os participantes têm acesso a:</p>
            <ul className="m-0 mt-2 list-disc space-y-1 pl-6 marker:text-[var(--color-accent)] lg:pl-[37.5px]">
              {immersionListItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="m-0 mt-6">O foco vai além do corte.</p>
            <p className="m-0 mt-6">
              O Cruzeiro Barber trabalha a construção completa do profissional — da técnica à mentalidade,
              da execução ao posicionamento no mercado.
            </p>
          </div>
        </div>

        <div className="relative h-[min(24rem,45dvh)] w-full shrink-0 overflow-hidden lg:h-full lg:w-1/2">
          <img
            alt="Participantes do Cruzeiro Barber em palco com iluminação e logo MSC ao fundo."
            className="absolute inset-0 h-full w-full object-cover object-center"
            decoding="async"
            src={immersionImageSrc}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 bg-[var(--color-accent)] lg:grid-cols-2 lg:items-stretch">
        <div className="relative h-[min(24rem,45dvh)] w-full min-h-0 overflow-hidden lg:h-full lg:min-h-0">
          <img
            alt="Nariko no Cruzeiro Barber."
            className="absolute inset-0 h-full w-full object-cover object-center grayscale"
            decoding="async"
            src={narikoSectionImageSrc}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
        </div>

        <div className="flex w-full justify-center px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="w-full max-w-[582.095px] text-[1.12rem] font-normal leading-[1.3] text-[var(--color-title-left)] sm:text-[1.3rem] lg:text-[25px] lg:leading-normal">
            <h2 className="m-0 text-[1.35rem] font-bold leading-snug sm:text-[1.65rem] lg:text-[25px] lg:leading-normal">
              Nariko no Cruzeiro Barber
            </h2>
            <p className="m-0 mt-5">
              Entre os nomes que representam esse nível de excelência está Dailson Cardoso dos Reis.
            </p>
            <p className="m-0 mt-4">
              Reconhecido internacionalmente por seu trabalho com atletas de elite e pela sua técnica autoral
              em Hair Tattoo, Nariko leva para o palco mais do que demonstrações — ele compartilha visão.
            </p>
            <p className="m-0 mt-4">
              Sua participação no Cruzeiro Barber reforça um posicionamento claro:
              <br />
              não apenas executar em alto nível, mas influenciar e formar a próxima geração de profissionais.
            </p>
            <p className="m-0 mt-6">Em suas palestras, Nariko aborda temas que vão além da técnica:</p>
            <ul className="m-0 mt-2 list-disc space-y-1 pl-6 marker:text-[var(--color-title-left)] lg:pl-[37.5px]">
              {narikoListItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="m-0 mt-6">
              Sua fala conecta prática e mentalidade, mostrando que o crescimento na barbearia não acontece
              por acaso — é resultado de direção, decisão e execução contínua.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-[var(--color-title-left)] px-6 py-14 sm:px-10 sm:py-16 lg:p-20">
        <div className="w-full max-w-[988.515px] text-[1.12rem] font-normal leading-[1.3] text-[var(--color-accent)] sm:text-[1.2rem] lg:text-[25px] lg:leading-normal">
          <h2 className="m-0 text-[1.35rem] font-bold leading-snug sm:text-[1.65rem] lg:text-[25px] lg:leading-normal">
            Um novo padrão
          </h2>
          <p className="m-0 mt-5">
            Participar do Cruzeiro Barber não é apenas estar presente em um evento.
          </p>
          <p className="m-0 mt-4">
            É fazer parte de um ambiente onde o nível é mais alto, a troca é mais intensa e a visão é mais
            ampla.
          </p>
          <p className="m-0 mt-4">E estar no palco desse cenário não é comum.</p>
          <p className="m-0 mt-4">
            É onde poucos chegam —
            <br />
            e onde referências se consolidam.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
