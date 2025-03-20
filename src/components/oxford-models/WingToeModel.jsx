import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useProxy } from "valtio/utils";

import state from "../../contexts/State";
import { useDesign } from "../../contexts/DesignContext";

export default function WingToeModel(props) {
  const { nodes, materials } = useGLTF(
    "/oxford-models/wing-toe-model/shoe.gltf"
  );
  const ref = useRef();
  const snap = useProxy(state);
  useFrame(() => {
    // ref.current.rotation.y += 0.01;
  });

  const {
    designState,
    medallionState,
    leatherSoleState,
    trackingEvaSoleState,
    rubberSoleState,
  } = useDesign();

  return (
    <>
      <group {...props} dispose={null} ref={ref} scale={[7, 7, 7]}>
        <mesh
          geometry={nodes.Sole_Pad.geometry}
          material={materials["seam.01"]}
          position={[0, -0.004, 0]}
          scale={[0.146, 0.149, 0.146]}
          material-color={snap.items.sole}
        />
        <group position={[0, -0.009, 0]} scale={0.149}>
          {/* Wing Tip */}
          {designState && (
            <mesh
              geometry={nodes.Cube002.geometry}
              material={materials["Wing Toe Material"]}
              material-color={snap.items.wingToeMaterial}
            />
          )}
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials["Wing Toe Body Material"]}
            material-color={snap.items.wingToeBodyMaterial}
          />
          <mesh
            geometry={nodes.Cube002_2.geometry}
            material={materials["Wing Toe Side Parts Material"]}
            material-color={snap.items.wingToeSideParts}
          />
          <mesh
            geometry={nodes.Cube002_3.geometry}
            material={materials["Wing Toe Back Material"]}
            material-color="black"
          />
          <mesh
            geometry={nodes.Cube002_4.geometry}
            material={materials["Wing Toe Front Material"]}
            material-color={snap.items.wingToeMaterial}
          />
        </group>
        <group position={[0, -0.009, 0]} scale={0.149}>
          {/* Medallion */}
          {medallionState && (
            <mesh
              geometry={nodes.Cube005.geometry}
              material={materials["Wing Toe Material"]}
              material-color="black"
            />
          )}
          {/* <mesh
            geometry={nodes.Cube005_1.geometry}
            material={materials["Wing Toe Body Material"]}
            material-color={snap.items.wingToeMaterial}
          /> */}
          {/* <mesh
            geometry={nodes.Cube005_2.geometry}
            material={materials["Wing Toe Side Parts Material"]}
          /> */}
          {/* <mesh
            geometry={nodes.Cube005_3.geometry}
            material={materials["Wing Toe Back Material"]}
          /> */}
          {/* <mesh
            geometry={nodes.Cube005_4.geometry}
            material={materials["Wing Toe Front Material"]}
          /> */}
          {/* <mesh
            geometry={nodes.Cube005_5.geometry}
            material={materials["Whole Cut Body Material"]}
            material-color="brown"
          /> */}
        </group>
        <mesh
          geometry={nodes.Inner_Piece_of_Shoe_thread_Path_Stich.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={
            nodes.Inner_Piece_of_Shoe_thread_Path_Stich_Plain_Toe.geometry
          }
          material={materials["seam.01"]}
          //   material-color="white"
        />
        <mesh
          geometry={nodes.Plain_Toe_Inner_Thread_Top_Sides001.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_4_Stich_Back_Left.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_5_Stich_Bottom.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={
            nodes.Plain_Toe_Thread_Path_6_Stich_Back_Side_Right.geometry
          }
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_7_Stich_Bottom.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_8_Stich_Back.geometry}
          material={materials["seam.01"]}
          position={[0.002, 0, -0.002]}
          //   material-color="white"
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_9_Stich_Back.geometry}
          material={materials["seam.01"]}
          position={[0, 0, -0.003]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_10_Stich_Middle.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_11_Stich_Middle.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_12_Middle_Stich.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Path_13_Middle_Stich.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Plain_Toe_Thread_Top_Sides_Outer.geometry}
          material={materials["Rope Pattern"]}
        />{" "}
        <mesh
          geometry={nodes.Sole_Thread_Path_For_Plain_Toe.geometry}
          material={materials["seam.01"]}
          position={[0.008, 0.007, -0.016]}
          rotation={[0, 0.142, 0]}
          scale={1.02}
        />
        <mesh
          geometry={nodes.Wing_Toe_Thread_Top.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Wing_Toe_Thread_Top001.geometry}
          material={materials["seam.01"]}
        />
        <mesh
          geometry={nodes.Lace_1.geometry}
          material={materials["Black fabric"]}
          position={[0.005, 0.087, 0.038]}
          scale={0.032}
        />
        <mesh
          geometry={nodes.Lace_2.geometry}
          material={materials["Black fabric"]}
          position={[0.003, 0.093, 0.028]}
          scale={0.032}
        />
        <mesh
          geometry={nodes.Lace_3.geometry}
          material={materials["Black fabric"]}
          position={[0, 0.101, 0.02]}
          scale={0.032}
        />
        <mesh
          geometry={nodes.Lace_4.geometry}
          material={materials["Black fabric"]}
          position={[-0.002, 0.107, 0.011]}
          scale={0.032}
        />
        <mesh
          geometry={nodes.Lace_5.geometry}
          material={materials["Black fabric"]}
          position={[-0.005, 0.112, 0.002]}
          scale={0.032}
        />
        {/* Leather Black */}
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
              material-color="brown"
            />
            <mesh
              geometry={nodes.Cube007_3.geometry}
              material={materials.Heel}
              material-color="brown"
            />
          </group>
        )}
        {/* <group position={[0.012, 0.008, 0.03]}>
          <mesh geometry={nodes.Cube003.geometry} material={materials.Sole} />
          <mesh
            geometry={nodes.Cube003_1.geometry}
            material={materials.Points}
          />
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
        {/* Tracker Eva sole */}
        {trackingEvaSoleState && (
          <mesh
            geometry={nodes.Tracker_Eva006.geometry}
            material={materials.Sole}
            position={[0.007, 0.002, 0.029]}
            rotation={[0.008, 0, 0.013]}
            material-color="black"
          />
        )}
        {/* <mesh
          geometry={nodes.Plane001.geometry}
          material={materials["Black bull leather"]}
        /> */}
        {/* <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["seam.01"]}
        /> */}
        {/* <mesh
          geometry={nodes.Plane002.geometry}
          material={materials["Black bull leather"]}
        /> */}
        {/* <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials["seam.01"]}
        /> */}
        {/* Rubber Sole */}
        {rubberSoleState && (
          <>
            <mesh geometry={nodes.Cube004.geometry} material={materials.Sole} />
            <mesh
              geometry={nodes.Cube004_1.geometry}
              material={materials["Wood Sole"]}
            />
            <mesh
              geometry={nodes.Cube004_2.geometry}
              material={materials["Sole Bottom"]}
            />
          </>
        )}
      </group>
    </>
  );
}
