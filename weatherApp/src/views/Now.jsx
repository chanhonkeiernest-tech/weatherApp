import { useState } from "react";
import { useLocation } from "../context/LocationContext";
import WeatherToday from "../components/WeatherToday";

const Now = () => {
  const { location, changeLocation } = useLocation();
  const [inputLocation, setInputLocation] = useState(location);

  const handleSubmit = (event) => {
    event.preventDefault();
    changeLocation(inputLocation);
  };

  return (
    <div className="home">
      <h1>Today's weather</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={inputLocation}
          onChange={(event) => setInputLocation(event.target.value)}
          placeholder="Enter a city"
        />
        <button type="submit">Update location</button>
      </form>
      <WeatherToday />
    </div>
  );
};

export default Now;