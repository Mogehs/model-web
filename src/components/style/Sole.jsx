import { useDispatch, useSelector } from "react-redux";
import { setSoleState } from "../../redux/features/designSlice";
import { setSoleStyleState } from "../../redux/features/styleSlice";

const Sole = () => {
  const sole = useSelector((state) => state.style.soleStyleState);
  const dispatch = useDispatch();
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
                dispatch(setSoleState("rubber"));
              } else if (item.current === "tracker - eva") {
                dispatch(setSoleState("trackingEva"));
              } else if (item.current === "leather - black") {
                dispatch(setSoleState("leatherBlack"));
              } else if (item.current === "leather - mid") {
                dispatch(setSoleState("leatherMid"));
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
        onClick={() => dispatch(setSoleStyleState(false))}
      >
        <hr className="my-2 text-gray-400  " />
        <p>Back</p>
      </div>
    </div>
  );
};

export default Sole;
