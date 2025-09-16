import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEyeletsColor,
  setEyeletsStyle,
} from "../../redux/features/designSlice";
import { setEyeletsStyleState } from "../../redux/features/styleSlice";

const Eyelets = () => {
  const eyelets = useSelector((state) => state.style.eyeletsStyleState);
  const dispatch = useDispatch();

  return (
    <div
      className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
               transition-transform duration-[2000] ease-in-out z-20
               ${eyelets ? "inline" : "hidden"}`}
    >
      <h1 className="mx-auto w-full text-center leading-none uppercase sticky top-0  bg-white p-4">
        Eylets
      </h1>
      <div className="grid grid-cols-2 items-center gap-x-0 gap-y-10 mt-10 h-[60%] ">
        {[
          {
            label: "goma2",
            color: "black",
            current: "blind eyelets",
            img: "/eye-lets/invisible.png",
          },
          {
            label: "cuero2",
            color: "#796A35",
            current: "gold",
            img: "/eye-lets/gold.png",
          },
          {
            label: "cuero_medio2",
            color: "#776C42",
            current: "vintage brass",
            img: "/eye-lets/vintage.png",
          },
          {
            label: "track2",
            color: "gray",
            current: "nickel",
            img: "/eye-lets/silver.png",
          },
        ].map((item) => (
          <div
            className="flex flex-col items-center uppercase cursor-pointer"
            onClick={() => {
              dispatch(setEyeletsStyle(item.current));
              dispatch(setEyeletsColor(item.color));
            }}
          >
            <img src={item.img} alt="" className="w-[4rem]" />

            <p className="text-[0.8rem] m-1">{item.current}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-20 text-center text-[1rem]  cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
        onClick={() => dispatch(setEyeletsStyleState(false))}
      >
        <hr className="my-2 text-gray-400  " />
        <p>Back</p>
      </div>
    </div>
  );
};

export default Eyelets;
