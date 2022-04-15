import { useState, useEffect } from "react";

export const Greet = () => {
  const username = localStorage.getItem("username");
  const [greet, setGreet] = useState("");
  useEffect(() => {
    var time = new Date();
    var windowTime = time.toLocaleString([], {
      hour: "numeric",
      hour12: false,
    });
    console.log(windowTime, "window time fetched from api");
    if (windowTime < 12 && windowTime > 6) {
      setGreet("Good Morning");
    } else if (windowTime >= 12 && windowTime < 17) {
      setGreet("Good Afternoon");
    } else if (windowTime >= 17 && windowTime < 23) {
      setGreet("Good Evening");
    } else {
      setGreet("Hello Night Owl");
    }
  }, []);

  return (
    <h1 className="font-color-default">
      {greet},{username}
    </h1>
  );
};
