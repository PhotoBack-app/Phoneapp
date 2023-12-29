import React, { FC } from "react"
import * as Application from "expo-application"
import { Alert, Linking, Platform, TextStyle, View, ViewStyle } from "react-native"
import { Button, ListItem, Screen, Text } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { useStores } from "../models"
import { AppStackScreenProps } from "app/navigators"
import Clipboard from "@react-native-clipboard/clipboard"

function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}
interface DebugScreenProps extends AppStackScreenProps<"Dashboard"> {}

const copyToClipboard = (string: string) => {
  Clipboard.setString(string)
}

export const DebugScreen: FC<DebugScreenProps> = function debugScreen(props) {
  const {
    authenticationStore: { logout },
  } = useStores()

  const back = () => {
    props.navigation.navigate("Welcome")
  }

  const usingHermes = typeof HermesInternal === "object" && HermesInternal !== null
  // @ts-expect-error
  const usingFabric = global.nativeFabricUIManager != null

  const debugInfo = {
    appId: Application.applicationId,
    appName: Application.applicationName,
    appVersion: Application.nativeApplicationVersion,
    appBuildVersion: Application.nativeBuildVersion,
    hermesEnabled: usingHermes,
    fabricEnabled: usingFabric,
  }
  const Reactotron = React.useMemo(
    () => async () => {
      if (__DEV__) {
        console.tron.display({
          name: "DISPLAY",
          value: debugInfo,
          important: true,
        })
      }
    },
    [],
  )

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <Text
        style={$reportBugsLink}
        tx="debugScreen.reportBugs"
        onPress={() => {
          copyToClipboard(`**I'm using this app:**
          \n\`\`\`json
          \n${JSON.stringify(debugInfo, null, 2)}
          \n\`\`\`
          \n**And I'm experiencing this problem:**
          \n
          \n**Steps to reproduce:**
          \n1. Open the app
          \n2. Do this
          \n3. Do that`)
          Alert.alert(
            "Debug info copied to clipboard",
            "Paste that in a new issue and describe your problem.",
            [
              { text: "Cancel", style: "cancel" },
              {
                text: "Open issues",
                onPress: () =>
                  openLinkInBrowser("https://github.com/StefanWallin/photobackapp/issues"),
              },
            ],
          )
        }}
      />
      <Text style={$title} preset="heading" tx="debugScreen.title" />
      <View style={$itemsContainer}>
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Id</Text>
              <Text>{Application.applicationId}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Name</Text>
              <Text>{Application.applicationName}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Version</Text>
              <Text>{Application.nativeApplicationVersion}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Build Version</Text>
              <Text>{Application.nativeBuildVersion}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">Hermes Enabled</Text>
              <Text>{String(usingHermes)}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">Fabric Enabled</Text>
              <Text>{String(usingFabric)}</Text>
            </View>
          }
        />
      </View>
      <View style={$buttonContainer}>
        <Button style={$button} tx="debugScreen.reactotron" onPress={Reactotron} />
        <Text style={$hint} tx={`debugScreen.${Platform.OS}ReactotronHint` as const} />
      </View>
      <View style={$buttonContainer}>
        <Button style={$button} tx="common.logOut" onPress={logout} />
        <Button style={$button} text="Tillbaka" onPress={back} />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.xxl,
}

const $reportBugsLink: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.lg,
  alignSelf: isRTL ? "flex-start" : "flex-end",
}

const $item: ViewStyle = {
  marginBottom: spacing.md,
}

const $itemsContainer: ViewStyle = {
  marginBottom: spacing.xl,
}

const $button: ViewStyle = {
  marginBottom: spacing.xs,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.md,
}

const $hint: TextStyle = {
  color: colors.palette.neutral600,
  fontSize: 12,
  lineHeight: 15,
  paddingBottom: spacing.lg,
}
