"use client";
import { useState } from "react";
import defaultDragons from "../lib/dragons.js";
import Divider from "@/components/Divider.jsx";

export default function Home() {
  const [dragons, setDragons] = useState(defaultDragons);

  return (
    <main>
      <h1>Dragons</h1>
      {dragons.map((dragon) => {
        return (
          <div key={dragon.id}>
            <div className="dragon-container">
              <p>{dragon.id}</p>
              <h2>{dragon.name}</h2>
              <p>{dragon.emoji}</p>
              <p>{dragon.species}</p>
              <p>{dragon.color}</p>
            </div>
            <Divider />
          </div>
        );
      })}
    </main>
  );
}
