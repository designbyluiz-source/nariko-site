const navItems = ['Sobre', 'Palestras', 'Eventos', 'Contato']

export function HeroNav() {
  return (
    <nav aria-label="Navegacao principal">
      <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-normal uppercase tracking-normal text-[var(--color-accent)] sm:gap-x-5 sm:gap-y-2 sm:justify-end sm:text-lg lg:gap-x-[41px] lg:text-[28px]">
        {navItems.map((item) => (
          <li key={item}>
            <a
              className="inline-flex min-h-11 min-w-[2.75rem] items-center justify-center rounded-md px-1 py-2 transition-opacity duration-200 active:opacity-70 lg:min-h-0 lg:min-w-0 lg:px-0 lg:py-1 hover:opacity-60"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
