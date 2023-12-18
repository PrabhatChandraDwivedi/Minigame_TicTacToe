import { useEffect, useRef, useState } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import Grid from './Grid/Grid';
import { motion } from "framer-motion";

function App() {
  const [gridCellHeight,setGridCellHeight] = useState(0);
  const [gridCellWidth,setGridCellWidth] = useState(0);
  const [screenWidth,setScreenWidth] = useState(0);
  const [screenHeight,setScreenHeight] = useState(0);
  const getGridCellHeight = (height)=>{
    setGridCellHeight(height)
  }
  const getGridCellWidth = (width)=>{
    setGridCellWidth(width)
  }
  const constraintsRef = useRef(null);
  useEffect(()=>{
setScreenHeight(window.screen.availHeight);
setScreenWidth(window.screen.availWidth);
  },[])
  console.log(screenHeight);
  console.log(screenWidth);
  return (
    <motion.div ref={constraintsRef}>
    
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-black'>
  <Circle constraintsRef ={constraintsRef} gridCellWidth={gridCellWidth} gridCellHeight={gridCellHeight} />
  <Grid getGridCellHeight={getGridCellHeight} getGridCellWidth={getGridCellWidth} />

  </div>
  </motion.div>
  );
}

export default App;