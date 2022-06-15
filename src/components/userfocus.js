import "../App.css";
import { useState } from "react";
import { wishdb } from "../data/wishDb";

export const UserFocus = () => {
  const [input, setInput] = useState("");
  const [wish, setWish] = useState("");

  const userfocus = localStorage.getItem("user-focus");

  const handleChecked = (e) => {
    const randomNumber = Math.floor(Math.random() * 5);
    const wishQuote = wishdb[randomNumber];

    const abc = e.target.checked;
    console.log(abc);
    if (abc === true) {
      setWish(wishQuote);
    } else {
      setWish("");
    }
  };

  const handleClick = () => {
    if (input !== "") {
      localStorage.setItem("user-focus", input);
    } else {
      console.log("null value in input");
    }
  };
  return (
    <>
      {userfocus === null ? (
        <>
          <h1 className="font-color-default">
            What is your main focus for today ?{" "}
          </h1>

          <input
            className="user-focus-input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={handleClick}>Submit</button>
        </>
      ) : (
        <>
          <input type="checkbox" id="cbox" onChange={(e) => handleChecked(e)} />
          <label htmlFor="cbox" className="font-color-default">
            {userfocus}
          </label>
          <p className="font-color-default">{wish}</p>
        </>
      )}
    </>
  );
};
