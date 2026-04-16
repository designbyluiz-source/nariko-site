import { Link } from 'react-router-dom'

import { PageShell } from '../components/layout/PageShell'

/** Assets exportados do Figma (node 63:136) — ver `public/sobre-page/`. */
const heroImageSrc = '/sobre-page/hero.png'
const section2ImageSrc = '/sobre-page/secao-2.png'
const section3CamadaA = '/sobre-page/secao-3-camada-a.png'
const section3CamadaB = '/sobre-page/secao-3-camada-b.png'

const textBlock =
  'w-full max-w-[582.095px] text-[1.12rem] font-normal leading-[1.3] sm:text-[1.3rem] lg:text-[25px] lg:leading-normal'
const textPadding = 'px-5 py-10 sm:px-8 lg:px-[10px] lg:py-10'

/** Coluna de imagem: altura “hug” no mobile (aspecto Figma ~723×670 ou723×624); no lg preenche a linha do grid. */
function imageColumnClass(aspectMobile: string) {
  return `relative w-full min-h-0 overflow-hidden ${aspectMobile} lg:aspect-auto lg:h-full lg:min-h-0`
}

export function AboutPage() {
  return (
    <PageShell>
      {/* 65:154 — imagem | texto (fotos em P&B) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
        <div className={`bg-black [&_img]:grayscale ${imageColumnClass('aspect-[723/670]')}`}>
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              alt="Nariko na infância, aprendendo o ofício."
              className="absolute left-0 top-[-31.3%] h-[143.82%] w-full max-w-none object-cover object-center"
              decoding="async"
              src={heroImageSrc}
            />
          </div>

          <Link
            className="absolute left-4 top-5 z-20 text-[1.05rem] font-normal leading-none text-[var(--color-accent)] transition-opacity duration-200 hover:opacity-70 sm:left-6 sm:top-6 sm:text-lg lg:left-[65px] lg:top-[37px] lg:text-[28px]"
            to="/"
          >
            &lt; VOLTAR
          </Link>
        </div>

        <div
          className={`flex w-full items-center justify-center bg-[var(--color-accent)] text-[var(--color-title-left)] ${textPadding}`}
        >
          <div className={`flex flex-col items-end ${textBlock}`}>
            <h1 className="m-0 w-full text-[1.65rem] font-bold leading-none sm:text-[2.1rem] lg:text-[25px] lg:leading-normal">
              De São Vicente para o topo do futebol mundial.
            </h1>
            <p className="m-0 mt-2 w-full">&nbsp;</p>
            <p className="m-0 w-full">
              Dailson Cardoso dos Reis, conhecido como Nariko Hair Style, iniciou sua trajetória aos 13 anos,
              movido por uma inquietação criativa que rapidamente se transformou em propósito. O que começou
              como um ofício aprendido na prática evoluiu para uma construção sólida de identidade, técnica e
              visão — pilares que hoje sustentam uma carreira reconhecida internacionalmente.
            </p>
          </div>
        </div>
      </section>

      {/* 65:155 — texto | imagem (h 624 no Figma → mesma proporção no mobile) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
        <div className={`flex w-full items-center justify-center bg-[var(--color-title-left)] text-[var(--color-accent)] ${textPadding}`}>
          <div className={textBlock}>
            <p className="m-0">
              Ao longo dos anos, Nariko deixou de ser apenas um barbeiro para se tornar um artista da imagem.
              Especialista em Hair Tattoo, desenvolveu uma técnica própria que combina precisão milimétrica,
              senso estético apurado e realismo, criando cortes que vão além do convencional e se posicionam
              como expressão individual.
            </p>
            <p className="m-0 mt-4">&nbsp;</p>
            <p className="m-0">
              Cada trabalho carrega intenção, conceito e execução de alto nível — não é apenas sobre cabelo, é
              sobre presença.
            </p>
            <p className="m-0 mt-4">
              Sua consistência e excelência técnica fizeram com que seu trabalho atravessasse fronteiras,
              alcançando mais de 120 países e consolidando seu nome como uma das maiores referências da
              barbearia contemporânea.
            </p>
          </div>
        </div>

        <div className={`bg-black [&_img]:grayscale ${imageColumnClass('aspect-[723/624]')}`}>
          <img
            alt="Nariko em seu espaço de trabalho com identidade visual Nariko Hair Style."
            className="absolute inset-0 h-full w-full object-cover object-center"
            decoding="async"
            src={section2ImageSrc}
          />
        </div>
      </section>

      {/* 65:177 — mesma pilha de camadas que no Figma: A → overlay → B → A */}
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
        <div className={`bg-black [&_img]:grayscale ${imageColumnClass('aspect-[723/670]')}`}>
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <img
              alt=""
              className="absolute inset-0 size-full max-w-none object-cover"
              decoding="async"
              src={section3CamadaA}
            />
            <div className="absolute inset-0 bg-black/20" />
            <img
              alt=""
              className="absolute inset-0 size-full max-w-none object-cover"
              decoding="async"
              src={section3CamadaB}
            />
            <img
              alt=""
              className="absolute inset-0 size-full max-w-none object-cover"
              decoding="async"
              src={section3CamadaA}
            />
          </div>
          <span className="sr-only">Retrato Nariko Hair Style — composição em camadas como no layout Figma.</span>
        </div>

        <div
          className={`flex w-full items-center justify-center bg-[var(--color-accent)] text-[var(--color-title-left)] ${textPadding}`}
        >
          <div className={textBlock}>
            <p className="m-0">
              Essa projeção o levou a atender atletas que vivem o futebol no mais alto nível, sendo
              responsável pelo visual de nomes como Neymar Jr., Thiago Silva, Gabriel Jesus e Richarlison —
              profissionais cuja imagem é parte essencial de suas carreiras globais.
            </p>
            <p className="m-0 mt-4">&nbsp;</p>
            <p className="m-0">
              Mas sua atuação não se limita à cadeira. Hoje, Nariko também é um dos principais nomes quando o
              assunto é educação e mentalidade dentro do universo barber. Ele leva sua experiência para palcos
              e eventos relevantes do setor, compartilhando conhecimento, visão de mercado e desenvolvimento
              pessoal com milhares de profissionais.
            </p>
            <p className="m-0 mt-4">&nbsp;</p>
            <p className="m-0">
              Entre suas participações, destacam-se eventos como o Cruzeiro da Beleza e o Beauty &amp; Barber,
              onde ministra palestras que vão além da técnica, abordando disciplina, posicionamento, construção
              de marca pessoal e evolução de carreira.
            </p>
            <p className="m-0 mt-4">&nbsp;</p>
            <p className="m-0">
              Sua fala conecta prática e mentalidade, inspirando uma nova geração de barbeiros a enxergar a
              profissão como um caminho real de crescimento e reconhecimento.
            </p>
          </div>
        </div>
      </section>

      {/* 65:182 */}
      <section className="flex flex-col items-center justify-center bg-[var(--color-title-left)] px-6 py-14 sm:px-10 sm:py-16 lg:p-20">
        <div className="w-full max-w-[988.515px] text-[1.12rem] font-normal leading-[1.3] text-[var(--color-accent)] sm:text-[1.2rem] lg:text-[25px] lg:leading-normal">
          <p className="m-0">
            Hoje, Nariko representa mais do que excelência técnica. Ele simboliza evolução, consistência e
            visão. Seu trabalho é resultado de anos de dedicação, estudo e aperfeiçoamento constante — e seu
            impacto vai muito além do corte, alcançando a forma como profissionais e clientes enxergam a
            barbearia.
          </p>
          <p className="m-0 mt-4">&nbsp;</p>
          <p className="m-0">Cortar com o Nariko não é apenas uma escolha estética.</p>
          <p className="m-0 mt-0">
            <br aria-hidden="true" />
            <span className="font-bold">É fazer parte de um padrão construído com arte, precisão e reconhecimento mundial.</span>
          </p>
        </div>
      </section>
    </PageShell>
  )
}
