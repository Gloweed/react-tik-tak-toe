import { Header } from "../components/header";
import { Game } from "../components/game";
import { HomePageLayout } from "../pages/index";

export default function PlayPage() {
  return (
    <HomePageLayout header={<Header variant="disabled" />}>
      <Game />
    </HomePageLayout>
  );
}
