import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "../context/LocationContext";
import ToggleDegree from "./ToggleDegree";

const NavBar = () => {
  const { location, changeLocation } = useLocation();
  const [searchLocation, setSearchLocation] = useState(location);

  const handleSubmit = (event) => {
    event.preventDefault();
    changeLocation(searchLocation);
  };

  return (
    <nav className="navbar">
      <NavLink to="/">Now</NavLink>

      <NavLink to="/future"> Future</NavLink>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="location-search">Location</label>
        <input
          id="location-search"
          value={searchLocation}
          onChange={(event) => setSearchLocation(event.target.value)}
          placeholder="Search a city"
        />
        <button type="submit">Search</button>
      </form> */}
      <ToggleDegree />
    </nav>
  );
};

export default NavBar;