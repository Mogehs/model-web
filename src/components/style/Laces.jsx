import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLacesStyle } from "../../redux/features/designSlice";
import {
  setLacesStyleState,
  setLacesType,
} from "../../redux/features/styleSlice";

const Laces = () => {
  const laces = useSelector((state) => state.style.lacesStyleState);
  const dispatch = useDispatch();
  return (
    <div
      className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
           transition-transform duration-[2000] ease-in-out z-20
           ${laces ? "inline" : "hidden"}`}
    >
      <h1 className="mx-auto w-full text-center leading-none uppercase sticky top-0  bg-white p-4">
        Laces
      </h1>
      <div className="grid grid-cols-2 items-center gap-x-0 gap-y-10 mt-10 h-fit ">
        {[
          {
            color: "black",
            label: "goma2",
            current: "black",
            img: "/model-models/oxford.jpg",
          },
          {
            color: "#654321",
            label: "cuero2",
            current: "brown",
            img: "/model-models/derby.jpg",
          },
          {
            color: "#824753",
            label: "cuero_medio2",
            current: "burgundy",
            img: "/model-models/monk.jpg",
          },
          {
            color: "#BA353D",
            label: "track2",
            current: "red",
            img: "/model-models/loafers.jpg",
          },
          {
            color: "#2C4259",
            label: "track2",
            current: "blue",
            img: "/model-models/dress-boots.jpg",
          },
          {
            color: "#6B734D",
            label: "track2",
            current: "green",
            img: "/model-models/chukka-boots.jpg",
          },
        ].map((item) => (
          <div
            className="flex flex-col items-center uppercase cursor-pointer"
            onClick={() => {
              dispatch(setLacesStyle(item.color));
              dispatch(setLacesType(item.current));
            }}
          >
            <div
              style={{ backgroundColor: item.color }}
              className={`w-16 h-16 rounded-full`}
            ></div>

            <p className="text-[0.8rem] m-1">{item.current}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-20 text-center text-[1rem]  cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
        onClick={() => dispatch(setLacesStyleState(false))}
      >
        <hr className="my-2 text-gray-400  " />
        <p>Back</p>
      </div>
    </div>
  );
};

export default Laces;
