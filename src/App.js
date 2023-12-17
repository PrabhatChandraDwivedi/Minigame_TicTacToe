import { useRef } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import Grid from './Grid/Grid';
import { motion } from "framer-motion";

function App() {
  const constraintsRef = useRef(null);
  return (
    <motion.div ref={constraintsRef}>
    
    <div className='flex justify-center items-center h-screen w-screen bg-black'>
  <Grid/>
  <Circle constraintsRef ={constraintsRef}/>
  </div>
  </motion.div>
  );
}

export default App;