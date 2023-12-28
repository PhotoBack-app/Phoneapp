import { Translations } from "./en"

const sv: Translations = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
  },
  welcomeScreen: {
    headerPrefix: "Välkommen till: ",
    header: "Photo BackApp",
    promise:
      "Vi hjälper dig att hålla dina foton och minnen av nära och kära säkra genom att transparent ladda upp dem till din valda tjänst",
    getStarted: "Kör igång",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
}
export default sv
