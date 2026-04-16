type HeroPagerProps = {
  activeIndex: number
  total: number
  onSelect: (index: number) => void
}

export function HeroPager({ activeIndex, total, onSelect }: HeroPagerProps) {
  return (
    <div
      aria-label="Controle dos slides da hero"
      className="relative z-20 flex flex-row items-center gap-3 self-center sm:gap-4 lg:flex-col lg:gap-[22px]"
      role="tablist"
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          aria-label={`Ir para slide ${index + 1}`}
          aria-selected={activeIndex === index}
          className="relative flex min-h-11 min-w-11 shrink-0 touch-manipulation items-center justify-center rounded-full transition-transform duration-300 active:scale-95 lg:min-h-[44px] lg:min-w-[44px] lg:hover:scale-110"
          onClick={() => onSelect(index)}
          role="tab"
          type="button"
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none block h-[11px] w-[11px] rounded-full ${
              activeIndex === index ? 'bg-[var(--color-accent)]' : 'bg-black/75'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
