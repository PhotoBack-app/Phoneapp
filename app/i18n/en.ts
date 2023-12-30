const en = {
  common: {
    ok: "Okay!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
  },
  welcomeScreen: {
    headerPrefix: "Welcome to: ",
    header: "PhotoBackApp",
    promise:
      "This app makes it easy to sync your photos and memories of loved ones organized on your computer or in the cloud.",
    getStarted: "Get Started",
  },
  photoPermissionScreen: {
    header: "Access to Photos",
    promiseDetail:
      "To be able to upload your photos to your photo storage this app need to be able to read your photo library.",
    promiseCTA: "This will require photo access",
    buttonCTA: "Allow Photo Access",
    noPermissionDetail:
      "You have limited the access to your media library. This will prevent the app from uploading your photos.",
    noPermissionCTA: "You have to change this in settings.",
    noPermissionButtonCTA: "Open Settings",
  },
  cameraAccessScreen: {
    header: "Accesss to Camera",
    promiseDetail:
      "To authenticate you need to scan the presented QR-code with the camera on your phone",
    promiseCTA: "This will require camera access",
    buttonCTA: "Allow Camera Access",
    noPermissionDetail:
      "You have limited the access to your camera. This will prevent the app from authenticating.",
    noPermissionCTA: "You have to change this in settings.",
    noPermissionButtonCTA: "Open Settings",
  },
  serverSetupScreen: {
    header: "Setup your computer",
    promiseDetail:
      "Install the PhotoBackApp on your Mac or PC desktop computer. You can find the software on our website:",
    promiseCTA: "https://install.photoback.app",
    buttonCTA: "My computer is set up",
  },
  serverConnectionScreen: {
    header: "No connection",
    details: "Make sure you are connected to the same WiFi as your computer.",
    CTA: "Press a server below to connect",
    statuses: {
      notFound: "not found",
      ready: "ready",
      connecting: "connecting...",
      connected: "connected",
      comingSoon: "coming soon",
    },
    cloudOption: "PhotoBackApp Cloud",
  },
  loginScreen: {
    header: "Connect & Authenticate",
    promiseDetail:
      "To connect your to your server you need to click “Add Device” on your desktop app and then scan the presented QR-code on this app.",
    promiseCTA: "This will require camera access",
    buttonCTA: "Allow Access",
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

export default en
export type Translations = typeof en
