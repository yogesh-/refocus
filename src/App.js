import "./App.css";
import React, { useEffect, useState } from "react";
import { GetWindowDims } from "./utilities/getDims";

function App() {
  const [finalUrl, setImgUrl] = useState();
  const [time, setTime] = useState();
  const window = GetWindowDims();

  useEffect(() => {
    let imgUrl = "https://picsum.photos/" + window.width + "/" + window.height;
    setImgUrl(imgUrl);
    let secTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { timeStyle: "short" }));
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
      <p>What do you want to accomplish today.. ?</p>
    </div>
  );
}

export default App;
