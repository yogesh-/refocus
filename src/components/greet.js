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
    console.log(windowTime);
    if (windowTime < 12) {
      setGreet("Good Morning");
    } else if (17 > windowTime > 12) {
      setGreet("Good Afternoon");
    } else if (windowTime > 17 && windowTime < 23) {
      setGreet("Good Evening");
    } else {
      setGreet("Hello Night Owl");
    }
  }, []);

  return (
    <h1>
      {greet},{username}
    </h1>
  );
};
