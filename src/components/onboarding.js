import { useState } from "react";

export const UserOnboard = () => {
  const [name, setName] = useState("");

  const saveName = (e) => {
    if (e.key === "Enter" || name !== "") {
      localStorage.setItem("username", name);
    }
  };
  return (
    <div className="onboard">
      <h1 className="font-color-default">What is your name ?</h1>
      <input
        className="user-focus-input"
        type="text"
        placeholder="John Doe"
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyUp={(e) => {
          saveName(e);
        }}
      ></input>
      {name.length > 0 ? (
        <button
          className="proceed-button"
          onClick={() => window.location.reload()}
        >
          Proceed
        </button>
      ) : null}
    </div>
  );
};
