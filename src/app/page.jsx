"use client";
import { useState } from "react";
import defaultDragons from "../lib/dragons.js";

export default function Home() {
  const [dragons, setDragons] = useState(defaultDragons);

  return (
    <main>
      <h1>Dragons</h1>
      <div id="dragons-container">
        {dragons.map((dragon) => {
          return (
            <div key={dragon.id} className="dragon-container">
              <p>{dragon.id}</p>
              <h2>{dragon.name}</h2>
              <p>{dragon.emoji}</p>
              <p>{dragon.species}</p>
              <p>{dragon.color}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
