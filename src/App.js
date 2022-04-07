import "./App.css";
import React, { useEffect, useState } from "react";
import { GetWindowDims } from "./getDims";

function App() {
  const [finalUrl, setImgUrl] = useState();
  const [time, setTime] = useState(new Date().toLocaleString());
  const window = GetWindowDims();
  console.log(window.width, "from Get windim", window.height);

  const Time = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let currTime = hours + ":" + minutes + " " + ampm;
    console.log(currTime, "from current time");
    return hours + ":" + minutes + " " + ampm;
  };

  useEffect(() => {
    let imgUrl = "https://picsum.photos/" + window.width + "/" + window.height;
    setImgUrl(imgUrl);
    let secTimer = setInterval(() => {
      setTime(Time);
    }, 1000);

    return () => clearInterval(secTimer);
  }, [window.height, window.width]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${finalUrl})`,
      }}
    >
      <p className="time">{time}</p>
    </div>
  );
}

export default App;
