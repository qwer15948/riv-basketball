import { atom } from "recoil";

interface PlayerScores {
  [player: string]: {
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
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player2: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player3: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player4: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player5: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player6: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player7: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player8: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player9: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player10: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player11: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
    player12: {
      totalShots: [0, 0, 0],
      successfulShots: [0, 0, 0],
      rebounds: 0,
      turnovers: 0,
    },
  },
});
