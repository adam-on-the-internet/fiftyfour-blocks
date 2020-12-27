import {Mode} from "../models/Mode.model";

export const MODES: Mode[] = [
  {
    _id: "1",
    title: "Drinking",
    description: "Typical drinking game, with alcohol or other drinks",
    standardPenalty: "Take 1 drink",
    towerFallPenalty: "Finish your drink",
    extraRules: [],
  },
  {
    _id: "2",
    title: "Points",
    description: "Take points as penalties. Golf scoring, whoever has the least points wins.",
    standardPenalty: "Take 10 points",
    towerFallPenalty: "Take 25 points",
    extraRules: [],
  },
  {
    _id: "3",
    title: "Battle Royale",
    description: "Start with 3 health. When your health drops to 0, you are out of the game. Last standing wins.",
    standardPenalty: "-1 health",
    towerFallPenalty: "-3 health",
    extraRules: [
      "Start with 3 health",
      "When your health drops to 0, you are out of the game",
    ],
  },
  {
    _id: "4",
    title: "Custom",
    description: "Use your own rules.",
    standardPenalty: "Minor penalty",
    towerFallPenalty: "Major penalty",
    extraRules: [],
  },
];
