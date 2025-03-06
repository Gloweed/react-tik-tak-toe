import { MOVE_ORDER } from "../constains";

export function getNextMove(gameState) {
  const slisedMoveOrder = MOVE_ORDER.slice(0, gameState.playersCount).filter(
    (symbol) => gameState.timers[symbol] > 0,
  );

  const nextMoveIndex = slisedMoveOrder.indexOf(gameState.currentMove) + 1;
  return slisedMoveOrder[nextMoveIndex] ?? slisedMoveOrder[0];
}
