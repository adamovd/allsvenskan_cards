import React from "react";
import { IPlayer } from "../models/IPlayer";
import PlayerName from "./styled/PlayerName";
import PlayerImage from "./styled/PlayerImage";
import {
  BottomContainer,
  CardContainer,
  InfoContainer,
} from "./styled/Containers";
import PlayerFlag from "./styled/PlayerFlag";
import { NameTile, RainbowTile } from "./styled/Tiles";

const PlayerCard = ({ imgURL, name, club, nationality }: IPlayer) => {
  return (
    <CardContainer>
      <PlayerImage backgroundImage={imgURL}>
        <BottomContainer>
          <PlayerFlag src={nationality} alt="Flagga" />
          <InfoContainer>
            <NameTile>
              <PlayerName>{name}</PlayerName>
            </NameTile>
            <RainbowTile>
              <p>{club}</p>
            </RainbowTile>
          </InfoContainer>
        </BottomContainer>
      </PlayerImage>
    </CardContainer>
  );
};

export default PlayerCard;
