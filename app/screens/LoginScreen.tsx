import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { Pressable, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"
import { useNavigation } from "@react-navigation/native"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  return (
    <OnboardingWrapper length={6} currentIndex={5} noLogo={true}>
      <>
        <View style={$cameraView} />
        <Text preset="heading" style={$text} tx="loginScreen.header" size="xl" />
        <Text preset="default" style={$text} tx="loginScreen.promiseDetail" />
        <DevButtons />
      </>
    </OnboardingWrapper>
  )
})

const DevButtons: FC = observer(function DevButtons() {
  const navigation = useNavigation()
  const onSuccess = () => {
    navigation.navigate("Dashboard")
  }
  const onFail = () => {
    navigation.navigate("ServerConnection")
  }
  if (!__DEV__) return null
  return (
    <>
      <Button
        text="Trigger Success"
        preset="secondary"
        onPress={onSuccess}
        style={{ marginTop: spacing.md }}
      />
      <Button
        text="Trigger Fail"
        preset="secondary"
        onPress={onFail}
        style={{ marginTop: spacing.md }}
      />
    </>
  )
})

const $text: TextStyle = {
  marginVertical: spacing.xs,
  textAlign: "center",
}
const $cameraView: ViewStyle = {
  backgroundColor: colors.palette.neutral600,
  borderWidth: 2,
  borderColor: colors.palette.neutral100,
  aspectRatio: 1,
  flex: 1,
  width: "80%",
  borderRadius: 20,
  margin: spacing.xxl,
  marginTop: spacing.xxl,
}
