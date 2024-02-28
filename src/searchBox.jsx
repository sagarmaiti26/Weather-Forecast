import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "GET_YOUR_FREE_API_KEY_FROM_OpenWeatherApp";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let JsonResponse = await response.json();

      let result = {
        city: city,
        temp: JsonResponse.main.temp,
        maxTemp: JsonResponse.main.temp_max,
        minTemp: JsonResponse.main.temp_min,
        humidity: JsonResponse.main.humidity,
        feelsLike: JsonResponse.main.feels_like,
        weather: JsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };
  let handleChange =  (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <h1>Search For The Weather </h1>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          value={city}
          id="city"
          label="Enter City"
          variant="outlined"
          required
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error ? <p style={{ color: "red" }}>No Such Place Exist in API</p> : <></>}
      </form>
      <br></br>
    </>
  );
}
