import React from 'react'
import { Html, useProgress } from '@react-three/drei';

const Loaders = () => {
  const { progress } = useProgress();  
  return (
    <Html center className="font-normal text-xl text-center">{progress}% Loaded</Html>
  )
}

export default Loaders