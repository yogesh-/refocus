import "../App.css";
import { useState } from "react";

const Note = () => {
  const [display, setdisplay] = useState(false);
  const [note, setNote] = useState();
  const [notesArray, setnotesArray] = useState([]);
  const clickHandler = (e) => {
    if (display !== true) {
      setdisplay(true);
    } else {
      setdisplay(false);
    }
  };

  const noteAdd = (e) => {
    setNote("");
    setnotesArray([...notesArray, note]);
  };

  return (
    <>
      {" "}
      <button className="todo-btn" onClick={(e) => clickHandler(e)}>
        ToDo
      </button>
      {display ? (
        <div className="notes-bg">
          <p>My Todo's</p>
          {notesArray.map((item, index) => (
            <li key={index}>
              <input type="checkbox" id="cbox" />
              <label for="cbox">{item}</label>
            </li>
          ))}

          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></input>
          <button onClick={(e) => noteAdd(e)}>Add ToDo</button>
        </div>
      ) : null}
    </>
  );
};

export default Note;
