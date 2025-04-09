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
    name: "WidDing",
    rating: "1230",
    avatar: "/avatars/avatar-1.png",
    symbol: GAME_SYMBOL.CROSS,
  },
  {
    id: 2,
    name: "MarinaMyravantiks",
    rating: "850",
    avatar: "/avatars/avatar-2.png",
    symbol: GAME_SYMBOL.ZERO,
  },
  {
    id: 3,
    name: "Anna",
    rating: "1370",
    avatar: "/avatars/avatar-3.png",
    symbol: GAME_SYMBOL.TRIANGLE,
  },
  {
    id: 4,
    name: "Жук",
    rating: "760",
    avatar: "/avatars/avatar-4.png",
    symbol: GAME_SYMBOL.SQUARE,
  },
];

export const GAMES = [
  {
    id: 1,
    name: "WidDing",
    playersCount: 4,
    timer: "1 мин. на ход",
    filedSize: "19x19",
  },
  {
    id: 2,
    name: "MarinaMyravantiks",
    playersCount: 2,
    timer: "20 сек. на ход",
    filedSize: "5x5",
  },
  {
    id: 3,
    name: "Anna",
    playersCount: 2,
    timer: "2 мин. на ход",
    filedSize: "10x10",
  },
  {
    id: 4,
    name: "Жук",
    playersCount: 4,
    timer: "1 мин. на ход",
    filedSize: "19x19",
  },
  {
    id: 5,
    name: "Чилиииииииииииииииииииииииииииииииииииииииииииииииииии",
    playersCount: 2,
    timer: "1 мин. на ход",
    filedSize: "19x19",
  },
];

export const COUNT_PLAYERS = [
  { id: 1, value: 2 },
  { id: 2, value: 4 },
];

export const FIELD_SIZE = [
  { id: 1, value: "3x3" },
  { id: 2, value: "5x5" },
  { id: 3, value: "8x8" },
  { id: 4, value: "12x12" },
  { id: 5, value: "19x19" },
];

export const TIME_MOVE = [
  { id: 1, value: "20 сек. на ход" },
  { id: 2, value: "1 мин. на ход" },
  { id: 3, value: "2 мин. на ход" },
];
