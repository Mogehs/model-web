import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllPiecesMaterialState } from "../../redux/features/styleSlice";
import {
  setMaterialColor,
  setQuarterColor,
  setVampColor,
  setToeCapColor,
  setFacingColor,
  setHeelCapColor,
  setToungueColor,
} from "../../redux/features/designSlice";

const AllPieces = () => {
  const allPieces = useSelector((state) => state.style.allPiecesMaterialState);
  const materialType = useSelector((state) => state.style.materialType);
  const dispatch = useDispatch();

  return (
    <div
      className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
        transition-transform duration-[2000] ease-in-out z-20
        ${allPieces ? "inline" : "hidden"}`}
    >
      <h1 className="mx-auto w-full text-center leading-none uppercase sticky top-0  bg-white p-4">
        {materialType}
      </h1>
      <div className="h-fit">
        <p className="text-center mt-5 text-[1.1rem] font-bold uppercase">
          Italian Calf Leather
        </p>
        <p className="text-center text-gray-500">Softness And Comfort</p>
        <div className="grid grid-cols-2 items-center gap-x-0 gap-y-10 mt-10">
          {[
            {
              color: "#BEBFC2",
              current: "roberto",
              img: "/materials/calf-leather/roberto.jpg",
            },
            {
              color: "#803E10",
              current: "febio",
              img: "/materials/calf-leather/fabio.jpg",
            },
            {
              color: "#51260F",
              current: "giovanni",
              img: "/materials/calf-leather/gio.jpg",
            },
            {
              color: "#3C1E12",
              current: "carlo",
              img: "/materials/calf-leather/carlo.jpg",
            },
            {
              color: "#422418",
              current: "paolo",
              img: "/materials/calf-leather/paolo.jpg",
            },
            {
              color: "#3F454F",
              current: "andrea",
              img: "/materials/calf-leather/andrea.jpg",
            },
            {
              color: "#282828",
              current: "alessio",
              img: "/materials/calf-leather/alessio.jpg",
            },
          ].map((item) => (
            <div
              key={item.current}
              className="flex flex-col items-center uppercase cursor-pointer"
              onClick={() => {
                switch (materialType) {
                  case "quarter":
                    dispatch(setQuarterColor(item.color));
                    break;
                  case "vamp":
                    dispatch(setVampColor(item.color));
                    break;
                  case "toe cap":
                    dispatch(setToeCapColor(item.color));
                    break;
                  case "facing":
                    dispatch(setFacingColor(item.color));
                    break;
                  case "heel cap":
                    dispatch(setHeelCapColor(item.color));
                    break;
                  case "tongue":
                    dispatch(setToungueColor(item.color));
                    break;
                  case "all pieces":
                  default:
                    dispatch(setMaterialColor(item.color));
                }
              }}
            >
              <div className="w-16 h-16 rounded-full">
                <img
                  src={item.img}
                  alt={item.current}
                  className="w-full h-full rounded-full"
                />
              </div>
              <p className="text-[0.8rem] m-1">{item.current}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-20 text-center text-[1rem] cursor-pointer bg-white sticky bottom-0 w-full h-[4rem]"
        onClick={() => dispatch(setAllPiecesMaterialState(false))}
      >
        <hr className="my-2 text-gray-400" />
        <p>Back</p>
      </div>
    </div>
  );
};

export default AllPieces;
