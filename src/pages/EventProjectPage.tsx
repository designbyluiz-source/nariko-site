import { Link, useParams } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'
import { CruzeiroBarberPage } from './CruzeiroBarberPage'

const projects: Record<
  string,
  {
    title: string
    description: string
  }
> = {
  'instituto-njr': {
    title: 'Instituto NJR',
    description:
      'Pagina dedicada ao projeto. Conteudo final sera adicionado aqui com fotos, depoimentos e detalhes do evento.',
  },
  'beauty-barber-business': {
    title: 'Beauty & Barber Business',
    description:
      'Pagina dedicada ao projeto. Conteudo final sera adicionado aqui com fotos, depoimentos e detalhes do evento.',
  },
  'workshop-masterclass': {
    title: 'Ita Beauty 2025',
    description:
      'Pagina dedicada ao projeto. Conteudo final sera adicionado aqui com fotos, depoimentos e detalhes do evento.',
  },
}

export function EventProjectPage() {
  const { slug } = useParams()

  if (slug === 'cruzeiro-barber') {
    return <CruzeiroBarberPage />
  }

  const project = slug ? projects[slug] : undefined

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-5 py-14 pb-[max(4rem,env(safe-area-inset-bottom))] sm:px-10 sm:py-16 lg:px-12 lg:py-24 lg:pb-24">
        <Link
          className="inline-flex rounded-[50px] border-2 border-[var(--color-accent)] px-6 py-3 text-sm font-bold leading-none text-[var(--color-accent)] transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-title-left)]"
          to="/"
        >
          Voltar
        </Link>

        {project ? (
          <>
            <h1 className="mt-10 text-4xl font-bold uppercase tracking-tight text-[var(--color-accent)] sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              {project.description}
            </p>
          </>
        ) : (
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-[var(--color-accent)]">Projeto nao encontrado</h1>
            <p className="mt-4 text-[var(--color-muted)]">
              Verifique o link ou volte para a home.
            </p>
          </div>
        )}
      </section>
    </PageShell>
  )
}
