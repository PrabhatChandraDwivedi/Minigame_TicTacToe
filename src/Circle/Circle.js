import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Circle({ constraintsRef,gridCellWidth,gridCellHeight }) {
  const controls = useAnimation();
  const [CellWidth,setCellWidth] = useState(0);
  const [cellHeight,setCellHeight] = useState(0);

  const handleDragEnd = (event, info) => {
    const x = info.offset.x + info.point.x;
    const y = info.offset.y + info.point.y;
    console.log(info.point.x);
    console.log(info.point.y);

    const nearestX = Math.round(x / CellWidth) * CellWidth;
    const nearestY = Math.round(y / cellHeight) * cellHeight;


    controls.start({ x: 0, y: 0 });
  };
  useEffect(()=>{
    setCellHeight(gridCellHeight);
    setCellWidth(gridCellWidth);
    },[gridCellWidth,gridCellHeight])
    console.log(cellHeight)
    console.log(CellWidth)
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      onDragEnd={handleDragEnd}
      animate={controls}
      className='h-1/6 w-1/6'
    >
<div className='h-3/4 w-3/4'>
  <svg id="go" 
    viewBox="0 0 100 100"
    perserveAspectRatio="xMinYMid" className='h-full w-full'>
    <circle r="48" cx="50%" cy="50%" fill="black" stroke='white' strokeWidth={4}></circle>
  </svg>
</div>    </motion.div>
  );
}