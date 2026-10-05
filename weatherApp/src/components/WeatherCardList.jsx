import { useDegree } from "../context/DegreeContext";
import WeatherVisual from "./WeatherVisual";

const WeatherCardList = ({ data, location }) => {
  const { degree } = useDegree();
  const date = data?.daily?.time ?? [];
  console.log(data?.daily);
  const weather_code = data?.daily?.weather_code ?? [];
  const temperature_2m_max = data?.daily?.temperature_2m_max ?? [];
  const relative_humidity_2m_mean = data?.daily?.relative_humidity_2m_mean ?? [];
  const wind_speed_10m_mean = data?.daily?.wind_speed_10m_mean ?? [];
  let day1 = [date[0], weather_code[0], temperature_2m_max[0], relative_humidity_2m_mean[0], wind_speed_10m_mean[0]];
  let day2 = [date[1], weather_code[1], temperature_2m_max[1], relative_humidity_2m_mean[1], wind_speed_10m_mean[1]];
  let day3 = [date[2], weather_code[2], temperature_2m_max[2], relative_humidity_2m_mean[2], wind_speed_10m_mean[2]];
  let day4 = [date[3], weather_code[3], temperature_2m_max[3], relative_humidity_2m_mean[3], wind_speed_10m_mean[3]];
  let day5 = [date[4], weather_code[4], temperature_2m_max[4], relative_humidity_2m_mean[4], wind_speed_10m_mean[4]];
  let day6 = [date[5], weather_code[5], temperature_2m_max[5], relative_humidity_2m_mean[5], wind_speed_10m_mean[5]];
  let day7 = [date[6], weather_code[6], temperature_2m_max[6], relative_humidity_2m_mean[6], wind_speed_10m_mean[6]];
  
  
  return (
    <div className="weather-area">
      <h2>{location}</h2>
      <div className="weather-cards">
        <h1>{day1[0]}</h1>
        <WeatherVisual code={day1[1]}/> 
        <p>
          {day1[2] ?? "N/A"} {degree === "C" ? "°C" : "°F"}
        </p>
        <p>Humidity: {day1[3] ?? "N/A"}%</p>
        <p>Wind: {day1[4] ?? "N/A"} km/h</p>
      </div>

      <div className="weather-cards">
        <h1>{day2[0]}</h1>
        <WeatherVisual code={day2[1]}/> 
        <p>
          {day2[2] ?? "N/A"} {degree === "C" ? "°C" : "°F"}
        </p>
        <p>Humidity: {day2[3] ?? "N/A"}%</p>
        <p>Wind: {day2[4] ?? "N/A"} km/h</p>
      </div>

      <div className="weather-cards">
        <h1>{day3[0]}</h1>
        <WeatherVisual code={day3[1]}/> 
        <p>
          {day3[2] ?? "N/A"} {degree === "C" ? "°C" : "°F"}
        </p>
        <p>Humidity: {day3[3] ?? "N/A"}%</p>
        <p>Wind: {day3[4] ?? "N/A"} km/h</p>
      </div>

      <div className="weather-cards">
        <h1>{day4[0]}</h1>
        <WeatherVisual code={day4[1]}/> 
        <p>
          {day4[2] ?? "N/A"} {degree === "C" ? "°C" : "°F"}
        </p>
        <p>Humidity: {day4[3] ?? "N/A"}%</p>
        <p>Wind: {day4[4] ?? "N/A"} km/h</p>
      </div>

      <div className="weather-cards">
        <h1>{day5[0]}</h1>
        <WeatherVisual code={day5[1]}/> 
        <p>
          {day5[2] ?? "N/A"} {degree === "C" ? "°C" : "°F"}
        </p>
        <p>Humidity: {day5[3] ?? "N/A"}%</p>
        <p>Wind: {day5[4] ?? "N/A"} km/h</p>
      </div>

      <div className="weather-cards">
        <h1>{day6[0]}</h1>
        <WeatherVisual code={day6[1]}/> 
        <p>
          {day6[2] ?? "N/A"} {degree === "C" ? "°C" : "°F"}
        </p>
        <p>Humidity: {day6[3] ?? "N/A"}%</p>
        <p>Wind: {day6[4] ?? "N/A"} km/h</p>
      </div>

      <div className="weather-cards">
        <h1>{day7[0]}</h1>
        <WeatherVisual code={day7[1]}/> 
        <p>
          {day7[2] ?? "N/A"} {degree === "C" ? "°C" : "°F"}
        </p>
        <p>Humidity: {day7[3] ?? "N/A"}%</p>
        <p>Wind: {day7[4] ?? "N/A"} km/h</p>
      </div>
      
      
    </div>
  );
};

export default WeatherCardList;