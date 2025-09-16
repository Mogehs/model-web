import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // Track loading progress

  return (
    <Html center>
      <div className="loader-container">
        <div className="spinner"></div>
        <p className="loading-text font-gt">{Math.round(progress)}% Loaded</p>
      </div>
    </Html>
  );
};

export default Loader;
