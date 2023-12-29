import React from "react"
import {
  Image,
  ImageStyle,
  Pressable,
  ScrollView,
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
import { useNavigation } from "@react-navigation/native"

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

  /**
   * Whether to show the logo or not
   */
  noLogo?: boolean
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
  const navigation = useNavigation()
  const showLogo = props.noLogo !== true
  return (
    <LinearGradient colors={colors.gradient} style={$container}>
      <ScrollView
        contentContainerStyle={[
          $content,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {showLogo && (
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
        )}
        {props.children}
        <OnboardingProgress
          key="onboardingProgress"
          length={props.length}
          currentIndex={props.currentIndex}
          containerStyle={{ marginTop: spacing.md }}
        />
        {props.currentIndex > 0 && (
          <Pressable
            onPress={() => navigation.navigate("Welcome")}
            style={{
              marginTop: spacing.xxl,
            }}
          >
            <Text tx="common.back" />
          </Pressable>
        )}
      </ScrollView>
    </LinearGradient>
  )
}

const $container: ViewStyle = {
  flex: 1,
  width: "100%",
}
const $content: ViewStyle = {
  paddingHorizontal: spacing.lg,
  justifyContent: "flex-start",
  alignItems: "center",
}

const $logo: ImageStyle = {
  flexShrink: 1,
  marginTop: spacing.lg,
  marginBottom: spacing.sm,
}
