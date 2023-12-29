import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { Pressable, TextInput, TextStyle, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"

interface CameraAccessScreenProps extends AppStackScreenProps<"CameraAccess"> {}

export const CameraAccessScreen: FC<CameraAccessScreenProps> = observer(function CameraAccessScreen(
  _props,
) {
  return (
    <OnboardingWrapper length={6} currentIndex={2}>
      <>
        <Text preset="heading" style={$text} tx="cameraAccessScreen.header" size="xl" />
        <Text preset="default" style={$text} tx="cameraAccessScreen.promiseDetail" />
        <Text preset="bold" style={$text} tx="cameraAccessScreen.promiseCTA" />
        <Button
          testID="PhotoPermissionsScreenButton"
          tx="cameraAccessScreen.buttonCTA"
          preset="primary"
          onPress={() => _props.navigation.navigate("ServerSetup")}
          style={{ marginTop: spacing.xxl }}
        />
        <Button
          testID="PhotoPermissionsScreenButton"
          tx="cameraAccessScreen.buttonDisallow"
          preset="danger"
          onPress={() => _props.navigation.navigate("CameraAccess")}
          style={{ marginTop: spacing.md }}
        />
      </>
    </OnboardingWrapper>
  )
})

const $text: TextStyle = {
  marginVertical: spacing.xs,
  textAlign: "center",
}
