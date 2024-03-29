import { Translations } from "./en"

const sv: Translations = {
  common: {
    ok: "Okej!",
    cancel: "Avbryt",
    back: "Tillbaka",
    logOut: "Logga ut",
  },
  welcomeScreen: {
    headerPrefix: "Välkommen till: ",
    header: "PhotoBackApp",
    promise:
      "Appen gör det enkelt att synka dina foton och minnen av nära och kära organiserade på din dator eller i molnet",
    getStarted: "Kör igång",
  },
  photoPermissionScreen: {
    header: "Tillgång till foton",
    promiseDetail:
      "För att kunna ladda upp dina foton till din dator behöver appen kunna läsa ditt fotobibliotek.",
    promiseCTA: "Denna app behöver dina foton",
    buttonCTA: "Tillåt åtkomst",
    noPermissionDetail:
      "Du har begränsat åtkomsten till ditt fotobibliotek. Detta kommer att förhindra appen från att ladda upp dina foton.",
    noPermissionCTA: "Du måste ändra detta i inställningarna.",
    noPermissionButtonCTA: "Öppna inställningar",
  },
  cameraAccessScreen: {
    header: "Tillgång till kameran",
    promiseDetail:
      "För att autentisera dig behöver du skanna den presenterade QR-koden med kameran på din telefon",
    promiseCTA: "Detta kräver kameraåtkomst",
    buttonCTA: "Tillåt kameraåtkomst",
    noPermissionDetail:
      "Du har begränsat åtkomsten till din kamera. Detta kommer att förhindra appen från att autentisera dig.",
    noPermissionCTA: "Du måste ändra detta i inställningarna.",
    noPermissionButtonCTA: "Öppna inställningar",
  },
  serverSetupScreen: {
    header: "Installera på din dator",
    promiseDetail:
      "Installera PhotoBackApp på din Mac eller PC. Du hittar programvaran på vår hemsida:",
    promiseCTA: "https://install.photoback.app",
    buttonCTA: "Min dator är klar",
  },
  serverConnectionScreen: {
    header: "Ingen anslutning",
    details: "Se till att du är ansluten till samma WiFi som din dator.",
    CTA: "Tryck på en dator nedan för att ansluta",
    statuses: {
      notFound: "hittades inte",
      ready: "redo",
      connecting: "ansluter...",
      connected: "ansluten",
      comingSoon: "kommer snart",
    },
    cloudOption: "PhotoBackApp Cloud",
  },
  loginScreen: {
    header: "Anslut & autentisera",
    promiseDetail:
      "För att ansluta till din server måste du klicka på “Lägg till enhet” i din skrivbordsapp och sedan skanna den presenterade QR-koden i denna app.",
    promiseCTA: "Denna app behöver dina foton",
    buttonCTA: "Tillåt åtkomst",
  },
  debugScreen: {
    title: "Debug",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
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
