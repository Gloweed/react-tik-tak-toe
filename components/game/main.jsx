import { useState } from "react";
import { GAMES } from "./constains";
import { SymbolSelectionModal } from "../header/symbol-selection-modal";
import { UiButton } from "../uikit/ui-button";
import clsx from "clsx";

export function Main({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSymbolSelection = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="py-10 text-slate-400/60 text-center text-4xl">
      {!GAMES?.length && "Нет доступных игр"}
      <div className="grid grid-cols-3 gap-4">
        {GAMES.map((game) => {
          return (
            <UiButton
              key={game.id}
              size="lg2"
              variant={clsx(user ? "outline" : "disabled")}
              className="w-[300px] h-[150px] text-start border-2"
              onClick={openSymbolSelection}
            >
              <ul>
                <li className="truncate w-44">
                  <span className="text-slate-700">Игра</span> {game.name}
                </li>
                <li>
                  <span className="text-slate-700">Количество игроков:</span>{" "}
                  {game.playersCount}
                </li>
                <li>
                  <span className="text-slate-700">Время на ход:</span>{" "}
                  {game.timer}
                </li>
                <li>
                  <span className="text-slate-700">Размер поля:</span>{" "}
                  {game.filedSize}
                </li>
              </ul>
            </UiButton>
          );
        })}
      </div>
      <SymbolSelectionModal isOpen={isOpen} onClose={openSymbolSelection} />
    </div>
  );
}
