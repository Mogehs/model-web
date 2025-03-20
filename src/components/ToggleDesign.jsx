import React, { useState } from "react";
import { useDesign } from "../contexts/DesignContext";

const ToggleDesign = () => {
  const {
    medallionState,
    designState,
    setDesignState,
    setMedallionState,
    leatherSoleState,
    setLeatherSoleState,
    trackingEvaSoleState,
    setTrackingEvaSoleState,
    rubberSoleState,
    setRubberSoleState,
  } = useDesign();

  const [style, setStyle] = useState(false);
  const [toeCap, setToeCap] = useState(false);
  const [medellion, setMedellion] = useState(false);
  const [sole, setSole] = useState(false);

  const Sole = () => {
    return (
      <div
        className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
      transition-transform duration-[2000] ease-in-out z-20
      ${sole ? "inline" : "hidden"}`}
      >
        <h1 className="mx-auto w-50 text-center leading-none uppercase sticky top-0 bg-white pt-6">
          Sole
        </h1>
        <div className="flex flex-col items-center gap-15 mt-10 h-[60%]">
          {[
            { label: "goma2", current: "rubber" },
            { label: "cuero2", current: "leather - black" },
            { label: "cuero_medio2", current: "leather - mid" },
            { label: "track2", current: "tracker - eva" },
          ].map((item) => (
            <div
              className="flex flex-col items-center uppercase cursor-pointer"
              onClick={() => {
                if (item.current === "rubber") {
                  setRubberSoleState(true);
                  setLeatherSoleState(false);
                  setTrackingEvaSoleState(false);
                } else if (item.current === "tracker - eva") {
                  setTrackingEvaSoleState(true);
                  setRubberSoleState(false);
                  setLeatherSoleState(false);
                } else if (item.current === "leather - black") {
                  setLeatherSoleState(true);
                  setRubberSoleState(false);
                  setTrackingEvaSoleState(false);
                }
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
          onClick={() => setSole(false)}
        >
          <hr className="my-2 text-gray-400" />
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
        <div className="flex flex-col items-center gap-10 py-20 h-[69%]">
          {[
            { label: "no", current: "no", value: false },
            { label: "yes", current: "yes", value: true },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center uppercase cursor-pointer"
              onClick={() => {
                if (item.value) {
                  setDesignState(false);
                  setMedallionState(true);
                } else {
                  setDesignState(true);
                  setMedallionState(false);
                }
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
        <div className="flex flex-col items-center gap-15 mt-10 h-[60%]">
          {[
            { label: "lisa", current: "plain toe" },
            { label: "enterizo", current: "wholecut" },
            { label: "vega", current: "wingtip" },
            { label: "recta", current: "cap toe" },
          ].map((item) => (
            <div className="flex flex-col items-center uppercase cursor-pointer">
              <p className="cursor-pointer text-[0.7rem] text-gray-400">
                {item.label}
              </p>
              <p className="text-[1rem] font-bold">{item.current}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-20 text-center text-[1rem]  cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
          onClick={() => setToeCap(false)}
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
        <div className="flex flex-col items-center gap-15 mt-10 h-[75%]">
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
          ].map((item) => (
            <div
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
      <Sole />
      <Medellion />
      <ToeCap />
      <Style />
      <div className=" sm:sm:w-[25%] py-5 sm:py-20 font-gt text-[0.9rem] ">
        <h1 className="mx-auto w-50 text-center leading-none ">
          Create your own shoes in just a few clicks
        </h1>
        <div className="flex justify-center flex-col items-center gap-10 sm:gap-30 mt-10 sm:mt-20">
          {["Style", "Materials", "Sizes & Options"].map((item) => (
            <p
              key={item}
              onClick={() => item === "Style" && setStyle((prev) => !prev)}
              className="cursor-pointer uppercase text-[0.8rem]"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToggleDesign;
