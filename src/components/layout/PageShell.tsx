import type { PropsWithChildren } from 'react'
import { CustomCursor } from '../cursor/CustomCursor'

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)]">
      <CustomCursor />
      <main>{children}</main>
    </div>
  )
}
