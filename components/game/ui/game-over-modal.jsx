import { UiModal } from "../../uikit/ui-modal";
import { UiButton } from "../../uikit/ui-button";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PLAYERS } from "../constains";

export function GameOverModal({ winnerSymbol, players }) {
  const [winnerPlayer, setWinnerPlayer] = useState();

  useMemo(
    () =>
      setWinnerPlayer(PLAYERS.find((player) => player.symbol === winnerSymbol)),
    [winnerSymbol],
  );

  const handleCloseModal = () => {
    setWinnerPlayer(false);
  };

  const winnerName = winnerPlayer?.name;

  return (
    <UiModal isOpen={winnerName} onClose={handleCloseModal}>
      <UiModal.Header>Игра завершена</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 justify-between mt-2">
          {players}
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <Link href="/">
          <UiButton size="md" variant="outline">
            Вернуться
          </UiButton>
        </Link>
        <a href="/play">
          <UiButton size="md" variant="primary">
            Играть снова
          </UiButton>
        </a>
      </UiModal.Footer>
    </UiModal>
  );
}
