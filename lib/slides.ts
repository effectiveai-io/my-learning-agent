export type SlideDeck = {
  dir: string
  count: number
  title: string
}

export const slideDecks: Record<string, SlideDeck> = {
  '/week2/knowledge': {
    dir: '/slides/week2/knowledge',
    count: 7,
    title: '지식을 잘 정리한다는 건 뭘까?',
  },
}

export function getDeckForPath(pathname: string): SlideDeck | null {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return slideDecks[normalized] ?? null
}
