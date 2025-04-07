import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import ToggleDesign from "./components/ToggleDesign";
import "./App.css";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import { WingModel } from "./components/oxford-models/Wing";
import Model from "./components/oxford-models/WingTip";

function App() {
  const style = useSelector((state) => state.model.selectedStyle);
  return (
    <>
      <div className="container mx-auto max-w-[1536px]">
        <div className="canvas relative">
          <Canvas
            camera={{ position: [-2, 0.9, 0.9] }}
            // shadows
            // gl={{ toneMappingExposure: 1.5 }}
          >
            <Suspense fallback={null}>
              {style === "wingTip" && <WingModel />}
              {/* <Model /> */}
            </Suspense>

            <Environment preset="city" />
          </Canvas>
        </div>
        <ToggleDesign />
      </div>
    </>
  );
}

export default App;
