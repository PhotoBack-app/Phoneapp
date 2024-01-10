import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { Pressable, TextInput, TextStyle, ViewStyle } from "react-native"
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner"
import * as Linking from "expo-linking"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"

interface CameraAccessScreenProps extends AppStackScreenProps<"CameraAccess"> {}

export const CameraAccessScreen: FC<CameraAccessScreenProps> = observer(function CameraAccessScreen(
  props,
) {
  const [permissionResponse, requestPermission] = BarCodeScanner.usePermissions()
  const permissionStatus = permissionResponse?.status || PermissionStatus.UNDETERMINED
  useEffect(() => {
    if (permissionStatus === PermissionStatus.GRANTED) {
      props.navigation.replace("ServerSetup")
    }
  }, [permissionStatus])
  return (
    <OnboardingWrapper length={6} currentIndex={2}>
      <>
        <Text preset="heading" style={$text} tx="cameraAccessScreen.header" size="xl" />
        {permissionStatus === PermissionStatus.UNDETERMINED && (
          <>
            <Text preset="default" style={$text} tx="cameraAccessScreen.promiseDetail" />
            <Text preset="bold" style={$text} tx="cameraAccessScreen.promiseCTA" />

            <Button
              tx="cameraAccessScreen.buttonCTA"
              preset="primary"
              onPress={requestPermission}
              style={{ marginTop: spacing.xxl }}
            />
          </>
        )}
        {permissionStatus === PermissionStatus.DENIED && (
          <>
            <Text preset="default" style={$text} tx="cameraAccessScreen.noPermissionDetail" />
            <Text preset="bold" style={$text} tx="cameraAccessScreen.noPermissionCTA" />
            <Button
              tx="cameraAccessScreen.noPermissionButtonCTA"
              preset="primary"
              onPress={Linking.openSettings}
              style={{ marginTop: spacing.xxl }}
            />
          </>
        )}
      </>
    </OnboardingWrapper>
  )
})

const $text: TextStyle = {
  marginVertical: spacing.xs,
  textAlign: "center",
}
