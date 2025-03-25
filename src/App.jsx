import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import ToggleDesign from "./components/ToggleDesign";
import Model from "./components/oxford-models/WingTip";
import "./App.css";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {
  const style = useSelector((state) => state.model.selectedStyle);
  return (
    <>
      <div className="container mx-auto max-w-[1536px]">
        <div className="canvas relative">
          <Canvas
            camera={{ position: [-1.7, 0.7, 0.8] }}
            shadows
            gl={{ toneMappingExposure: 1.5 }}
          >
            <Suspense fallback={<Loader />}>
              {style === "wingTip" && <Model />}
            </Suspense>

            <directionalLight intensity={2.5} position={[2, 3, 2]} castShadow />
            <ambientLight intensity={0.3} />
            <pointLight position={[-2, 1, -2]} intensity={1.5} color="red" />

            <OrbitControls enableZoom={true} enablePan={false} />
            <OrbitControls />
            <Environment preset="city" />
          </Canvas>
        </div>
        <ToggleDesign />
      </div>
    </>
  );
}

export default App;
