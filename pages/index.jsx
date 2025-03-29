import { Header } from "../components/header";
import { Main } from "../components/game";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header variant="primary" isMain />}>
      <Main />
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
