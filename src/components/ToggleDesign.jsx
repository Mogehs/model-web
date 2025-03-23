import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDesignState,
  setLeatherSoleState,
  setMedallionState,
  setRubberSoleState,
  setTrackingEvaSoleState,
} from "../redux/features/designSlice";
import Sole from "./style/Sole";
import {
  setMedallionStyleState,
  setSoleStyleState,
  setToeCapStyleState,
} from "../redux/features/styleSlice";
import Medallion from "./style/Medallion";
import ToeCap from "./style/ToeCap";

const ToggleDesign = () => {
  const medallionState = useSelector((state) => state.design.medallionState);
  const leatherSoleState = useSelector(
    (state) => state.design.leatherSoleState
  );
  const trackingEvaSoleState = useSelector(
    (state) => state.design.trackingEvaSoleState
  );
  const rubberSoleState = useSelector((state) => state.design.rubberSoleState);
  const medallionStyle = useSelector(
    (state) => state.style.medallionStyleState
  );
  const soleStyle = useSelector((state) => state.style.soleStyelState);
  const toeCapStyle = useSelector((state) => state.style.toeCapStyleState);
  const dispatch = useDispatch();

  const [style, setStyle] = useState(false);
  const [materials, setMaterials] = useState(false);
  const [toeCap, setToeCap] = useState(false);
  const [medellion, setMedellion] = useState(false);
  const [sole, setSole] = useState(false);

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
                item.label === "toe cap" && setToeCap((prev) => !prev);
                item.label === "medallion" && setMedellion((prev) => !prev);
                item.label === "sole" && setSole((prev) => !prev);
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
        <h1 className="mx-auto w-50 text-center leading-none uppercase sticky top-0 bg-white pt-6">
          Design the style of your shoe
        </h1>
        <div className="flex flex-col items-center gap-15 mt-10 h-fit">
          {[
            { label: "model", current: "Oxford" },
            { label: "toe cap", current: "WingTip" },
            { label: "medallion", current: medallionState ? "yes" : "no" },
            {
              label: "sole",
              current: leatherSoleState
                ? "leather"
                : trackingEvaSoleState
                ? "Tracker Eva"
                : rubberSoleState && "Rubber",
            },
            { label: "laces", current: "By Default" },
            { label: "eyelets", current: "blind eylets" },
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
      <Sole />
      <Medallion />
      <ToeCap />
      <Materials />
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
