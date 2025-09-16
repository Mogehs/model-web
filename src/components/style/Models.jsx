import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModelStyleState } from "../../redux/features/styleSlice";
import { setSelectedModel } from "../../redux/features/modelSlice";

const Models = () => {
  const model = useSelector((state) => state.style.modelStyleState);
  const dispatch = useDispatch();
  return (
    <div
      className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
          transition-transform duration-[2000] ease-in-out z-20
          ${model ? "inline" : "hidden"}`}
    >
      <h1 className="mx-auto w-full text-center leading-none uppercase sticky top-0  bg-white p-4">
        Model
      </h1>
      <div className="flex flex-col items-center gap-15 mt-5 h-fit">
        {[
          {
            label: "goma2",
            current: "oxford",
            img: "/model-models/oxford.jpg",
          },
          {
            label: "cuero2",
            current: "derby",
            img: "/model-models/derby.jpg",
          },
          {
            label: "cuero_medio2",
            current: "monk",
            img: "/model-models/monk.jpg",
          },
          {
            label: "track2",
            current: "loafers",
            img: "/model-models/loafers.jpg",
          },
          {
            label: "track2",
            current: "dress boots",
            img: "/model-models/dress-boots.jpg",
          },
          {
            label: "track2",
            current: "chukka boots",
            img: "/model-models/chukka-boots.jpg",
          },
          {
            label: "track2",
            current: "chelsea boots",
            img: "/model-models/chelsea-boots.jpg",
          },
        ].map((item) => (
          <div
            className="flex flex-col items-center uppercase cursor-pointer"
            onClick={() => {
              dispatch(setSelectedModel(item.current));
            }}
          >
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
        onClick={() => dispatch(setModelStyleState(false))}
      >
        <hr className="my-2 text-gray-400  " />
        <p>Back</p>
      </div>
    </div>
  );
};

export default Models;
