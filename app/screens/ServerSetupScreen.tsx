import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle } from "react-native"
import { Button, Text } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"

interface ServerSetupScreenProps extends AppStackScreenProps<"ServerSetup"> {}

export const ServerSetupScreen: FC<ServerSetupScreenProps> = observer(function ServerSetupScreen(
  _props,
) {
  return (
    <OnboardingWrapper length={6} currentIndex={3}>
      <>
        <Text preset="heading" style={$text} tx="serverSetupScreen.header" />
        <Text preset="default" style={$text} tx="serverSetupScreen.promiseDetail" />
        <Text preset="bold" style={$text} tx="serverSetupScreen.promiseCTA" />
        <Button
          testID="ServerSetupScreenButton"
          tx="serverSetupScreen.buttonCTA"
          preset="primary"
          onPress={() => _props.navigation.navigate("ServerConnection")}
          style={{ marginTop: spacing.xxl }}
        />
      </>
    </OnboardingWrapper>
  )
})

const $text: TextStyle = {
  marginVertical: spacing.xs,
  textAlign: "center",
}
