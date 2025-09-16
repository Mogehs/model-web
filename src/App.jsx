import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import ToggleDesign from "./components/ToggleDesign";
import "./App.css";
import Loader from "./components/Loader";
import { WingModel } from "./components/oxford-models/Wing";
import Sole from "./components/oxford-models/Sole";
// import { Model } from "../Model";
import { CapToeModel } from "./components/oxford-models/CapToe";
import { Model } from "../Oxfords";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[1536px]">
        <div className="canvas relative">
          <Canvas shadows>
            <Suspense fallback={null}>
              {/* Rich HDR lighting */}
              <Environment preset="apartment" background={false} blur={0.3} />

              {/* Main directional light (acts like the sun/softbox) */}
              <directionalLight
                castShadow
                position={[-2, 8, 6]}
                intensity={4} // stronger for clear leather texture
                color="#ffffff"
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />

              {/* Warm spotlight for leather sheen */}
              <spotLight
                position={[-4, 6, 6]}
                angle={0.45}
                penumbra={0.8}
                intensity={1.4}
                color="#ffecd1" // warm tone
                castShadow
                shadow-bias={-0.0001}
              />

              {/* Fill light (removes dark shadows) */}
              <ambientLight intensity={0.8} color="#ffffff" />

              {/* Accent rim light (makes edges visible) */}
              <pointLight
                position={[0, 3, -6]}
                intensity={1}
                color="#e0e0ff" // slightly cool tone for contrast
              />

              {/* Gentle top light (simulates studio softbox above) */}
              <hemisphereLight
                skyColor="#ffffff"
                groundColor="#444444"
                intensity={3.6}
              />

              {/* Postprocessing for subtle realism */}
              <EffectComposer>
                <Bloom
                  intensity={0.4}
                  luminanceThreshold={1}
                  luminanceSmoothing={1.5}
                />
              </EffectComposer>

              <Model
                scale={[19, 19, 19]}
                position={[-0.8, 0.3, 0]}
                rotation={[0.5, -1.9, 0.26]}
                renderOrder={1}
              />
            </Suspense>
          </Canvas>
        </div>
        <ToggleDesign />
      </div>
    </>
  );
}

export default App;
