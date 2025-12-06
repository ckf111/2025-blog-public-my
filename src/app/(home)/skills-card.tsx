'use client'

import Card from '@/components/card'
import { useCenterStore } from '@/hooks/use-center'
import { useConfigStore } from './stores/config-store'
import { CARD_SPACING } from '@/consts'
import { HomeDraggableLayer } from './home-draggable-layer'

type Skill = { name: string; percent: number }

const SKILLS: Skill[] = [
  { name: 'React', percent: 85 },
  { name: 'TypeScript', percent: 80 },
  { name: 'Next.js', percent: 75 },
  { name: 'Tailwind CSS', percent: 70 }
]

export default function SkillsCard() {
  const center = useCenterStore()
  const { cardStyles } = useConfigStore()
  const styles = cardStyles.skillsCard
  const hiCardStyles = cardStyles.hiCard

  const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x - hiCardStyles.width / 2 - styles.width - CARD_SPACING
  const y = styles.offsetY !== null ? center.y + styles.offsetY : center.y + hiCardStyles.height / 2 + CARD_SPACING

  return (
    <HomeDraggableLayer cardKey='skillsCard' x={x} y={y} width={styles.width} height={styles.height}>
      <Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='space-y-2 max-sm:static'>
        <h2 className='text-secondary text-sm'>技能/栈图</h2>
        <div className='space-y-2'>
          {SKILLS.map((s) => (
            <div key={s.name} className='space-y-1'>
              <div className='flex justify-between text-xs'>
                <span>{s.name}</span>
                <span className='text-secondary'>{s.percent}%</span>
              </div>
              <div className='h-2 w-full rounded bg-gray-200'>
                <div className='h-2 rounded bg-brand' style={{ width: `${s.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </HomeDraggableLayer>
  )
}

