const inputValue = document.getElementById("inputBox");
const placeName = document.getElementById("PlaceName");
const locationTemp = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const weatherImg = document.getElementById("weatherImage");
const weatherDescription = document.querySelector(".weather-description");

let value = "";
let response = { success: true };

weatherDescription.classList.add("hidden");

async function getData() {
    try {
        response = await fetch(`http://localhost:8900/${inputValue.value}`).then((response) => response.json());
    } catch (error) {
        response.success = false
        console.log(error);
    }
    finally {
        if (response.success === true) {
            weatherImg.classList.add("weather-img");
            weatherDescription.classList.remove("hidden");
            locationTemp.classList.remove("error-font-size");
            weatherImg.classList.remove("error-img");
            placeName.innerHTML = response.data.name;
            locationTemp.innerHTML = response.data.temp_c + "<sup>o</sup>";
            feelsLike.innerHTML = "Feels " + response.data.feelslike_f + "<sup>o</sup>";
            if (response.data.temp_c >= 40) {
                weatherImg.src = "images/sunny.png";
            } else if (response.data.temp_c >= 20) {
                weatherImg.src = "images/sun_behind.png";
            } else {
                weatherImg.src = "images/rain.png";
            }
            inputValue.value = "";
        }
        else {
            placeName.innerHTML = "";
            weatherImg.src = "images/cloud.png";
            locationTemp.innerHTML = "No Data Found";
            feelsLike.innerHTML = "";
            weatherDescription.classList.add("hidden");
            inputValue.value = "";
            locationTemp.classList.add("error-font-size");
            weatherImg.classList.add("error-img");
        }
    }
}
inputValue.addEventListener("keyup", (e) => {
    value = inputValue.value;
    if (e.key === "Enter" && inputValue.value !== "") {
        getData();
    }
});
