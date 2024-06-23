import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Island } from "../models/Island";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Plane } from "../models/Plane";
import Homeinfo from "../components/Homeinfo";
import sakura from '../../public/assets/sakura.mp3'
import { soundon } from "../../public/assets/icons";
import { soundoff } from "../../public/assets/icons";


const Home = () => {
  const audioRef = useRef(new Audio(sakura) );
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    
    return () => {
      audioRef.current.pause();
    }
  })

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else if (window.innerWidth < 360) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -6.5, 20];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <Canvas
        className="w-full h-screen bg-tranparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>

          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane rotation={[0, 20, 0]} isRotating={isRotating} 
          scale={biplaneScale}
          position={biplanePosition}/>
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2" >
        <img src={!isPlayingMusic ? soundoff : soundon}  alt="sound"
        className="w-10 h-10 cursor-pointer"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
      </div>
    </section>
  );
};

export default Home;