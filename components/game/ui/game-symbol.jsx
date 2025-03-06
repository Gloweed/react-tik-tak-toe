import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { SquareIcon } from "./icons/square-icon";
import { GAME_SYMBOL } from "../constains";

export function GameSymbol({ symbol, className }) {
  const Icon = {
    [GAME_SYMBOL.CROSS]: CrossIcon,
    [GAME_SYMBOL.ZERO]: ZeroIcon,
    [GAME_SYMBOL.TRIANGLE]: TriangleIcon,
    [GAME_SYMBOL.SQUARE]: SquareIcon,
  }[symbol];

  return <Icon className={className} />;
}
