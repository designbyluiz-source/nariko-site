/** Pares esquerda/direita por índice (mesmo número no arquivo). Ordem = paginação da hero. */
export const heroSlidePairs = [
  { n: 1, esquerda: '/hero/esquerda-1.jpg', direita: '/hero/direita-1.jpg' },
  { n: 2, esquerda: '/hero/esquerda-2.jpg', direita: '/hero/direita-2.jpg' },
  { n: 3, esquerda: '/hero/esquerda-3.jpg', direita: '/hero/direita-3.jpg' },
  { n: 4, esquerda: '/hero/esquerda-4.jpg', direita: '/hero/direita-4.jpg' },
  { n: 5, esquerda: '/hero/esquerda-5.jpg', direita: '/hero/direita-5.jpg' },
] as const

export const heroSlideCount = heroSlidePairs.length
