import "../App.css";
import { useState } from "react";

const Note = () => {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState();
  const [notesArray, setnotesArray] = useState([]);
  const clickHandler = (e) => {
    if (show !== true) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const noteAdd = (e) => {
    setNote("");
    setnotesArray([...notesArray, note]);
  };

  return (
    <>
      {" "}
      <button onClick={(e) => clickHandler(e)}>ToDo</button>
      {show ? (
        <div className="notes-bg">
          <p>My Todo's</p>
          {notesArray.map((item) => (
            <li>
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
