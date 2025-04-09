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
// import { Model } from "../Model";
import { CapToeModel } from "./components/oxford-models/CapToe";

function App() {
  const style = useSelector((state) => state.model.selectedStyle);
  const soleDisplayStyle = useSelector(
    (state) => state.style.soleDisplayStyleState
  );
  return (
    <>
      <div className="container mx-auto max-w-[1536px]">
        <div className="canvas relative">
          <Canvas>
            <Suspense fallback={null}>
              {/* <Model
                scale={[20, 20, 20]}
                position={[-0.72, -0.4, 0.2]}
                rotation={[0.4, 1.1, -0.1]}
                renderOrder={1}
              /> */}
              {/* ye theek ha above wal testing k liye lgaya tha */}
              {soleDisplayStyle && (
                <Model
                  scale={[20, 20, 20]}
                  position={[1, 1.2, 0.2]}
                  rotation={[Math.PI / 2, -1.74, Math.PI]}
                  renderOrder={0}
                />
              )}
              {style === "wingtip" ? (
                <WingModel
                  scale={[20, 20, 20]}
                  position={[-0.72, -0.4, 0.2]}
                  rotation={[0.4, 1.1, -0.1]}
                  renderOrder={1}
                />
              ) : style === "cap toe" ? (
                <CapToeModel
                  scale={[20, 20, 20]}
                  position={[-0.72, -0.4, 0.2]}
                  rotation={[0.4, 1.1, -0.1]}
                  renderOrder={2}
                />
              ) : (
                ""
              )}
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
        <ToggleDesign />
      </div>
    </>
  );
}

export default App;
