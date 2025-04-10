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
          <Canvas shadows>
            <Suspense fallback={null}>
              {/* ✅ Realistic HDRI Background */}
              <Environment preset="apartment" />

              {/* ✅ Main Directional Light */}
              <directionalLight
                castShadow
                position={[3, 10, 3]}
                intensity={2.5}
                color={"#ffffff"}
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />

              {/* ✅ Subtle Warm Fill Light */}
              <spotLight
                position={[-3, 5, 2]}
                angle={0.3}
                penumbra={0.5}
                intensity={0.7}
                color={"#ffeadb"}
                castShadow
                shadow-bias={-0.0001}
              />

              {/* ✅ Ambient Light for soft fill */}
              <ambientLight intensity={1.4} />

              {/* ✅ Extra Fill to simulate bounce light */}
              <pointLight
                position={[2, 1, -4]}
                intensity={1.3}
                color="#b0c4de"
              />

              {/* ✅ Bloom Effect for glow/highlights */}
              <EffectComposer>
                <Bloom
                  intensity={1.15}
                  luminanceThreshold={1.25}
                  luminanceSmoothing={1.9}
                />
              </EffectComposer>

              {/* ✅ Models */}
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
              ) : null}
            </Suspense>
          </Canvas>
        </div>
        <ToggleDesign />
      </div>
    </>
  );
}

export default App;
