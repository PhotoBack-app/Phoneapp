import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle } from "react-native"
import { Button, Text } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  return (
    <OnboardingWrapper length={5} currentIndex={0}>
      <>
        <Text preset="default" style={$text} tx="welcomeScreen.headerPrefix" />
        <Text preset="heading" style={$text} tx="welcomeScreen.header" />
        <Text preset="default" style={$text} tx="welcomeScreen.promise" />
        <Button
          testID="welcomeScreenButton"
          tx="welcomeScreen.getStarted"
          preset="outlined"
          onPress={() => _props.navigation.navigate("Login")}
          style={{ marginTop: spacing.xxl }}
        />
      </>
    </OnboardingWrapper>
  )
})

const $text: TextStyle = {
  marginVertical: spacing.xs,
}
