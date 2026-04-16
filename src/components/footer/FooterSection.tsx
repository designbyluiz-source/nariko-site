import { Link } from 'react-router-dom'

import { RevealItem } from '../motion/RevealItem'

const navLinks = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Palestras', to: '/#palestras' },
  { label: 'Eventos', to: '/#eventos' },
  { label: 'Contato', to: '/#contato' },
] as const

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
] as const

const linkClass =
  'text-white transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-title-left)]'

export function FooterSection() {
  return (
    <footer className="bg-[#0f0f0f] px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-8 sm:px-10 sm:pb-10 lg:px-20 lg:pb-10 lg:pt-[30px]">
      <div className="mx-auto flex max-w-[1446px] flex-col gap-8 lg:gap-[10px]">
        <div className="flex flex-col gap-10 pb-8 pt-6 sm:pt-8 lg:flex-row lg:items-start lg:gap-[10px] lg:pb-[60px] lg:pt-10">
          <RevealItem axis="y" className="w-full max-w-[319px]" delayMs={40} distance={18}>
            <div className="space-y-6 text-[18px] leading-none">
              <p className="font-medium text-[var(--color-title-left)]">NAVEGAÇÃO</p>
              <nav aria-label="Rodapé — links do site">
                <ul className="space-y-6">
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <Link className={`inline-flex ${linkClass}`} to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </RevealItem>

          <RevealItem axis="y" className="w-full max-w-[273px]" delayMs={110} distance={18}>
            <div className="space-y-6 text-[18px] leading-none">
              <p className="font-medium text-[var(--color-title-left)]">SOCIAL</p>
              <ul className="space-y-6">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      className={`inline-flex ${linkClass}`}
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>

          <div
            aria-hidden="true"
            className="hidden h-[186px] w-px shrink-0 self-stretch bg-white/80 lg:block"
          />

          <RevealItem axis="y" className="w-full max-w-[320px] lg:px-10" delayMs={180} distance={18}>
            <div className="space-y-6 text-[18px] leading-snug">
              <p className="font-medium text-[var(--color-title-left)]">Nariko Hair Style</p>
              <p className="text-white">Dailson Cardoso dos Reis — Hair Tattoo e barbearia de referência.</p>
              <Link
                className="inline-flex text-[var(--color-title-left)] underline-offset-4 transition-opacity duration-200 hover:opacity-80 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-title-left)]"
                to="/#contato"
              >
                Entrar em contato
              </Link>
            </div>
          </RevealItem>
        </div>

        <div aria-hidden="true" className="h-px w-full bg-white/80" />

        <RevealItem axis="y" delayMs={240} distance={12}>
          <p className="text-[12px] leading-relaxed text-white/90">
            © {new Date().getFullYear()} Nariko Hair Style · Dailson Cardoso dos Reis. Conteúdo e marca
            reservados.
          </p>
        </RevealItem>
      </div>
    </footer>
  )
}
