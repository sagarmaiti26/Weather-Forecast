import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
export default function Weather() {
  let [weather, setWeather] = useState({
    city: "Kolkata",
    temp: 25.6,
    maxTemp: 29.3,
    minTemp: 23.4,
    humidity: 50,
    feelsLike: 27,
    weather: "Sunny",
  });

  function updateWeather(newInfo) {
    setWeather(newInfo);
  } 
  return (
    <>
      <SearchBox updateInfo={updateWeather}></SearchBox>
      <InfoBox info={weather}></InfoBox>
    </>
  );
}
