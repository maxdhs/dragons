// i just want a react component that returns an div with the text new dragon
"use client";
import { useState } from "react";

export default function NewDragon({ setDragons, dragons }) {
  // we need to create some state to store what the users typing in for name
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // how do we update state with our new object?
    const newDragon = {
      id: dragons.length + 1,
      name,
      emoji,
    };
    setDragons([...dragons, newDragon]);
  }

  return (
    <div>
      <h2>Add a new dragon:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name.."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          onChange={(e) => setEmoji(e.target.value)}
          value={emoji}
          type="text"
          placeholder="Enter emoji.."
        />
        <button>Add Dragon</button>
      </form>
    </div>
  );
}
