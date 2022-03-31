import React from 'react'
import { motion } from 'framer-motion'


function SimpleAnimation({children}) {
  return (
    <motion.div animate='animate' initial='initial' variants={{
      initial: {
        opacity: 0,
        scale:0.8,
        x: -100
      },
      animate: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
          duration: 0.8
        }
      }
    }}>
      {children}
    </motion.div>
  )
}

export default SimpleAnimation