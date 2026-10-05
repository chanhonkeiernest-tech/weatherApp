import { useDegree } from "../context/DegreeContext";
import WeatherVisual from "./WeatherVisual";

const WeatherCard = ({ data, location }) => {
  const { degree } = useDegree();
  const current = data?.current ?? {};
  const temperature = current.temperature_2m;

  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <WeatherVisual code={current.weather_code}/> 
      <p>
        {temperature ?? "N/A"} {degree === "C" ? "°C" : "°F"}
      </p>
      <p>Humidity: {current.relative_humidity_2m ?? "N/A"}%</p>
      <p>Wind: {current.wind_speed_10m ?? "N/A"} km/h</p>
    </div>
  );
};

export default WeatherCard;