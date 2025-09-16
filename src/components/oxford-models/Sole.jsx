import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useSelector } from "react-redux";
import { useLoader } from "@react-three/fiber";

// import { useFrame } from "@react-three/fiber";
// import { useProxy } from "valtio/utils";
// import state from "../../contexts/State";

export default function Sole(props) {
  const ref = useRef();
  const modelGlb = "/oxford-models/WingTip-draco.glb";
  const { nodes, materials } = useGLTF(modelGlb);
  const [backThreadMaterial, setBackThreadMaterial] = useState(
    materials["Thread Material"].clone()
  );
  const [vampThreadMaterial, setVampThreadMaterial] = useState(
    materials["Thread Material"].clone()
  );
  const [faceThreadMaterial, setFaceThreadMaterial] = useState(
    materials["Thread Material"].clone()
  );
  const [soleThreadMaterial, setSoleThreadMaterial] = useState(
    materials["Thread Material"].clone()
  );
  const [toeThreadMaterial, setToeThreadMaterial] = useState(
    materials["Thread Material"].clone()
  );
  const materialType = useSelector((state) => state.style.materialType);
  const materialColor = useSelector((state) => state.design.materialColor);
  const lacesColor = useSelector((state) => state.design.lacesStyle);
  const eyeletsColor = useSelector((state) => state.design.eyeletsColor);
  const designState = useSelector((state) => state.design.designState);
  const medallionState = useSelector((state) => state.design.medallionState);
  const sole = useSelector((state) => state.design.soleState);
  const [albedo, normal, roughness, metalness, ao] = useLoader(
    THREE.TextureLoader,
    [
      "/textures/black-leather_albedo.png",
      "/textures/black-leather_normal-ogl.png",
      "/textures/black-leather_roughness.png",
      "/textures/black-leather_metallic.png",
      "/textures/black-leather_ao.png",
    ]
  );
  //ye dynamic color changes k liye hain........................................
  useEffect(() => {
    if (!materials) return;

    const materialUpdates = {
      Laces: { color: lacesColor, intensity: 15 },
      Points: { color: "black", intensity: 1 },
      "Eyelets Material": { color: eyeletsColor, intensity: 2 },
    };

    Object.entries(materialUpdates).forEach(([key, { color, intensity }]) => {
      if (materials[key]) {
        materials[key].color.set(color).multiplyScalar(intensity);
        materials[key].needsUpdate = true;
      }
      if (materialType === "all pieces" && materialColor) {
        [
          "Wing Toe Material",
          "Wing Toe Body Material",
          "Wing Toe Back Material",
          "Wing Toe Side Parts Material",
          "Wing Toe Front Material",
          "Wing Toe Inner Body Material",
          "Thread Material",
          "Whole Cut Body Material",
        ].forEach((item) => {
          materials[item].color.set(materialColor).multiplyScalar(12);
        });
        setBackThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(materialColor);
          return prevMaterial;
        });
        setVampThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(materialColor);
          return prevMaterial;
        });
        setFaceThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(materialColor);
          return prevMaterial;
        });
        setToeThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(materialColor);
          return prevMaterial;
        });
        setSoleThreadMaterial((prevMaterial) => {
          prevMaterial.color.set("black");
          return prevMaterial;
        });
        materials["Black bull leather"].map.colorSpace = THREE.SRGBColorSpace;
        materials["Black bull leather"].color
          .set(materialColor)
          .multiplyScalar(85);
        materials["Black bull leather"].needsUpdate = true;
      } else if (materialType === "toe cap") {
        setToeThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(materialColor);
          return prevMaterial;
        });
        materials["Wing Toe Material"].color
          .set(materialColor)
          .multiplyScalar(12);
        materials["Whole Cut Body Material"].color
          .set(materialColor)
          .multiplyScalar(12);
      } else if (materialType === "vamp") {
        setVampThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(materialColor);
          return prevMaterial;
        });
        materials["Wing Toe Body Material"].color
          .set(materialColor)
          .multiplyScalar(12);
      } else if (materialType === "quarter") {
        materials["Wing Toe Side Parts Material"].color
          .set(materialColor)
          .multiplyScalar(12);
      } else if (materialType === "facing") {
        setFaceThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(materialColor);
          return prevMaterial;
        });
        materials["Wing Toe Front Material"].color
          .set(materialColor)
          .multiplyScalar(12);
      } else if (materialType === "heel cap") {
        setBackThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(materialColor);
          return prevMaterial;
        });
        materials["Wing Toe Back Material"].color
          .set(materialColor)
          .multiplyScalar(12);
      } else if (materialType === "tounge") {
        materials["Black bull leather"].map.colorSpace = THREE.SRGBColorSpace;
        materials["Black bull leather"].color
          .set(materialColor)
          .multiplyScalar(55);
        materials["Black bull leather"].needsUpdate = true;
      }
    });
  }, [materials, lacesColor, eyeletsColor, materialType, materialColor]);

  //ye textures hain..............................................
  useEffect(() => {
    const materialNames = [
      "Wing Toe Material",
      "Wing Toe Body Material",
      "Wing Toe Back Material",
      "Wing Toe Side Parts Material",
      "Wing Toe Front Material",
      "Wing Toe Inner Body Material",
      "Thread Material",
      "Whole Cut Body Material",
      "Wing Toe Inner Body Material",
    ];

    materialNames.forEach((name) => {
      if (materials[name]) {
        [albedo, normal, roughness, metalness, ao].forEach((texture) => {
          if (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.anisotropy = 18;
            texture.repeat.set(5, 5); // More balanced scale for natural leather
          }
        });

        materials[name].map = albedo;
        materials[name].normalMap = normal;
        materials[name].roughnessMap = roughness;
        materials[name].metalnessMap = metalness;
        materials[name].aoMap = ao;

        // 🎯 Soft, Premium Leather Adjustments
        materials[name].roughness = 0.9; // Lower roughness for soft sheen
        materials[name].metalness = 0.01; // Almost non-metallic
        materials[name].aoMapIntensity = 6; // Stronger ambient occlusion for depth
        // materials[name].displacementScale = 0.001; // Subtle depth for softness
        // materials[name].displacementBias = -0.0005;

        // ✅ Enhance Leather Grain & Surface Detail
        materials[name].normalScale = new THREE.Vector2(0.5, 0.5); // Soft grain effect

        // ✅ Add Clearcoat for Luxury Finish
        materials[name].clearcoat = 0; // Adds a thin glossy layer
        materials[name].clearcoatRoughness = 2; // Slightly softens reflections

        materials[name].needsUpdate = true;
      }
    });
  }, [materials, albedo, normal, roughness, metalness, ao]);

  // const snap = useProxy(state);
  // useFrame(() => {
  //   ref.current.rotation.y += 0.01;
  // });

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.Sole_Pad.geometry}
        material={materials["Sole Pad Material"]}
        position={[0, -0.004, 0]}
        scale={[0.146, 0.149, 0.146]}
        material-color="black"
      />
      {designState && (
        <group position={[0, -0.009, 0]} scale={0.149}>
          <mesh
            geometry={nodes.Cube002.geometry}
            material={materials["Wing Toe Material"]}
          />
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials["Wing Toe Body Material"]}
          />
          <mesh
            geometry={nodes.Cube002_2.geometry}
            material={materials["Wing Toe Side Parts Material"]}
          />
          <mesh
            geometry={nodes.Cube002_3.geometry}
            material={materials["Wing Toe Back Material"]}
          />
          <mesh
            geometry={nodes.Cube002_4.geometry}
            material={materials["Wing Toe Front Material"]}
          />
          <mesh
            geometry={nodes.Cube002_5.geometry}
            material={materials["Wing Toe Inner Body Material"]}
          />
          <mesh
            geometry={nodes.Cube002_6.geometry}
            material={materials["Eyelets Material"]}
          />
        </group>
      )}
      {medallionState && (
        <group position={[0, -0.009, 0]} scale={0.149}>
          <mesh
            geometry={nodes.Cube001.geometry}
            material={materials["Wing Toe Material"]}
          />
          <mesh
            geometry={nodes.Cube001_1.geometry}
            material={materials["Wing Toe Body Material"]}
          />
          <mesh
            geometry={nodes.Cube001_2.geometry}
            material={materials["Wing Toe Side Parts Material"]}
          />
          <mesh
            geometry={nodes.Cube001_3.geometry}
            material={materials["Wing Toe Back Material"]}
          />
          <mesh
            geometry={nodes.Cube001_4.geometry}
            material={materials["Wing Toe Front Material"]}
          />
          <mesh
            geometry={nodes.Cube001_5.geometry}
            material={materials["Wing Toe Inner Body Material"]}
          />
          <mesh
            geometry={nodes.Cube001_6.geometry}
            material={materials["Eyelets Material"]}
          />
          <mesh
            geometry={nodes.Cube001_7.geometry}
            material={materials["Whole Cut Body Material"]}
          />
        </group>
      )}
      <mesh
        geometry={nodes.Plain_Toe_Inner_Thread_Top_Sides001.geometry}
        material={vampThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_4_Stich_Back_Left.geometry}
        material={backThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_5_Stich_Bottom.geometry}
        material={vampThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_6_Stich_Back_Side_Right.geometry}
        material={backThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_7_Stich_Bottom.geometry}
        material={vampThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_8_Stich_Back.geometry}
        material={backThreadMaterial}
        position={[0.002, 0, -0.002]}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_9_Stich_Back.geometry}
        material={backThreadMaterial}
        position={[0, 0, -0.003]}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_10_Stich_Middle.geometry}
        material={faceThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_11_Stich_Middle.geometry}
        material={faceThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_12_Middle_Stich.geometry}
        material={faceThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_13_Middle_Stich.geometry}
        material={faceThreadMaterial}
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Top_Sides_Outer.geometry}
        material={faceThreadMaterial}
      />
      <mesh
        geometry={nodes.Sole_Thread_Path_For_Plain_Toe.geometry}
        material={soleThreadMaterial}
        position={[0.008, 0.007, -0.016]}
        rotation={[0, 0.142, 0]}
        scale={1.02}
      />
      <mesh
        geometry={nodes.Wing_Toe_Thread_Top.geometry}
        material={toeThreadMaterial}
      />
      <mesh
        geometry={nodes.Wing_Toe_Thread_Top001.geometry}
        material={toeThreadMaterial}
      />
      <group position={[0.005, 0.088, -0.001]}>
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials["Black bull leather"]}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["Sole Pad"]}
        />
      </group>
      <group position={[0.005, 0.088, -0.001]}>
        <mesh
          geometry={nodes.Plane002.geometry}
          material={materials["Black bull leather"]}
        />
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials["Sole Pad"]}
        />
      </group>
      <mesh
        geometry={nodes.Inner_Piece_of_Shoe_thread_Path_Stich.geometry}
        material={materials["Sole Pad"]}
      />
      <mesh
        geometry={
          nodes.Inner_Piece_of_Shoe_thread_Path_Stich_Plain_Toe.geometry
        }
        material={materials["Sole Pad"]}
      />
      <mesh
        geometry={nodes.Lace_1.geometry}
        material={materials.Laces}
        position={[0.005, 0.087, 0.038]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Lace_2.geometry}
        material={materials.Laces}
        position={[0.003, 0.093, 0.028]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Lace_3.geometry}
        material={materials.Laces}
        position={[0, 0.101, 0.02]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Lace_4.geometry}
        material={materials.Laces}
        position={[-0.002, 0.107, 0.011]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Lace_5.geometry}
        material={materials.Laces}
        position={[-0.005, 0.112, 0.002]}
        scale={0.032}
      />
      {sole === "leatherBlack" && (
        <group position={[0.012, 0.008, 0.03]}>
          <mesh
            geometry={nodes.Cube007.geometry}
            material={materials.Sole}
            material-color="black"
          />

          <mesh
            geometry={nodes.Cube007_1.geometry}
            material={materials.Points}
          />
          <mesh
            geometry={nodes.Cube007_2.geometry}
            material={materials["Brown Bottom"]}
            material-color="#3C1E12"
          />
          <mesh
            geometry={nodes.Cube007_3.geometry}
            material={materials.Heel}
            material-color="black"
          />
        </group>
      )}
      {sole === "leatherMid" && (
        <group position={[0.012, 0.008, 0.03]}>
          <mesh geometry={nodes.Cube003.geometry} material={materials.Sole} />
          <mesh
            geometry={nodes.Cube003_1.geometry}
            material={materials.Points}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube003_2.geometry}
            material={materials["Brown Bottom"]}
            material-color="#3C1E12"
          />
          <mesh
            geometry={nodes.Cube003_3.geometry}
            material={materials.Heel}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube003_4.geometry}
            material={materials["Leather Mid Sole"]}
            material-color="#3C1E12"
          />
        </group>
      )}
      {sole === "trackingEva" && (
        <group position={[0.007, 0.002, 0.029]} rotation={[0.008, 0, 0.013]}>
          <mesh
            geometry={nodes.Cube014.geometry}
            material={materials.Sole}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube014_1.geometry}
            material={materials["Brown Bottom"]}
            material-color="black"
          />
        </group>
      )}
      {sole === "rubber" && (
        <>
          <mesh
            geometry={nodes.Cube004.geometry}
            material={materials.Sole}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube004_1.geometry}
            material={materials["Wood Sole"]}
            material-color="#503317"
          />
          <mesh
            geometry={nodes.Cube004_2.geometry}
            material={materials["Sole Bottom"]}
            material-color="black"
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("/oxford-models/WingTip-draco.glb");
