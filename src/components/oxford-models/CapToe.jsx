/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public\oxford-models\CapToe-draco.glb 
*/

import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import { useLoader } from "@react-three/fiber";
import {
  setAllPiecesMaterialState,
  setMaterialType,
} from "../../redux/features/styleSlice";

export function CapToeModel(props) {
  const { nodes, materials } = useGLTF("/oxford-models/CapToe-draco.glb");
  const medallionState = useSelector((state) => state.design.medallionState);
  const materialType = useSelector((state) => state.style.materialType);
  const materialColor = useSelector((state) => state.design.materialColor);
  const lacesColor = useSelector((state) => state.design.lacesStyle);
  const eyeletsColor = useSelector((state) => state.design.eyeletsColor);
  const eyeletsType = useSelector((state) => state.design.eyeletsStyle);
  const sole = useSelector((state) => state.design.soleState);
  const quarterColor = useSelector((state) => state.design.quarterColor);
  const vampColor = useSelector((state) => state.design.vampColor);
  const heelCapColor = useSelector((state) => state.design.heelCapColor);
  const facingColor = useSelector((state) => state.design.facingColor);
  const toungueColor = useSelector((state) => state.design.toungueColor);
  const toeCapColor = useSelector((state) => state.design.toeCapColor);
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

  //ye dynamic color changes k liye hain........................................
  useEffect(() => {
    if (!materials) return;

    const materialUpdates = {
      "Laces.002": { color: lacesColor, intensity: 1 },
      Points: { color: "black", intensity: 1 },
      "EyeLets Material": { color: eyeletsColor, intensity: 2 },
    };

    Object.entries(materialUpdates).forEach(([key, { color, intensity }]) => {
      if (materials[key]) {
        materials[key].color.set(color).multiplyScalar(intensity);
        materials[key].needsUpdate = true;
      }
      if (materialType === "all pieces" && materialColor) {
        [
          "Cap Toe Side Parts Material",
          "Cap Toe Material",
          "Cap Toe Body Material",
          "Cap Toe Front Material",
          "Cap Toe Back Part Material",
          "Outer Part of Inner Piece Material",
          "Inner Part of Inner Piece Material",
          "Thread Material",
        ].forEach((item) => {
          materials[item].color.set(materialColor).multiplyScalar(4);
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
      } else if (materialType === "toe cap") {
        setToeThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(toeCapColor);
          return prevMaterial;
        });
        materials["Cap Toe Material"].color.set(toeCapColor).multiplyScalar(4);
      } else if (materialType === "vamp") {
        setVampThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(vampColor);
          return prevMaterial;
        });
        materials["Cap Toe Body Material"].color
          .set(vampColor)
          .multiplyScalar(4);
      } else if (materialType === "quarter") {
        materials["Cap Toe Side Parts Material"].color
          .set(quarterColor)
          .multiplyScalar(4);
      } else if (materialType === "facing") {
        setFaceThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(facingColor);
          return prevMaterial;
        });
        materials["Cap Toe Front Material"].color
          .set(facingColor)
          .multiplyScalar(4);
      } else if (materialType === "heel cap") {
        setBackThreadMaterial((prevMaterial) => {
          prevMaterial.color.set(heelCapColor);
          return prevMaterial;
        });
        materials["Cap Toe Back Part Material"].color
          .set(heelCapColor)
          .multiplyScalar(4);
      } else if (materialType === "tounge") {
        materials["Outer Part of Inner Piece Material"].color
          .set(toungueColor)
          .multiplyScalar(4);
      }
    });
  }, [
    materials,
    lacesColor,
    eyeletsColor,
    materialType,
    materialColor,
    quarterColor,
    vampColor,
    facingColor,
    toungueColor,
    heelCapColor,
    toeCapColor,
  ]);
  // ye textures k liye hai.......................................
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
  useEffect(() => {
    const materialRepeatMap = {
      "Cap Toe Side Parts Material": [3, 3],
      "Cap Toe Material": [4, 4],
      "Cap Toe Body Material": [5, 5],
      "Cap Toe Front Material": [5, 5],
      "Cap Toe Back Part Material": [4, 4],
      "Outer Part of Inner Piece Material": [6, 6],
      "Inner Part of Inner Piece Material": [8, 8],
      "Thread Material": [15, 15], // very fine texture
      "Laces.002": [10, 10], // more texture on laces
    };

    Object.entries(materialRepeatMap).forEach(([name, repeat]) => {
      const mat = materials[name];
      if (mat) {
        const clonedAlbedo = albedo?.clone();
        const clonedNormal = normal?.clone();
        const clonedRoughness = roughness?.clone();
        const clonedMetalness = metalness?.clone();
        const clonedAO = ao?.clone();

        const textures = [
          clonedAlbedo,
          clonedNormal,
          clonedRoughness,
          clonedMetalness,
          clonedAO,
        ];

        textures.forEach((texture) => {
          if (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.anisotropy = 20;
            texture.repeat.set(...repeat);
          }
        });

        mat.map = clonedAlbedo;
        mat.normalMap = clonedNormal;
        mat.roughnessMap = clonedRoughness;
        mat.metalnessMap = clonedMetalness;
        mat.aoMap = clonedAO;

        mat.roughness = 1.0;
        mat.metalness = 1.3;
        mat.aoMapIntensity = 2;
        mat.normalScale = new THREE.Vector2(0.5, 0.5);
        mat.clearcoat = 0;
        mat.clearcoatRoughness = 1;
        mat.envMapIntensity = 0.2;
        mat.needsUpdate = true;
      }
    });
  }, [materials, albedo, normal, roughness, metalness, ao]);

  const dispatch = useDispatch();

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sole_Pad.geometry}
        material={materials["Inner Piece of Inner Piece"]}
        position={[0, -0.004, 0]}
        scale={[0.146, 0.149, 0.146]}
      />
      <group position={[0, -0.009, 0]} scale={0.149}>
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Cap Toe Side Parts Material"]}
          onPointerOver={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x666666);
            e.object.material.emissiveIntensity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x000000);
            e.object.material.emissiveIntensity = 0;
          }}
          onClick={() => {
            dispatch(setMaterialType("quarter"));
            dispatch(setAllPiecesMaterialState(true));
          }}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials["Cap Toe Inner Material"]}
          onPointerOver={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x666666);
            e.object.material.emissiveIntensity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x000000);
            e.object.material.emissiveIntensity = 0;
          }}
          material-color="#742C19"
        />
      </group>
      {medallionState && (
        <group position={[0, -0.009, 0]} scale={0.149}>
          <mesh
            geometry={nodes.Cube001.geometry}
            material={materials["Cap Toe Material"]}
            onPointerOver={(e) => {
              e.stopPropagation();
              e.object.material.emissive.set(0x666666);
              e.object.material.emissiveIntensity = 0.5;
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              e.object.material.emissive.set(0x000000);
              e.object.material.emissiveIntensity = 0;
            }}
            onClick={() => {
              dispatch(setMaterialType("toe cap"));
              dispatch(setAllPiecesMaterialState(true));
            }}
          />
          <mesh
            geometry={nodes.Cube001_1.geometry}
            material={materials["Cap Toe Body Material"]}
            onPointerOver={(e) => {
              e.stopPropagation();
              e.object.material.emissive.set(0x666666);
              e.object.material.emissiveIntensity = 0.5;
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              e.object.material.emissive.set(0x000000);
              e.object.material.emissiveIntensity = 0;
            }}
          />
          <mesh
            geometry={nodes.Cube001_2.geometry}
            material={materials["Cap Toe Inner Material"]}
            onPointerOver={(e) => {
              e.stopPropagation();
              e.object.material.emissive.set(0x666666);
              e.object.material.emissiveIntensity = 0.5;
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              e.object.material.emissive.set(0x000000);
              e.object.material.emissiveIntensity = 0;
            }}
          />
        </group>
      )}
      {eyeletsType !== "blind eyelets" && (
        <mesh
          geometry={nodes.Cap_Toe_Eyelets.geometry}
          material={materials["EyeLets Material"]}
          position={[0, -0.009, 0]}
          scale={0.149}
          onPointerOver={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x666666);
            e.object.material.emissiveIntensity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x000000);
            e.object.material.emissiveIntensity = 0;
          }}
        />
      )}
      {!medallionState && (
        <mesh
          geometry={nodes.Cap_Toe.geometry}
          material={materials["Cap Toe Material"]}
          position={[0, -0.009, 0]}
          scale={0.149}
          onPointerOver={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x666666);
            e.object.material.emissiveIntensity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x000000);
            e.object.material.emissiveIntensity = 0;
          }}
          onClick={() => {
            dispatch(setMaterialType("toe cap"));
            dispatch(setAllPiecesMaterialState(true));
          }}
        />
      )}
      <mesh
        geometry={nodes.Cap_Toe_Body002.geometry}
        material={materials["Cap Toe Body Material"]}
        position={[0, -0.009, 0]}
        scale={0.149}
        onPointerOver={(e) => {
          e.stopPropagation();
          e.object.material.emissive.set(0x666666);
          e.object.material.emissiveIntensity = 0.5;
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          e.object.material.emissive.set(0x000000);
          e.object.material.emissiveIntensity = 0;
        }}
        onClick={() => {
          dispatch(setMaterialType("vamp"));
          dispatch(setAllPiecesMaterialState(true));
        }}
      />
      <mesh
        geometry={nodes.Cap_Toe_Body003.geometry}
        material={materials["Cap Toe Front Material"]}
        position={[0, -0.009, 0]}
        scale={0.149}
        onPointerOver={(e) => {
          e.stopPropagation();
          e.object.material.emissive.set(0x666666);
          e.object.material.emissiveIntensity = 0.5;
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          e.object.material.emissive.set(0x000000);
          e.object.material.emissiveIntensity = 0;
        }}
        onClick={() => {
          dispatch(setMaterialType("facing"));
          dispatch(setAllPiecesMaterialState(true));
        }}
      />
      <mesh
        geometry={nodes.Cap_Toe_Body004.geometry}
        material={materials["Cap Toe Back Part Material"]}
        position={[0, -0.009, 0]}
        scale={0.149}
        onPointerOver={(e) => {
          e.stopPropagation();
          e.object.material.emissive.set(0x666666);
          e.object.material.emissiveIntensity = 0.5;
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          e.object.material.emissive.set(0x000000);
          e.object.material.emissiveIntensity = 0;
        }}
        onClick={() => {
          dispatch(setMaterialType("heel cap"));
          dispatch(setAllPiecesMaterialState(true));
        }}
      />
      {/* <mesh
        geometry={nodes.Cap_Toe__Thread_Path_9_Stich_Back.geometry}
        material={materials["Thread Material"]}
        position={[0, 0, -0.003]}
      /> */}
      <mesh
        geometry={nodes.Cap_Toe__Thread_Path_10_Stich_Middle.geometry}
        material={faceThreadMaterial}
      />
      {/* <mesh
        geometry={nodes.Cap_Toe__Thread_Path_13_Middle_Stich.geometry}
        material={materials["Thread Material"]}
      /> */}
      <mesh
        geometry={nodes.Cap_Toe__Thread_Top_Sides_Outer.geometry}
        material={faceThreadMaterial}
      />
      <mesh
        geometry={nodes.Cap_Toe_Inner_Thread_Top_Sides001.geometry}
        material={faceThreadMaterial}
      />
      <mesh
        geometry={nodes.Cap_Toe_Thread_Path_4_Stich_Back_Left.geometry}
        material={backThreadMaterial}
      />
      <mesh
        geometry={nodes.Cap_Toe_Thread_Path_6_Stich_Back_Side_Right.geometry}
        material={backThreadMaterial}
      />
      <mesh
        geometry={nodes.Cap_Toe_Thread_Path_8_Stich_Back.geometry}
        material={backThreadMaterial}
      />
      <mesh
        geometry={nodes.Cap_Toe_Thread_Path_11_Stich_Middle001.geometry}
        material={faceThreadMaterial}
      />
      <mesh
        geometry={nodes.Cap_Toe_Thread_Path_11_Stich_Middle002.geometry}
        material={vampThreadMaterial}
      />
      <mesh
        geometry={nodes.Cap_Toe_Thread_Path_11_Stich_Middle003.geometry}
        material={vampThreadMaterial}
      />
      {/* <mesh
        geometry={nodes.Cap_Toe_Thread_Path_12_Middle_Stich.geometry}
        material={materials["Thread Material"]}
      /> */}
      <mesh
        geometry={nodes.Cap_Toe_Thread_Top.geometry}
        material={toeThreadMaterial}
      />
      <mesh
        geometry={nodes.Cap_Toe_Thread_Top001.geometry}
        material={toeThreadMaterial}
      />
      <mesh
        geometry={nodes.Sole_Thread_Path_For_Cap_Toe_.geometry}
        material={soleThreadMaterial}
        position={[0.008, 0.007, -0.016]}
        rotation={[0, 0.142, 0]}
        scale={1.02}
      />
      {sole === "leatherBlack" && (
        <group position={[0.012, 0.008, 0.03]}>
          <mesh
            geometry={nodes.Cube007.geometry}
            material={materials["Sole.001"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube007_1.geometry}
            material={materials.Points}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube007_2.geometry}
            material={materials["Brown Bottom"]}
            material-color="black"
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
          <mesh
            geometry={nodes.Cube002.geometry}
            material={materials["Sole.001"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials.Points}
          />
          <mesh
            geometry={nodes.Cube002_2.geometry}
            material={materials["Brown Bottom"]}
          />
          <mesh geometry={nodes.Cube002_3.geometry} material={materials.Heel} />
          <mesh
            geometry={nodes.Cube002_4.geometry}
            material={materials["Leather Mid Sole"]}
            material-color="#3C1E12"
          />
        </group>
      )}
      {sole === "trackingEva" && (
        <group position={[0.007, 0.002, 0.029]} rotation={[0.008, 0, 0.013]}>
          <mesh
            geometry={nodes.Cube014.geometry}
            material={materials["Sole.001"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube014_1.geometry}
            material={materials["Brown Bottom"]}
            material-color="black"
          />
        </group>
      )}
      <group position={[0.005, 0.088, -0.001]}>
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials["Outer Part of Inner Piece Material"]}
          onPointerOver={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x666666);
            e.object.material.emissiveIntensity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            e.object.material.emissive.set(0x000000);
            e.object.material.emissiveIntensity = 0;
          }}
          onClick={() => {
            dispatch(setMaterialType("tounge"));
            dispatch(setAllPiecesMaterialState(true));
          }}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["Inner Part of Inner Piece Material"]}
        />
      </group>
      <mesh
        geometry={nodes.Inner_Piece_of_Shoe_thread_Path_Stich_Cap_Toe_.geometry}
        material={materials["Thread Material"]}
      />
      <mesh
        geometry={nodes.Lace_1.geometry}
        material={materials["Laces.002"]}
        position={[0.005, 0.087, 0.038]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Lace_2.geometry}
        material={materials["Laces.002"]}
        position={[0.003, 0.093, 0.028]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Lace_3.geometry}
        material={materials["Laces.002"]}
        position={[0, 0.101, 0.02]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Lace_4.geometry}
        material={materials["Laces.002"]}
        position={[-0.002, 0.107, 0.011]}
        scale={0.032}
      />
      <mesh
        geometry={nodes.Lace_5.geometry}
        material={materials["Laces.002"]}
        position={[-0.005, 0.112, 0.002]}
        scale={0.032}
      />
      {sole == "rubber" && (
        <>
          <mesh
            geometry={nodes.Cube004.geometry}
            material={materials["Sole.001"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube004_1.geometry}
            material={materials["Wood Sole"]}
            material-color="black"
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

useGLTF.preload("/oxford-models/CapToe-draco.glb");
