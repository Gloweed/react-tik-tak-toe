import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center text-xs text-teal-600 gap-2 leading-tight -mb-0.5"
    >
      <ArrowLeftIcon />
      На главную
    </Link>
  );
}
