'use client'

import Card from '@/components/card'
import { useCenterStore } from '@/hooks/use-center'
import { useConfigStore } from './stores/config-store'
import { CARD_SPACING } from '@/consts'
import { HomeDraggableLayer } from './home-draggable-layer'

type MediaItem = { type: 'book' | 'movie' | 'music'; title: string; subtitle?: string; rating: number; note?: string }

const MEDIA_LIST: MediaItem[] = [
  { type: 'book', title: 'Clean Code', subtitle: 'Robert C. Martin', rating: 4, note: '原则清晰，值得反复翻' },
  { type: 'movie', title: 'Her', subtitle: 'Spike Jonze', rating: 5, note: '温柔的未来，关于爱与孤独' },
  { type: 'music', title: 'In The Wind', subtitle: 'Jazztone', rating: 4, note: '轻松的 Lo-Fi 背景' }
]

const ICON: Record<MediaItem['type'], string> = { book: '📚', movie: '🎬', music: '🎵' }

function Stars({ value }: { value: number }) {
  return (
    <div className='text-brand text-xs'>
      {'★★★★★'.slice(0, value)}
      <span className='text-secondary'>{'☆☆☆☆☆'.slice(0, 5 - value)}</span>
    </div>
  )
}

export default function MediaCard() {
  const center = useCenterStore()
  const { cardStyles } = useConfigStore()
  const styles = cardStyles.mediaCard
  const hiCardStyles = cardStyles.hiCard
  const skillsStyles = cardStyles.skillsCard

  const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x - hiCardStyles.width / 2 - styles.width - CARD_SPACING
  const y = styles.offsetY !== null ? center.y + styles.offsetY : center.y + hiCardStyles.height / 2 + CARD_SPACING + skillsStyles.height + CARD_SPACING

  return (
    <HomeDraggableLayer cardKey='mediaCard' x={x} y={y} width={styles.width} height={styles.height}>
      <Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='space-y-2 max-sm:static'>
        <h2 className='text-secondary text-sm'>书影音清单</h2>
        <ul className='divide-y divide-slate-200'>
          {MEDIA_LIST.map((item) => (
            <li key={item.title} className='py-2 flex items-start gap-3'>
              <span className='text-lg shrink-0'>{ICON[item.type]}</span>
              <div className='flex-1 min-w-0'>
                <div className='flex items-start justify-between gap-2'>
                  <h3 className='text-sm font-medium truncate'>{item.title}</h3>
                  <div className='shrink-0 whitespace-nowrap'><Stars value={item.rating} /></div>
                </div>
                {item.subtitle && <p className='text-secondary text-xs truncate'>{item.subtitle}</p>}
                {item.note && <p className='text-secondary mt-1 text-xs'>{item.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </HomeDraggableLayer>
  )
}
