import { createContext, useContext, useState } from "react";

const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [designState, setDesignState] = useState(true);
  const [medallionState, setMedallionState] = useState(false);
  const [leatherSoleState, setLeatherSoleState] = useState(true);
  const [trackingEvaSoleState, setTrackingEvaSoleState] = useState(false);
  const [rubberSoleState, setRubberSoleState] = useState(false);

  return (
    <DesignContext.Provider
      value={{
        designState,
        setDesignState,
        medallionState,
        setMedallionState,
        leatherSoleState,
        setLeatherSoleState,
        trackingEvaSoleState,
        setTrackingEvaSoleState,
        rubberSoleState,
        setRubberSoleState,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = () => useContext(DesignContext);
