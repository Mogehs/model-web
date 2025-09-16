import { useDispatch, useSelector } from "react-redux";
import { setToeCapStyleState } from "../../redux/features/styleSlice";
import { setSelectedStyle } from "../../redux/features/modelSlice";

const ToeCap = () => {
  const toeCap = useSelector((state) => state.style.toeCapStyleState);
  const dispatch = useDispatch();
  return (
    <div
      className={`sm:w-[25%] font-gt text-[0.8rem] absolute bg-white h-screen overflow-y-auto top-0 right-0
      transition-transform duration-[2000] ease-in-out z-10
      ${toeCap ? "inline" : "hidden"}`}
    >
      <h1 className="mx-auto w-50 py-5 text-center leading-none uppercase sticky top-0 bg-white pt-6">
        Toe Cap
      </h1>
      <div className="flex flex-col items-center gap-20 mt-10 h-fit">
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
          <div
            className="flex flex-col items-center uppercase cursor-pointer"
            onClick={() => {
              dispatch(setSelectedStyle(item.current));
              dispatch(setToeCapStyleState(false));
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
        onClick={() => dispatch(setToeCapStyleState(false))}
      >
        <hr className="my-2 text-gray-400 sticky bottom-0" />
        <p>Back</p>
      </div>
    </div>
  );
};

export default ToeCap;
