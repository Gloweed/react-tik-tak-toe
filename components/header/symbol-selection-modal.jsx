import { UiModal } from "../uikit/ui-modal";
import { UiButton } from "../uikit/ui-button";
import Link from "next/link";
import { CrossIcon } from "../game/ui/icons/cross-icon";
import { SquareIcon } from "../game/ui/icons/square-icon";
import { TriangleIcon } from "../game/ui/icons/triangle-icon";
import { ZeroIcon } from "../game/ui/icons/zero-icon";

export function SymbolSelectionModal({ isOpen, onClose }) {
  return (
    <UiModal isOpen={isOpen} onClose={onClose} width="sm">
      <UiModal.Header>Выберите символ</UiModal.Header>
      <UiModal.Body>
        <div className="grid grid-cols-2 gap-1 py-3">
          <Link href="/play" className="max-w-fit justify-self-end">
            <UiButton variant="outline" className="border-2 px-7 py-6 rounded">
              <CrossIcon className="w-10 h-10" />
            </UiButton>
          </Link>
          <Link href="/play" className="max-w-fit">
            <UiButton variant="outline" className="border-2 px-7 py-6 rounded">
              <ZeroIcon className="w-10 h-10" />
            </UiButton>
          </Link>
          <Link href="/play" className="max-w-fit justify-self-end">
            <UiButton variant="outline" className="border-2 px-7 py-6 rounded">
              <TriangleIcon className="w-10 h-10" />
            </UiButton>
          </Link>
          <Link href="/play" className="max-w-fit">
            <UiButton variant="outline" className="border-2 px-7 py-6 rounded">
              <SquareIcon className="w-10 h-10" />
            </UiButton>
          </Link>
        </div>
      </UiModal.Body>
    </UiModal>
  );
}
