import { atom } from "recoil";

interface PlayerScores {
  [player: string]: {
    name: string;
    totalShots: number[];
    successfulShots: number[];
    rebounds: number;
    turnovers: number;
  };
}

export const playerScoresState = atom<PlayerScores>({
  key: "playerScoresState",
  default: {
    player1: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player2: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player3: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player4: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player5: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player6: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player7: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player8: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player9: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player10: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player11: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player12: {
      name: "",
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
  },
});
