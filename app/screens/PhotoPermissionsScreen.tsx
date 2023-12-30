import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { TextStyle } from "react-native"
import * as MediaLibrary from "expo-media-library"
import * as Linking from "expo-linking"
import { Button, Text } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"

interface PhotoPermissionsScreenProps extends AppStackScreenProps<"PhotoPermissions"> {}

export const PhotoPermissionsScreen: FC<PhotoPermissionsScreenProps> = observer(
  function PhotoPermissionsScreen(props) {
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()
    const permissionStatus = permissionResponse?.accessPrivileges
    useEffect(() => {
      switch (permissionStatus) {
        // 'all'
        case "all":
          props.navigation.navigate("CameraAccess")
          break
        // 'limited'
        case "limited":
          props.navigation.navigate("CameraAccess")
          break
        // 'none'
        case "none":
          break
        default:
          break
      }
    }, [permissionStatus])
    return (
      <OnboardingWrapper length={6} currentIndex={1}>
        <>
          <Text preset="heading" style={$text} tx="photoPermissionScreen.header" />
          {permissionStatus === "none" && (
            <>
              <Text preset="default" style={$text} tx="photoPermissionScreen.noPermissionDetail" />
              <Text preset="bold" style={$text} tx="photoPermissionScreen.noPermissionCTA" />
              <Button
                tx="photoPermissionScreen.noPermissionButtonCTA"
                preset="primary"
                onPress={Linking.openSettings}
                style={{ marginTop: spacing.xxl }}
              />
            </>
          )}
          {permissionStatus !== "none" && (
            <>
              <Text preset="default" style={$text} tx="photoPermissionScreen.promiseDetail" />
              <Text preset="bold" style={$text} tx="photoPermissionScreen.promiseCTA" />
              <Button
                tx="photoPermissionScreen.buttonCTA"
                preset="primary"
                onPress={requestPermission}
                style={{ marginTop: spacing.xxl }}
              />
            </>
          )}
        </>
      </OnboardingWrapper>
    )
  },
)

const $text: TextStyle = {
  marginVertical: spacing.xs,
  textAlign: "center",
}
