import { useDispatch, useSelector } from "react-redux";
import {
  setDesignState,
  setMedallionState,
} from "../../redux/features/designSlice";
import { setMedallionStyleState } from "../../redux/features/styleSlice";

const Medallion = () => {
  const dispatch = useDispatch();
  const medallion = useSelector((state) => state.style.medallionStyleState);
  return (
    <div
      className={`sm:w-[25%]  font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
      transition-transform duration-[2000] ease-in-out z-10
      ${medallion ? "inline" : "hidden"}`}
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
        onClick={() => dispatch(setMedallionStyleState(false))}
      >
        <hr className="my-2 text-gray-400" />
        <p>Back</p>
      </div>
    </div>
  );
};

export default Medallion;
