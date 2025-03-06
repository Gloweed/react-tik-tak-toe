import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../game/profile/profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";
import avatarSrc1 from "../game/ui/images/avatar-1.png";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="mx-6 w-px h-8 bg-slate-200"></div>
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="cursor-pointer ml-auto flex items-center gap-2 text-teal-600">
        <Profile name="Paromovevg" rating="1230" avatar={avatarSrc1} />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
