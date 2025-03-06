import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const GAME_SYMBOL = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOL.CROSS,
  GAME_SYMBOL.ZERO,
  GAME_SYMBOL.TRIANGLE,
  GAME_SYMBOL.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "Paromovevg",
    rating: "1230",
    avatar: avatarSrc1,
    symbol: GAME_SYMBOL.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rating: "850",
    avatar: avatarSrc3,
    symbol: GAME_SYMBOL.ZERO,
  },
  {
    id: 3,
    name: "Lara",
    rating: "1370",
    avatar: avatarSrc2,
    symbol: GAME_SYMBOL.TRIANGLE,
  },
  {
    id: 4,
    name: "Додик",
    rating: "760",
    avatar: avatarSrc4,
    symbol: GAME_SYMBOL.SQUARE,
  },
];
