import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { getAllPlayers } from "./services/playerServices";
import { IPlayer } from "./models/IPlayer";
import PlayerCard from "./components/PlayerCard";
import PresentCards from "./components/PresentCards";

function App() {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  useEffect(() => {
    getAllPlayers().then((players) => {
      setPlayers(players);
      console.log(players);
    });
  }, []);

  return (
    <>
      <PresentCards></PresentCards>
      {/* {players.map((player) => (
        <div key={player._id}>
          <PlayerCard {...player}></PlayerCard>
        </div>
      ))} */}
    </>
  );
}

export default App;
