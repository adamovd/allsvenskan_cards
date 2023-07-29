import axios from "axios";
import { IPlayer } from "../models/IPlayer";
import { IPlayerResponse } from "../utils/IPlayerResponse";

export const getAllPlayers = async (): Promise<IPlayer[]> => {
  const response = await axios.get<IPlayerResponse>(
    "http://localhost:4000/api/v1/players"
  );
  return response.data.data;
};
