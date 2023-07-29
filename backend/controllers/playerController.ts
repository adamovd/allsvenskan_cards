const Player = require("../models/Player");

export const getAllPlayers = async (
  req: any,
  res: {
    json: (arg0: { data: any }) => any;
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
    };
  }
) => {
  try {
    const players = await Player.find();
    console.log(players);
    return res.json({
      data: players,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error",
    });
  }
};
