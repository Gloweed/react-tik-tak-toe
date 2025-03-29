import { UiModal } from "../uikit/ui-modal";
import { UiButton } from "../uikit/ui-button";
import { UiSelect } from "../uikit/fields/ui-select";
import { COUNT_PLAYERS, FIELD_SIZE, TIME_MOVE } from "../game/constains";

export function CreateGameModal({ isOpen, onClose, onClick }) {
  return (
    <UiModal isOpen={isOpen} onClose={onClose}>
      <UiModal.Header>Создать игру</UiModal.Header>
      <form action="#" className="flex flex-col flex-auto">
        <UiModal.Body>
          <div className="flex justify-evenly gap-2 pt-10">
            <UiSelect
              className="w-44"
              label="Количество игроков"
              objectParams={COUNT_PLAYERS}
            />
            <UiSelect
              className="w-44"
              label="Размер поля"
              objectParams={FIELD_SIZE}
            />
            <UiSelect
              className="w-44"
              label="Время на ход"
              objectParams={TIME_MOVE}
            />
          </div>
        </UiModal.Body>
        <UiModal.Footer>
          <UiButton size="md" variant="primary" onClick={onClick}>
            Создать
          </UiButton>
        </UiModal.Footer>
      </form>
    </UiModal>
  );
}
