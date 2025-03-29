import { UiButton } from "../../uikit/ui-button";

export function GameLayout({
  winnerSymbol,
  backLink,
  title,
  gameInfo,
  playersList,
  gameMoveInfo,
  gameCell,
}) {
  const actions = (
    <>
      <UiButton size="md" variant={winnerSymbol ? "disabled" : "primary"}>
        Ничья
      </UiButton>
      <UiButton size="md" variant={winnerSymbol ? "disabled" : "outline"}>
        Сдаться
      </UiButton>
    </>
  );

  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="mt-4 bg-white shadow-md px-8 py-4 rounded-2xl grid grid-cols-2 gap-3 justify-between">
        {playersList}
      </div>
      <div className=" mt-6 bg-white shadow-md px-8 pt-6 pb-7 rounded-2xl">
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
          {gameCell}
        </div>
      </div>
    </div>
  );
}
