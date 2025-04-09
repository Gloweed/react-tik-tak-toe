import clsx from "clsx";
import "../style/global.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const onLogin = (loggedInUser) => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const onLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className={clsx(inter.className, "text-slate-900")}>
      <Component
        {...pageProps}
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      <div id="modals"></div>
    </div>
  );
}
