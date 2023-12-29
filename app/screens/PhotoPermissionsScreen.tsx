import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle } from "react-native"
import { Button, Text } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"

interface PhotoPermissionsScreenProps extends AppStackScreenProps<"PhotoPermissions"> {}

export const PhotoPermissionsScreen: FC<PhotoPermissionsScreenProps> = observer(
  function PhotoPermissionsScreen(_props) {
    return (
      <OnboardingWrapper length={6} currentIndex={1}>
        <>
          <Text preset="heading" style={$text} tx="photoPermissionScreen.header" />
          <Text preset="default" style={$text} tx="photoPermissionScreen.promiseDetail" />
          <Text preset="bold" style={$text} tx="photoPermissionScreen.promiseCTA" />
          <Button
            testID="PhotoPermissionsScreenButton"
            tx="photoPermissionScreen.buttonCTA"
            preset="primary"
            onPress={() => _props.navigation.navigate("CameraAccess")}
            style={{ marginTop: spacing.xxl }}
          />
          <Button
            testID="PhotoPermissionsScreenButton"
            tx="photoPermissionScreen.buttonDisallow"
            preset="danger"
            onPress={() => _props.navigation.navigate("AdvancedPhotoPermissions")}
            style={{ marginTop: spacing.md }}
          />
        </>
      </OnboardingWrapper>
    )
  },
)

const $text: TextStyle = {
  marginVertical: spacing.xs,
  textAlign: "center",
}
