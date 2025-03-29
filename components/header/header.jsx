import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../game/profile/profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";
import avatarSrc1 from "../game/ui/images/avatar-1.png";
import clsx from "clsx";
import { CreateGameModal } from "./create-game-modal";
import { useState } from "react";
import { SymbolSelectionModal } from "../header/symbol-selection-modal";

export function Header({ variant, isMain }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

  const handleClickPlay = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const openSymbolSelection = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsSelect(true);
    } else if (isSelect) {
      setIsSelect(false);
    }
  };

  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="mx-6 w-px h-8 bg-slate-200"></div>
      <UiButton
        className="w-44"
        variant={variant}
        size="lg"
        onClick={handleClickPlay}
      >
        Играть
      </UiButton>
      <button
        className={clsx(
          isMain && "cursor-pointer hover:text-teal-500",
          "ml-auto flex items-center gap-2 text-teal-600",
        )}
      >
        <Profile
          className={isMain && "hover:text-teal-500"}
          name="WidDing"
          rating="1230"
          avatar={avatarSrc1}
        />
        {isMain && <ArrowDownIcon />}
      </button>
      <CreateGameModal
        isOpen={isOpen}
        onClose={handleClickPlay}
        onClick={openSymbolSelection}
      />
      <SymbolSelectionModal isOpen={isSelect} onClose={openSymbolSelection} />
    </header>
  );
}
