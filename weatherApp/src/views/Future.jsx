import { useState } from "react";
import { useLocation } from "../context/LocationContext";
import WeatherFuture from "../components/WeatherFuture";

const Future = () => {
    const { location, changeLocation } = useLocation();
    const [inputLocation, setInputLocation] = useState(location);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        changeLocation(inputLocation);
    
    
  
      
    };
  return (
    <div className="home">
      <h1>Future weather</h1>
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
      <WeatherFuture />
    </div>
  );
};

export default Future;
