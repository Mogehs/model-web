import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDesignState,
  setLeatherSoleState,
  setMedallionState,
  setRubberSoleState,
  setTrackingEvaSoleState,
} from "../redux/features/designSlice";

const ToggleDesign = () => {
  const medallionState = useSelector((state) => state.design.medallionState);
  const leatherSoleState = useSelector(
    (state) => state.design.leatherSoleState
  );
  const trackingEvaSoleState = useSelector(
    (state) => state.design.trackingEvaSoleState
  );
  const rubberSoleState = useSelector((state) => state.design.rubberSoleState);

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

  const Sole = () => {
    return (
      <div
        className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
      transition-transform duration-[2000] ease-in-out z-20
      ${sole ? "inline" : "hidden"}`}
      >
        <h1 className="mx-auto w-full text-center leading-none uppercase sticky top-0  bg-white p-4">
          Sole
        </h1>
        <div className="flex flex-col items-center gap-5 mt-5 h-fit">
          {[
            {
              label: "goma2",
              current: "rubber",
              img: "/model-soles/rubber.jpg",
            },
            {
              label: "cuero2",
              current: "leather - black",
              img: "/model-soles/leather-black.jpg",
            },
            {
              label: "cuero_medio2",
              current: "leather - mid",
              img: "/model-soles/leather-mid.jpg",
            },
            {
              label: "track2",
              current: "tracker - eva",
              img: "/model-soles/tracker-eva.jpg",
            },
          ].map((item) => (
            <div
              className="flex flex-col items-center uppercase cursor-pointer"
              onClick={() => {
                if (item.current === "rubber") {
                  dispatch(setRubberSoleState(true));
                  dispatch(setLeatherSoleState(false));
                  dispatch(setTrackingEvaSoleState(false));
                } else if (item.current === "tracker - eva") {
                  dispatch(setTrackingEvaSoleState(true));
                  dispatch(setRubberSoleState(false));
                  dispatch(setLeatherSoleState(false));
                } else if (item.current === "leather - black") {
                  dispatch(setLeatherSoleState(true));
                  dispatch(setRubberSoleState(false));
                  dispatch(setTrackingEvaSoleState(false));
                } else if (item.current === "leather - mid") {
                  dispatch(setLeatherSoleState(true));
                  dispatch(setRubberSoleState(false));
                  dispatch(setTrackingEvaSoleState(false));
                }
              }}
            >
              <img src={item.img} alt="" />
              {/* <p className="cursor-pointer text-[0.7rem] text-gray-400">
                {item.label}
              </p> */}
              <p className="text-[1rem] font-bold">{item.current}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-20 text-center text-[1rem]  cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
          onClick={() => setSole(false)}
        >
          <hr className="my-2 text-gray-400  " />
          <p>Back</p>
        </div>
      </div>
    );
  };

  const Medellion = () => {
    return (
      <div
        className={`sm:w-[25%]  font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
      transition-transform duration-[2000] ease-in-out z-10
      ${medellion ? "inline" : "hidden"}`}
      >
        <h1 className="mx-auto w-50 text-center leading-none uppercase sticky top-0 bg-white pt-6">
          Medallion
        </h1>
        <div className="flex flex-col items-center gap-10 py-10 h-[69%]">
          {[
            {
              label: "no",
              current: "no",
              value: false,
              img: "/medallion/yes-medallion.jpg",
            },
            {
              label: "yes",
              current: "yes",
              value: true,
              img: "/medallion/no-medallion.jpg",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center uppercase cursor-pointer"
              onClick={() => {
                if (item.value) {
                  dispatch(setDesignState(false));
                  dispatch(setMedallionState(true));
                } else {
                  dispatch(setDesignState(true));
                  dispatch(setMedallionState(false));
                }
              }}
            >
              <img src={item.img} alt="" className="w-[10rem]" />
              {/* <p className="cursor-pointer text-[0.7rem] text-gray-400">
                {item.label}
              </p> */}
              <p className="text-[1rem] font-bold">{item.current}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-20 text-center text-[1rem]  cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
          onClick={() => setMedellion(false)}
        >
          <hr className="my-2 text-gray-400" />
          <p>Back</p>
        </div>
      </div>
    );
  };

  const ToeCap = () => {
    return (
      <div
        className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
      transition-transform duration-[2000] ease-in-out z-10
      ${toeCap ? "inline" : "hidden"}`}
      >
        <h1 className="mx-auto w-50 text-center leading-none uppercase sticky top-0 bg-white pt-6">
          Toe Cap
        </h1>
        <div className="flex flex-col items-center gap-15 mt-10 h-[100%]">
          {[
            {
              label: "lisa",
              current: "plain toe",
              img: "/model-pics/plain-toe.jpg",
            },
            {
              label: "enterizo",
              current: "wholecut",
              img: "/model-pics/whole-cut.jpg",
            },
            {
              label: "vega",
              current: "wingtip",
              img: "/model-pics/wing-tip.jpg",
            },
            {
              label: "recta",
              current: "cap toe",
              img: "/model-pics/cap-toe.jpg",
            },
          ].map((item) => (
            <div className="flex flex-col items-center uppercase cursor-pointer">
              <img src={item.img} alt="" className="w-[12rem]" />
              {/* <p className="cursor-pointer text-[0.7rem] text-gray-400">
                {item.label}
              </p> */}
              <p className="text-[1rem] font-bold">{item.current}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-20 text-center text-[1rem]  cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
          onClick={() => setToeCap(false)}
        >
          <hr className="my-2 text-gray-400 sticky bottom-0" />
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
                item.label === "toe cap" && setToeCap((prev) => !prev);
                item.label === "medallion" && setMedellion((prev) => !prev);
                item.label === "sole" && setSole((prev) => !prev);
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
      <Medellion />
      <ToeCap />
      <Materials />
      <div className="sm:w-[25%] py-5 sm:py-20 font-gt text-[0.9rem] ">
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
