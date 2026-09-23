import { useDegree } from "../context/DegreeContext";

const WeatherCard = ({ data, location }) => {
    const { degree } = useDegree();
    const temperature = data?.current?.temperature_2m;

    return (
        <div className="weather-card">
            <h2>{location}</h2>
            <p>{temperature} {degree === "C" ? "°C" : "°F"}</p>
            <p>Humidity: {data.current.relative_humidity_2m}%</p>
            <p>Wind: {data.current.wind_speed_10m} km/h</p>
        </div>
    );

};
export default WeatherCard;