import Image from "next/image";
import clsx from "clsx";
import { Profile } from "../game/profile/profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";
import { CreateGameModal } from "./create-game-modal";
import { useState } from "react";
import { SymbolSelectionModal } from "../header/symbol-selection-modal";
import { AuthModal } from "./auth-modal";

export function Header({ variant, onLogin, onLogout, isMain, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [textButton, setTextButton] = useState("");

  const handleClickAuth = (e) => {
    if (isAuth) {
      setIsAuth(false);
    } else {
      setTextButton(e.currentTarget.innerText);
      setIsAuth(true);
    }
  };

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
      <Image src="/logo.svg" alt="logo" width={163} height={53} />
      <div className="mx-6 w-px h-8 bg-slate-200"></div>
      <UiButton
        className="w-44"
        variant={variant}
        size="lg"
        onClick={handleClickPlay}
      >
        Играть
      </UiButton>
      {!user && (
        <div className="ml-auto flex gap-1 text-teal-600 cursor-default">
          <span
            onClick={(e) => handleClickAuth(e)}
            className="hover:cursor-pointer hover:underline hover:text-teal-500"
          >
            Вход
          </span>
          /
          <span
            onClick={(e) => handleClickAuth(e)}
            className="hover:cursor-pointer hover:underline hover:text-teal-500"
          >
            Регистрация
          </span>
        </div>
      )}
      {user && (
        <button
          onClick={onLogout}
          className={clsx(
            isMain && "cursor-pointer hover:text-teal-500",
            "ml-auto flex items-center gap-2 text-teal-600",
          )}
        >
          <Profile
            className={isMain && "hover:text-teal-500"}
            name={user.username}
            rating={user.rating}
            avatar={user.avatar}
            arrow={isMain && <ArrowDownIcon />}
          />
        </button>
      )}
      <AuthModal
        onLogin={onLogin}
        textButton={textButton}
        isOpen={isAuth}
        onClose={handleClickAuth}
      />
      <CreateGameModal
        isOpen={isOpen}
        onClose={handleClickPlay}
        onClick={openSymbolSelection}
      />
      <SymbolSelectionModal isOpen={isSelect} onClose={openSymbolSelection} />
    </header>
  );
}
