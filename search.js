let mainTemp = document.getElementById('main-temp');
let mainWind = document.getElementById('main-wind');
let mainHumid = document.getElementById('main-humid');
let mainUv = document.getElementById('main-uv');
let mainTitle = document.getElementById('main-title');
let weatherIcon = document.getElementById('weather-icon');
let todaysDate = moment().format("L");
let forecast = document.getElementById('forecast');
let dateOne = document.getElementById('date-1');
let dateTwo = document.getElementById('date-2');
let dateThree = document.getElementById('date-3');
let dateFour = document.getElementById('date-4');
let dateFive = document.getElementById('date-5');
let tempOne = document.getElementById('temp-1');
let tempTwo = document.getElementById('temp-2');
let tempThree = document.getElementById('temp-3');
let tempFour = document.getElementById('temp-4');
let tempFive = document.getElementById('temp-5');
let windOne = document.getElementById('wind-1');
let windTwo = document.getElementById('wind-2');
let windThree = document.getElementById('wind-3');
let windFour = document.getElementById('wind-4');
let windFive = document.getElementById('wind-5');
let humidOne = document.getElementById('humid-1');
let humidTwo = document.getElementById('humid-2');
let humidThree = document.getElementById('humid-3');
let humidFour = document.getElementById('humid-4');
let humidFive = document.getElementById('humid-5');
let searchHistory = document.getElementById('search-history');
let searchArray = []


function searchApi() {
    let citySearched = document.location.search.split('=').pop();
    let geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearched + "&limit=1&appid=9c49129f45a3a74be952dae9271292a8"
    fetch(geoUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            let searchUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + response[0].lat + "&lon=" + response[0].lon + "&units=imperial&appid=9c49129f45a3a74be952dae9271292a8"
            fetch(searchUrl)
                .then(response2 => response2.json())
                .then(response2 => {
                    console.log(response2)
                    mainTitle.textContent = response[0].name + ` (${todaysDate})`;
                    weatherIcon.src = "http://openweathermap.org/img/wn/" + response2.current.weather[0].icon + ".png"
                    mainTemp.textContent = "Current Temp: " + response2.current.temp + "°";
                    mainWind.textContent = "Wind Speed: " + response2.current.wind_speed + "mph";
                    mainHumid.textContent = "Humidity: " + response2.current.humidity + "%";
                    let Uvi = response2.current.uvi;
                    mainUv.textContent = "UV Index: " + Uvi;
                    if (Uvi < 3) {
                        mainUv.classList.add("favorable")
                    } else if (Uvi > 2 && Uvi < 6) {
                        mainUv.classList.add("moderate")
                    } else { mainUv.classList.add("severe") }

                    dateOne.textContent = moment().add(1, "days").format("L");
                    tempOne.textContent = "Temp: " + response2.daily[0].temp.day + "°";
                    windOne.textContent = "Wind Speed: " + response2.daily[0].wind_speed + "mph";
                    humidOne.textContent = "Humidity: " + response2.daily[0].humidity + "%"
                    document.getElementById('img-1').src = "http://openweathermap.org/img/wn/" + response2.daily[0].weather[0].icon + ".png";

                    dateTwo.textContent = moment().add(2, "days").format("L");
                    tempTwo.textContent = "Temp: " + response2.daily[1].temp.day + "°";
                    windTwo.textContent = "Wind Speed: " + response2.daily[1].wind_speed + "mph";
                    humidTwo.textContent = "Humidity: " + response2.daily[1].humidity + "%";
                    document.getElementById('img-2').src = "http://openweathermap.org/img/wn/" + response2.daily[1].weather[0].icon + ".png";

                    dateThree.textContent = moment().add(3, "days").format("L");
                    tempThree.textContent = "Temp: " + response2.daily[2].temp.day + "°";
                    windThree.textContent = "Wind Speed: " + response2.daily[2].wind_speed + "mph";
                    humidThree.textContent = "Humidity: " + response2.daily[2].humidity + "%";
                    document.getElementById('img-3').src = "http://openweathermap.org/img/wn/" + response2.daily[2].weather[0].icon + ".png";

                    dateFour.textContent = moment().add(4, "days").format("L");
                    tempFour.textContent = "Temp: " + response2.daily[3].temp.day + "°";
                    windFour.textContent = "Wind Speed: " + response2.daily[3].wind_speed + "mph";
                    humidFour.textContent = "Humidity: " + response2.daily[3].humidity + "%";
                    document.getElementById('img-4').src = "http://openweathermap.org/img/wn/" + response2.daily[3].weather[0].icon + ".png";

                    dateFive.textContent = moment().add(5, "days").format("L");
                    tempFive.textContent = "Temp: " + response2.daily[4].temp.day + "°";
                    windFive.textContent = "Wind Speed: " + response2.daily[4].wind_speed + "mph";
                    humidFive.textContent = "Humidity: " + response2.daily[4].humidity + "%";
                    document.getElementById('img-5').src = "http://openweathermap.org/img/wn/" + response2.daily[4].weather[0].icon + ".png";

                    localStorage.setItem("search-history", citySearched);
                    let itemSearched = localStorage.getItem("search-history");
                    searchArray.push(itemSearched);
                    searchHistory.append(searchArray)
                    console.log(searchArray)
                })
        })
        .catch(err => console.error(err))

}



searchApi()