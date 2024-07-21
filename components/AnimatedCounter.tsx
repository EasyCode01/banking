'use client'
import Countup from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <Countup
        decimals={2}
        duration={2.74}
        decimal='.'
        prefix='₦'
        end={amount}
      />
    </div>
  )
}

export default AnimatedCounter
