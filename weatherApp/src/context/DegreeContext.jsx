import { createContext, useContext, useState, useEffect } from "react";

const DegreeContext = createContext();

export const DegreeProvider = ({ children }) => {
  const [degree, setDegree] = useState(localStorage.getItem("degree") || "C"); // Default theme is light

  const toggleDegree = () => {
    setDegree((prevDegree) => (prevDegree === "C" ? "F" : "C"));
  };

  useEffect(()=>{
    localStorage.setItem("degree", degree);
  },[degree])

  return (
    <DegreeContext.Provider value={{ degree, toggleDegree }}>
      {children}
    </DegreeContext.Provider>
  );
};

export const useDegree = () => {
  const context = useContext(DegreeContext);
  if (context === undefined) {
    throw new Error("UseDegree must be used within a DegreeProvider");
  }
  return context;
};
