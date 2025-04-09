import { Header } from "../components/header";
import { Main } from "../components/game";

export default function HomePage({ onLogin, onLogout, user }) {
  return (
    <HomePageLayout
      header={
        <Header
          variant={user ? "primary" : "disabled"}
          onLogin={onLogin}
          onLogout={onLogout}
          isMain
          user={user}
        />
      }
    >
      <Main user={user} />
    </HomePageLayout>
  );
}

export function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="mx-auto pt-6 w-max">{children}</main>
    </div>
  );
}
