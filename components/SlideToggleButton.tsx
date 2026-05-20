'use client'

import { usePathname } from 'next/navigation'
import { getDeckForPath } from '../lib/slides'
import { useSlideView } from './SlideView'
import styles from './SlideToggleButton.module.css'

export function SlideToggleButton() {
  const { enabled, toggle } = useSlideView()
  const pathname = usePathname()
  const deck = pathname ? getDeckForPath(pathname) : null

  if (!deck) return null

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={enabled}
        className={`${styles.button} ${enabled ? styles.on : ''}`}
      >
        <span className={styles.icon} aria-hidden="true">{enabled ? '📑' : '📊'}</span>
        <span>{enabled ? '슬라이드 끄기' : '슬라이드와 함께 보기'}</span>
      </button>
      <span className={styles.hint}>
        본문 사이에 시각화 {deck.count}장을 끼워서 봅니다. 한 번 켜두면 다음 페이지에서도 켜진 상태.
      </span>
    </div>
  )
}
