import Image from "next/image";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar, arrow }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-teal-600 text-start leading-tight",
      )}
    >
      <Image src={avatar} height={48} width={48} alt="avatar" unoptimized />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
      {arrow}
    </div>
  );
}
