import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import Image from "next/image";
import { useNow } from "../../lib/timers";

export function PlayerInfo({
  name,
  rating,
  avatar,
  symbol,
  timer,
  timerStartAt,
}) {
  const now = useNow(1000, timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);

  const seconds = Math.ceil(mils / 1000);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds <= 10;

  const getTimeColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "";
    }
    return "text-slate-200";
  };

  return (
    <div className="flex gap-3 items-center even:flex-row-reverse">
      <div className="relative">
        <div className="flex items-center gap-2 text-teal-600 text-start leading-tight w-44">
          <Image src={avatar} height={48} width={48} alt="avatar" unoptimized />
          <div className="overflow-hidden">
            <div className="text-lg leading-tight truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full absolute -left-1 -top-1 shadow">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div className="w-px h-6 bg-slate-200"></div>
      <div className={clsx("text-lg font-semibold w-[60px]", getTimeColor())}>
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
