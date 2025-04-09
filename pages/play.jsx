import { Header } from "../components/header";
import { Game } from "../components/game";
import { HomePageLayout } from "../pages/index";

export default function PlayPage({ user }) {
  return (
    <HomePageLayout header={<Header variant="disabled" user={user} />}>
      <Game />
    </HomePageLayout>
  );
}
