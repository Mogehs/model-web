import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sole from "./style/Sole";
import {
  setMedallionStyleState,
  setSoleStyleState,
  setToeCapStyleState,
  setModelStyleState,
  setLacesStyleState,
  setEyeletsStyleState,
  setAllPiecesMaterialState,
  setMaterialType,
  setSoleDisplayStyleState,
} from "../redux/features/styleSlice";
import Medallion from "./style/Medallion";
import ToeCap from "./style/ToeCap";
import Models from "./style/Models";
import Laces from "./style/Laces";
import Eyelets from "./style/Eyelets";
import AllPieces from "./materials/AllPieces";

const ToggleDesign = () => {
  const modelType = useSelector((state) => state.model.selectedModel);

  const medallionState = useSelector((state) => state.design.medallionState);

  const sole = useSelector((state) => state.design.soleState);
  const medallionStyle = useSelector(
    (state) => state.style.medallionStyleState
  );
  const soleStyle = useSelector((state) => state.style.soleStyelState);
  const toeCapStyle = useSelector((state) => state.style.toeCapStyleState);
  const modelStyle = useSelector((state) => state.style.modelStyleState);
  const lacesStyle = useSelector((state) => state.style.lacesStyleState);
  const selectedStyle = useSelector((state) => state.model.selectedStyle);
  const eyeletsStyleState = useSelector(
    (state) => state.style.eyeletsStyleState
  );
  const allPiecesState = useSelector(
    (state) => state.style.allPiecesMaterialState
  );
  const eyeletsStyle = useSelector((state) => state.design.eyeletsStyle);
  const lacesType = useSelector((state) => state.style.lacesType);

  const dispatch = useDispatch();

  const [style, setStyle] = useState(false);
  const [materials, setMaterials] = useState(false);

  const Materials = () => {
    return (
      <div
        className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
        transition-transform duration-[2000] ease-in-out
        ${materials ? "inline" : "hidden"}`}
      >
        <h1 className="mx-auto w-50 text-center leading-none uppercase sticky top-0 bg-white pt-6">
          Choose the each material of your shoe
        </h1>
        {selectedStyle === "wingtip" ? (
          <div className="flex flex-col items-center gap-15 mt-10 h-fit">
            {[
              {
                label: "all pieces",
                current: "italian calf leather",
                img: "/materials/all-pieces.png",
              },
              {
                label: "toe cap",
                current: "italian calf leather",
                img: "/materials/toe-cap.png",
              },
              {
                label: "vamp",
                current: "italian calf leather",
                img: "/materials/vamp.png",
              },
              {
                label: "quarter",
                current: "italian calf leather",
                img: "/materials/quarter.png",
              },
              {
                label: "facing",
                current: "italian calf leather",
                img: "/materials/facing.png",
              },
              {
                label: "heel cap",
                current: "italian calf leather",
                img: "/materials/heel-cap.png",
              },
              {
                label: "tounge",
                current: "italian calf leather",
                img: "/materials/tongue.png",
              },
            ].map((item) => (
              <div
                className="flex flex-col items-center cursor-pointer h-fit uppercase text-center"
                onClick={() => {
                  dispatch(setAllPiecesMaterialState(!allPiecesState));
                  dispatch(setMaterialType(item.label));
                }}
              >
                <img src={item.img} alt="" className="w-[12rem]" />
                <p className="cursor-pointer text-[0.9rem] text-gray-400">
                  {item.label}
                </p>
                <p className="text-[0.9rem] font-bold">{item.current}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-15 mt-10 h-fit">
            {[
              {
                label: "all pieces",
                current: "italian calf leather",
                img: "/materials/cap-toe/all-pieces.png",
              },
              {
                label: "toe cap",
                current: "italian calf leather",
                img: "/materials/cap-toe/toe-cap.png",
              },
              {
                label: "vamp",
                current: "italian calf leather",
                img: "/materials/cap-toe/vamp.png",
              },
              {
                label: "quarter",
                current: "italian calf leather",
                img: "/materials/cap-toe/quarter.png",
              },
              {
                label: "facing",
                current: "italian calf leather",
                img: "/materials/cap-toe/facing.png",
              },
              {
                label: "heel cap",
                current: "italian calf leather",
                img: "/materials/cap-toe/heel-cap.png",
              },
              {
                label: "tounge",
                current: "italian calf leather",
                img: "/materials/tongue.png",
              },
            ].map((item) => (
              <div
                className="flex flex-col items-center cursor-pointer h-fit uppercase text-center"
                onClick={() => {
                  dispatch(setAllPiecesMaterialState(!allPiecesState));
                  dispatch(setMaterialType(item.label));
                }}
              >
                <img src={item.img} alt="" className="w-[12rem]" />
                <p className="cursor-pointer text-[0.9rem] text-gray-400">
                  {item.label}
                </p>
                <p className="text-[0.9rem] font-bold">{item.current}</p>
              </div>
            ))}
          </div>
        )}
        <div
          className="mt-20 text-center text-[1rem]  cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
          onClick={() => setMaterials(false)}
        >
          <hr className="my-2 text-gray-400" />
          <p>Back</p>
        </div>
      </div>
    );
  };

  const Style = () => {
    return (
      <div
        className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
        transition-transform duration-[2000] ease-in-out
        ${style ? "inline" : "hidden"}`}
      >
        <h1 className="mx-auto w-50 text-center leading-none uppercase sticky top-0 bg-white py-4">
          Design the style of your shoe
        </h1>
        <div className="flex flex-col items-center gap-15 mt-10 h-fit">
          {[
            { label: "model", current: modelType },
            { label: "toe cap", current: selectedStyle },
            { label: "medallion", current: medallionState ? "yes" : "no" },
            {
              label: "sole",
              current: sole,
            },
            { label: "laces", current: lacesType },
            { label: "eyelets", current: eyeletsStyle },
          ].map((item, id) => (
            <div
              key={id}
              className="flex flex-col items-center cursor-pointer h-fit uppercase text-center"
              onClick={() => {
                item.label === "toe cap" &&
                  dispatch(setToeCapStyleState(!toeCapStyle));
                item.label === "medallion" &&
                  dispatch(setMedallionStyleState(!medallionStyle));
                item.label === "sole" &&
                  dispatch(setSoleStyleState(!soleStyle));
                dispatch(setSoleDisplayStyleState(true));
                item.label === "model" &&
                  dispatch(setModelStyleState(!modelStyle));
                item.label === "laces" &&
                  dispatch(setLacesStyleState(!lacesStyle));
                item.label === "eyelets" &&
                  dispatch(setEyeletsStyleState(!eyeletsStyleState));
              }}
            >
              <p className="cursor-pointer text-[0.7rem] text-gray-400">
                {item.label}
              </p>
              <p className="text-[1rem] font-bold">{item.current}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-20 text-center text-[1rem]  cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
          onClick={() => setStyle(false)}
        >
          <hr className="my-2 text-gray-400" />
          <p>Back</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Style />
      <Laces />
      <Models />
      <Sole />
      <Medallion />
      <ToeCap />
      <Eyelets />
      <Materials />
      <AllPieces />

      <div className="sm:w-[25%] py-5 lg:py-20  font-gt text-[0.9rem] ">
        <h1 className="mx-auto w-50 text-center leading-none ">
          Create your own shoes in just a few clicks
        </h1>
        <div className="flex justify-center flex-col items-center gap-10 sm:gap-12 mt-10 sm:mt-20">
          {[
            { name: "Style", img: "/icons/icon_style.svg" },
            { name: "Materials", img: "/icons/icon_material.svg" },
            { name: "Sizes & Options", img: "/icons/icon_size.svg" },
          ].map((item, id) => (
            <>
              <div
                className="flex flex-col items-center justify-center gap-3 cursor-pointer"
                onClick={() => {
                  item.name === "Style" && setStyle((prev) => !prev),
                    item.name === "Materials" && setMaterials((prev) => !prev);
                }}
                key={id}
              >
                <img src={item.img} alt="" className="w-[2rem]" />
                <p key={item} className=" uppercase text-[0.8rem]">
                  {item.name}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToggleDesign;
