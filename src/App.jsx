import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

// import Picker from "./components/Picker";
import ToggleDesign from "./components/ToggleDesign";
import Model from "./components/oxford-models/WingTip";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const model = useSelector((state) => state.model.selectedModel);
  return (
    <>
      <div className="container mx-auto max-w-[1536px]">
        <div className="canvas relative">
          <Canvas shadows camera={{ position: [-1.7, 0.7, 0.8] }}>
            <ambientLight intensity={0.8} />
            <Suspense fallback={null}>
              {model === "wingTip" && <Model />}
            </Suspense>
            <OrbitControls />
            <Environment preset="city" />
            <directionalLight position={[1, 1, 1]} castShadow />
          </Canvas>
        </div>
        <ToggleDesign />
      </div>
    </>
  );
}

export default App;
