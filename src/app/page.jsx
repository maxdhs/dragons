"use client";
import NewDragon from "@/components/NewDragon.jsx";
import { useState } from "react";

export default function Home() {
  const [dragons, setDragons] = useState([
    {
      id: 1,
      emoji: "🐉",
      name: "Draco",
    },
    {
      id: 2,
      emoji: "🐲",
      name: "Saphira",
    },
    {
      id: 3,
      emoji: "🐊",
      name: "Fang",
    },
  ]);

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
            </div>
          );
        })}
      </div>
      <NewDragon setDragons={setDragons} dragons={dragons} />
    </main>
  );
}
