import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useProxy } from "valtio/utils";

import state from "../../contexts/State";
import { useSelector } from "react-redux";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/oxford-models/WingTip-draco.glb");
  const ref = useRef();
  const snap = useProxy(state);
  useFrame(() => {
    // ref.current.rotation.y += 0.01;
  });

  const designState = useSelector((state) => state.design.designState);
  const medallionState = useSelector((state) => state.design.medallionState);
  const leatherSoleState = useSelector(
    (state) => state.design.leatherSoleState
  );
  const trackingEvaSoleState = useSelector(
    (state) => state.design.trackingEvaSoleState
  );
  const rubberSoleState = useSelector((state) => state.design.rubberSoleState);

  return (
    <group {...props} dispose={null} ref={ref} scale={[7, 7, 7]}>
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
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials["Wing Toe Body Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube002_2.geometry}
            material={materials["Wing Toe Side Parts Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube002_3.geometry}
            material={materials["Wing Toe Back Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube002_4.geometry}
            material={materials["Wing Toe Front Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube002_5.geometry}
            material={materials["Wing Toe Inner Body Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube002_6.geometry}
            material={materials["Eyelets Material"]}
            material-color="white"
          />
        </group>
      )}
      {medallionState && (
        <group position={[0, -0.009, 0]} scale={0.149}>
          <mesh
            geometry={nodes.Cube001.geometry}
            material={materials["Wing Toe Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube001_1.geometry}
            material={materials["Wing Toe Body Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube001_2.geometry}
            material={materials["Wing Toe Side Parts Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube001_3.geometry}
            material={materials["Wing Toe Back Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube001_4.geometry}
            material={materials["Wing Toe Front Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube001_5.geometry}
            material={materials["Wing Toe Inner Body Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube001_6.geometry}
            material={materials["Eyelets Material"]}
            material-color="white"
          />
          <mesh
            geometry={nodes.Cube001_7.geometry}
            material={materials["Whole Cut Body Material"]}
            material-color="black"
          />
        </group>
      )}
      <mesh
        geometry={nodes.Plain_Toe_Inner_Thread_Top_Sides001.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_4_Stich_Back_Left.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_5_Stich_Bottom.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_6_Stich_Back_Side_Right.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_7_Stich_Bottom.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_8_Stich_Back.geometry}
        material={materials["Thread Material"]}
        position={[0.002, 0, -0.002]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_9_Stich_Back.geometry}
        material={materials["Thread Material"]}
        position={[0, 0, -0.003]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_10_Stich_Middle.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_11_Stich_Middle.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_12_Middle_Stich.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Path_13_Middle_Stich.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Plain_Toe_Thread_Top_Sides_Outer.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Sole_Thread_Path_For_Plain_Toe.geometry}
        material={materials["Thread Material"]}
        position={[0.008, 0.007, -0.016]}
        rotation={[0, 0.142, 0]}
        scale={1.02}
        material-color="black"
      />
      <mesh
        geometry={nodes.Wing_Toe_Thread_Top.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      <mesh
        geometry={nodes.Wing_Toe_Thread_Top001.geometry}
        material={materials["Thread Material"]}
        material-color="black"
      />
      {/* <group position={[0.005, 0.088, -0.001]}>
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials["Black bull leather"]}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["Sole Pad"]}
        />
      </group> */}
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
      {leatherSoleState && (
        <group position={[0.012, 0.008, 0.03]}>
          <mesh
            geometry={nodes.Cube007.geometry}
            material={materials.Sole}
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
            material-color="#3C2314"
          />
          <mesh
            geometry={nodes.Cube007_3.geometry}
            material={materials.Heel}
            material-color="black"
          />
        </group>
      )}
      {/* <group position={[0.012, 0.008, 0.03]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.Sole} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.Points} />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials["Brown Bottom"]}
        />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.Heel} />
        <mesh
          geometry={nodes.Cube003_4.geometry}
          material={materials["Leather Mid Sole"]}
        />
      </group> */}
      {trackingEvaSoleState && (
        <group position={[0.007, 0.002, 0.029]} rotation={[0.008, 0, 0.013]}>
          <mesh geometry={nodes.Cube014.geometry} material={materials.Sole} />
          <mesh
            geometry={nodes.Cube014_1.geometry}
            material={materials["Brown Bottom"]}
            material-color="black"
          />
        </group>
      )}
      {rubberSoleState && (
        <>
          <mesh geometry={nodes.Cube004.geometry} material={materials.Sole} />
          <mesh
            geometry={nodes.Cube004_1.geometry}
            material={materials["Wood Sole"]}
            material-color="#261911"
          />
          <mesh
            geometry={nodes.Cube004_2.geometry}
            material={materials["Sole Bottom"]}
            material-color="#232123"
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("/WingTip-draco.glb");
