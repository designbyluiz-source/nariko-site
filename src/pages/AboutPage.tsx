import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'

const heroPortraitSrc = '/sobre.png'

export function AboutPage() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <PageShell>
      <div className="relative flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-[var(--color-title-left)] text-[var(--color-accent)] lg:flex-row lg:items-stretch">
        <Link
          className="absolute left-4 top-5 z-30 text-[1.05rem] font-normal leading-none transition-opacity duration-200 hover:opacity-70 sm:left-6 sm:top-6 sm:text-lg lg:left-[65px] lg:top-[37px] lg:text-[28px]"
          to="/"
        >
          &lt; VOLTAR
        </Link>

        <div className="relative h-[min(38dvh,22rem)] w-full shrink-0 lg:h-full lg:min-h-0 lg:w-1/2 lg:max-w-[50%]">
          <img
            alt="Retrato do Nariko na página Sobre."
            className="absolute inset-0 h-full w-full object-cover object-center"
            decoding="async"
            src={heroPortraitSrc}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
        </div>

        <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden lg:w-1/2 lg:max-w-[50%]">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-3 pb-3 pt-14 sm:px-4 sm:pt-16 lg:px-[10px] lg:pb-[10px] lg:pt-10">
            <div className="mx-auto flex w-full max-w-[582px] flex-col items-end text-[1.05rem] font-normal leading-normal sm:text-[1.15rem] lg:text-[25px]">
              <p className="mb-0 w-full font-bold">De São Vicente para o topo do futebol mundial.</p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">
                Dailson Cardoso dos Reis, conhecido como Nariko Hair Style, iniciou sua trajetória aos 13
                anos, movido por uma inquietação criativa que rapidamente se transformou em propósito. O
                que começou como um ofício aprendido na prática evoluiu para uma construção sólida de
                identidade, técnica e visão — pilares que hoje sustentam uma carreira reconhecida
                internacionalmente.
              </p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">
                Ao longo dos anos, Nariko deixou de ser apenas um barbeiro para se tornar um artista da
                imagem. Especialista em Hair Tattoo, desenvolveu uma técnica própria que combina precisão
                milimétrica, senso estético apurado e realismo, criando cortes que vão além do convencional
                e se posicionam como expressão individual.
              </p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">
                Cada trabalho carrega intenção, conceito e execução de alto nível — não é apenas sobre
                cabelo, é sobre presença.
              </p>
              <p className="mb-0 w-full">
                Sua consistência e excelência técnica fizeram com que seu trabalho atravessasse
                fronteiras, alcançando mais de 120 países e consolidando seu nome como uma das maiores
                referências da barbearia contemporânea.
              </p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">
                Essa projeção o levou a atender atletas que vivem o futebol no mais alto nível, sendo
                responsável pelo visual de nomes como Neymar Jr., Thiago Silva, Gabriel Jesus e
                Richarlison — profissionais cuja imagem é parte essencial de suas carreiras globais.
              </p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">
                Mas sua atuação não se limita à cadeira. Hoje, Nariko também é um dos principais nomes
                quando o assunto é educação e mentalidade dentro do universo barber. Ele leva sua
                experiência para palcos e eventos relevantes do setor, compartilhando conhecimento, visão
                de mercado e desenvolvimento pessoal com milhares de profissionais.
              </p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">
                Entre suas participações, destacam-se eventos como o Cruzeiro da Beleza e o Beauty &
                Barber, onde ministra palestras que vão além da técnica, abordando disciplina, posicionamento,
                construção de marca pessoal e evolução de carreira.
              </p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">
                Sua fala conecta prática e mentalidade, inspirando uma nova geração de barbeiros a enxergar
                a profissão como um caminho real de crescimento e reconhecimento.
              </p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">
                Hoje, Nariko representa mais do que excelência técnica. Ele simboliza evolução,
                consistência e visão. Seu trabalho é resultado de anos de dedicação, estudo e
                aperfeiçoamento constante — e seu impacto vai muito além do corte, alcançando a forma como
                profissionais e clientes enxergam a barbearia.
              </p>
              <p className="mb-0 mt-4 w-full">&nbsp;</p>
              <p className="mb-0 w-full">Cortar com o Nariko não é apenas uma escolha estética.</p>
              <p className="mb-0 mt-4 w-full font-bold">
                É fazer parte de um padrão construído com arte, precisão e reconhecimento mundial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
