'use client'

import { usePathname } from 'next/navigation'
import { getDeckForPath } from '../lib/slides'
import { useSlideView } from './SlideView'
import styles from './SectionSlide.module.css'

interface SectionSlideProps {
  n?: number
  src?: string
  alt?: string
  caption?: string
}

export function SectionSlide({ n, src, alt, caption }: SectionSlideProps) {
  const { enabled } = useSlideView()
  const pathname = usePathname()
  const deck = pathname ? getDeckForPath(pathname) : null

  if (!enabled) return null

  if (src) {
    return (
      <figure className={styles.figure}>
        <img src={src} alt={alt ?? caption ?? ''} className={styles.image} loading="lazy" />
        {caption ? (
          <figcaption className={styles.caption}>
            <span className={styles.text}>{caption}</span>
          </figcaption>
        ) : null}
      </figure>
    )
  }

  if (!deck || !n || n < 1 || n > deck.count) return null

  const deckSrc = `${deck.dir}/${n}.png`
  const label = `${deck.title} 슬라이드 ${n}/${deck.count}`

  return (
    <figure className={styles.figure}>
      <img src={deckSrc} alt={label} className={styles.image} loading="lazy" />
      <figcaption className={styles.caption}>
        <span className={styles.counter}>슬라이드 {n} / {deck.count}</span>
        {caption ? <span className={styles.text}>{caption}</span> : null}
      </figcaption>
    </figure>
  )
}
