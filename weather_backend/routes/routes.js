import { getWeatherData } from "../modules/getWeatherData.js";
export const handleRoutes = (request) => {
    try {
        const result = getWeatherData(request.url);
        if (result) {
            return JSON.stringify({
                data: result,
                message: "Weather Data",
                success: true
            });
        }
        else {
            throw new Error('Data not found!')
        }
    } catch (error) {
        console.log(error);
    }
}