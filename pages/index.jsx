import { Header } from "../components/header";
import { Game } from "../components/game";
{
  /*import { UiTextField } from "../components/uikit/fileds/ui-text-field";*/
}

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      {/*<UiTextField
        label="label"
        placeholder="placeholder"
        required
        helperText="helper text"
        errorText="Error"
      />*/}
      <Game />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="mx-auto pt-6 w-max">{children}</main>
    </div>
  );
}
