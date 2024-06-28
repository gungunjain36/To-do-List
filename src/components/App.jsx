import React, { useState } from "react";
import "/public/styles.css";

function App() {
  const [item, setitem] = useState("");
  const [ls, setls] = useState([]);

  function handleInput(event) {
    const newItem = event.target.value;
    setitem(newItem);
  }
  function handleClick() {
    setls((prels) => {
      return [...prels, item];
    });
    setitem("");
  }
  function handleDelete() {
    setls([]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={item} />
        <br />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
        <button onClick={handleDelete}>
          <span>Delete</span>
        </button>
      </div>
      <div>
        <ul>
          {ls.map((it, index) => (
            <li key={index}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
