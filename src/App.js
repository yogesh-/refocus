import "./App.css";
import React, { useEffect, useState } from "react";
import { GetWindowDims } from "./utilities/getDims";
import { Weather } from "./utilities/weather";
import { Greet } from "./utilities/greet";

function App() {
  const [mycity, setMyCity] = useState("");
  const [icon, setWeatherIcon] = useState("");
  const [temp, setTemperature] = useState("");
  const [imgAlt, setImgAlt] = useState("weather icon");
  const [finalUrl, setImgUrl] = useState();
  const [time, setTime] = useState();
  const window = GetWindowDims();
  const weatherNow = Weather();

  useEffect(() => {
    let lat = weatherNow.latitude;
    let long = weatherNow.longitude;
    let api_key = "2fb7d0da584a3542e607fbb629f81fea";
    const URL =
      "https://api.openweathermap.org/data/2.5/weather?" +
      "lat=" +
      lat +
      "&lon=" +
      long +
      "&appid=" +
      api_key;
    console.log("weather URL---------->", URL);

    (async () => {
      const response = await fetch(URL);
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok)
        throw new Error(
          `Error message from server ${statusCode} ${statusMessage}`
        );
      setWeatherIcon(
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
      setImgAlt(data.weather[0].description);
      setTemperature(Math.round(data.main.temp - 273) + "°C");
      setMyCity(data.name);
      console.log(mycity, temp, "from API call", icon, imgAlt);
    })();

    // image

    let imgUrl = "https://picsum.photos/" + window.width + "/" + window.height;
    setImgUrl(imgUrl);

    //time
    let secTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { timeStyle: "short" }));
    }, 1000);
    console.log("this is the time object", time);
    return () => clearInterval(secTimer);
  }, [
    window.width,
    window.height,
    weatherNow.latitude,
    weatherNow.longitude,
    mycity,
    temp,
    imgAlt,
    icon,
    time,
  ]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${finalUrl})`,
      }}
    >
      <p className="time">{time}</p>
      <p>
        {mycity}
        {"  "}
        {temp}
      </p>
      <Greet />
    </div>
  );
}

export default App;
