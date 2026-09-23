import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "New York"
  );

  const changeLocation = (nextLocation) => {
    const trimmedLocation = nextLocation.trim();
    if (trimmedLocation) {
      setLocation(trimmedLocation);
    }
  };

  useEffect(() => {
    localStorage.setItem("location", location);
  }, [location]);

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(DegreeContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
