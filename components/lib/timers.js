import { useEffect, useLayoutEffect, useState } from "react";

export function useNow(interval, enabled) {
  const [now, setNow] = useState();

  useLayoutEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }

    const int = setInterval(() => {
      setNow(Date.now());
    }, interval);
    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);

  return now;
}

export function useInterval(interval, enabled, winnerSymbol, cb) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (!winnerSymbol) {
      const int = setInterval(() => {
        cb(Date.now());
      }, interval);

      return () => {
        clearInterval(int);
      };
    }
  }, [interval, enabled, winnerSymbol, cb]);
}
