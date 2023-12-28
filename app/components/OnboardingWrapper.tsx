import React from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TextStyle,
  useWindowDimensions,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"
import { Button, OnboardingProgress, Text } from "app/components"
import { colors, spacing } from "../theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import LinearGradient from "react-native-linear-gradient"

const logo = require("../../assets/images/PhotobackLogo/PhotoBackLogo.png")

interface OnboardingWrapperProps extends ViewProps {
  /**
   * The total number steps of progress
   */
  length: number

  /**
   * The current step in the progress
   */
  currentIndex: number

  /**
   * Children components
   */
  children: React.ReactNode
}

/**
 * A component used to show the progress of onboarding
 * `currentIndex` is 0-based
 * `length` is 1-based
 *
 * Example: <OnboardingProgress length={5} currentIndex={0} />
 */
export default function OnboardingWrapper(props: OnboardingWrapperProps) {
  const { height, width } = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const minDim = Math.min(width, height)
  return (
    <LinearGradient colors={colors.gradient} style={$container}>
      <View
        style={[
          $content,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <Image
          style={[
            $logo,
            {
              width: minDim / 2,
              height: minDim / 2,
            },
          ]}
          source={logo}
          resizeMode="contain"
        />
        {props.children}
        <OnboardingProgress
          key="onboardingProgress"
          length={5}
          currentIndex={0}
          containerStyle={{ marginTop: spacing.xl }}
        />
      </View>
    </LinearGradient>
  )
}

const $container: ViewStyle = {
  flex: 1,
  width: "100%",
}
const $content: ViewStyle = {
  paddingHorizontal: spacing.xxl,
  justifyContent: "flex-start",
  alignItems: "center",
}

const $logo: ImageStyle = {
  flexShrink: 1,
  marginTop: spacing.lg,
  marginBottom: spacing.sm,
}
