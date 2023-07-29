import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { getAllPlayers } from "./services/playerServices";
import { IPlayer } from "./models/IPlayer";

function App() {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  useEffect(() => {
    getAllPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);

  return (
    <>
      {players.map((player) => (
        <div key={player._id}>
          <h3>{player.name}</h3>
          <p>{player.club}</p>
          <img src={player.imgURL} alt={player.name} />
        </div>
      ))}
    </>
  );
}

export default App;
