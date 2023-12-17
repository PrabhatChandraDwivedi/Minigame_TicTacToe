
import React from 'react'
import { motion } from "framer-motion";
export default function Circle({constraintsRef}) {
  

  return (
    
        <motion.div  drag dragConstraints={constraintsRef}>
    <div class="w-32 h-32 border-white bg-black border-4 rounded-full"></div>
    </motion.div>
    
  )
}