import { useLocation } from "../context/LocationContext";
import useFetch from "../hooks/useFetch";
import WeatherCard from "./WeatherCard";

const WeatherToday = () => {
  const { location } = useLocation();
  const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    location
  )}&count=1&language=en&format=json`;
  const { data: places, isLoading: isGeocoding, error: geocodingError } =
    useFetch(geocodingUrl);
  const place = places?.results?.[0];
  const forecastUrl = place
    ? `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh`
    : null;
  const { data, isLoading, error } = useFetch(forecastUrl);

  if (isGeocoding || isLoading) return <div>Loading...</div>;
  if (geocodingError || error || !place) {
    return <div><p>Location not found</p></div>;
  }

  return (
    <div className="weather-data">
      <WeatherCard data={data} location={place.name} />
    </div>
  );
};

export default WeatherToday;