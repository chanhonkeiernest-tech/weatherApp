
import cloudImage from "../assets/cloud.png";
import rainImage from "../assets/rain.png";
import snowduststormImage from "../assets/snoworduststorm.png";
import fogImage from "../assets/fog.png";
import snowImage from "../assets/snowing.png";
import stormImage from "../assets/thunderstorm.png";
import clearImage from "../assets/clear.png";
import unknownImage from "../assets/unknown.png";

const WeatherVisual = ({ code }) => {
    let img = unknownImage;
    let display = "unknown";

    if (code >= 1 && code < 20) {
        img = cloudImage;
        display = "cloudy";
    } else if (code >= 20 && code < 30) {
        img = rainImage;
        display = "shower";
    }else if (code >= 30 && code < 40) {
        img = snowduststormImage;
        display = "sandstorm/ snowstorm";
    }else if (code >= 40 && code < 50) {
        img = fogImage;
        display = "fog";
    }
    else if (code >= 50 && code < 60) {
        img = rainImage;
        display = "drizzle";
    }else if (code >= 60 && code < 70) {
        img = rainImage;
        display = "drizzle";
    }else if (code >= 70 && code < 80) {
        img = snowImage;
        display = "snow";
    }else if (code >= 90 && code < 100) {
        img = stormImage;
        display = "strom";
    }else if(code===0){
        img = clearImage;
        display = "clear sky";
    }

    return (
        <div className="display">
            <img src={img} alt={display} />
            <h1>{display}</h1>
        </div>
    );
};

export default WeatherVisual;