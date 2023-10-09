import { weatherData } from "../database/weather.js";

export const getWeatherData = (locationString) => {
    let location = locationString.split('/')[1].toLowerCase();
    if (location.includes("%")) {
        location = location.split("%20").join(" ").toLowerCase();
    }
    return weatherData.find((each) => each.name.toLowerCase() === location);
}