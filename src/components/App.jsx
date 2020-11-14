import React, { useState } from "react";

export default function App() {
  let [item, updateItem] = useState("");
  let [items, updateItems] = useState([]);

  function addItem() {
    updateItems(prevValue => {
      return [...prevValue, item];
    });
    updateItem("");
  }

  function update(event) {
    const { value } = event.target;
    updateItem(value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={update} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map(newItem => (
            <li key={newItem}>{newItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}