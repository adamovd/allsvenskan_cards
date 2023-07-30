import React, { useState } from "react";
import { IPlayer } from "../models/IPlayer";
import PlayerCard from "./PlayerCard";

const GetCards = (cards: IPlayer) => {
  const [card, setCard] = useState<IPlayer>();
  setCard(cards[Math.floor(Math.random() * cards.length)]);

  return <PlayerCard {...card}></PlayerCard>;
};

export default GetCards;
