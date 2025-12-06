'use client'

import Card from '@/components/card'
import { useCenterStore } from '@/hooks/use-center'
import { useConfigStore } from './stores/config-store'
import { CARD_SPACING } from '@/consts'
import { HomeDraggableLayer } from './home-draggable-layer'
import { useMemo, useState } from 'react'
import { motion } from 'motion/react'

const QUOTES = [
  { text: '把复杂留给自己，把简单留给用户。', author: 'ckf111' },
  { text: '写作是最好的思考方式。', author: '匿名' },
  { text: '简单的东西，往往更难做到。', author: '设计箴言' },
  { text: '进步来自持续迭代，而不是一次完美。', author: '产品心得' },
  { text: '今天的你，打败昨天的你。', author: '自勉' }
]

export default function QuoteCard() {
  const center = useCenterStore()
  const { cardStyles } = useConfigStore()
  const styles = cardStyles.quoteCard
  const hiCardStyles = cardStyles.hiCard

  const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x + hiCardStyles.width / 2 + CARD_SPACING
  const y = styles.offsetY !== null ? center.y + styles.offsetY : center.y - hiCardStyles.height / 2 - styles.height - CARD_SPACING

  const [index, setIndex] = useState(() => Math.floor(Math.random() * QUOTES.length))
  const quote = useMemo(() => QUOTES[index], [index])

  return (
    <HomeDraggableLayer cardKey='quoteCard' x={x} y={y} width={styles.width} height={styles.height}>
      <Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='space-y-2 max-sm:static'>
        <h2 className='text-secondary text-sm'>今日引言</h2>
        <p className='text-sm leading-relaxed'>“{quote.text}”</p>
        <p className='text-secondary text-xs'>—— {quote.author}</p>
        <motion.button
          type='button'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIndex((prev) => (prev + 1) % QUOTES.length)}
          className='rounded-lg border bg-white/60 px-3 py-1 text-xs'>
          换一句
        </motion.button>
      </Card>
    </HomeDraggableLayer>
  )
}

