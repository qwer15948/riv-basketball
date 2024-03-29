import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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
  effects_UNSTABLE: [persistAtom],
});

export const myScoreState = atom<number>({
  key: "myScoreState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const rivalScoreState = atom<number>({
  key: "rivalScoreState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const foulsState = atom<number[]>({
  key: "foulsState",
  default: [...Array(12)].map(() => 0),
  effects_UNSTABLE: [persistAtom],
});

export const rivalFoulsState = atom<number[]>({
  key: "rivalFoulsState",
  default: [...Array(12)].map(() => 0),
  effects_UNSTABLE: [persistAtom],
});

export const myNameState = atom<string>({
  key: "myNameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const rivalNameState = atom<string>({
  key: "rivalName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
