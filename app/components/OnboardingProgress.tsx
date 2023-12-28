import { colors, spacing } from "app/theme"
import * as React from "react"
import { StyleProp, View, ViewProps, ViewStyle } from "react-native"

interface OnboardingProps extends ViewProps {
  /**
   * The size of the icon
   */
  size?: number

  /**
   * The total number steps of progress
   */
  length: number

  /**
   * The current step in the progress
   */
  currentIndex: number

  /**
   * Style overrides for the containing view element
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * Style overrides for the steps
   */
  stepStyle?: StyleProp<ViewStyle>
}

/**
 * A component used to show the progress of onboarding
 * `currentIndex` is 0-based
 * `length` is 1-based
 *
 * Example: <OnboardingProgress length={5} currentIndex={0} />
 */
export function OnboardingProgress(props: OnboardingProps) {
  const { size, length, currentIndex } = props
  if (length < 1) {
    throw new Error("OnboardingProgress: length must be greater than 0")
  }
  if (currentIndex < 0) {
    throw new Error("OnboardingProgress: currentIndex must be greater than 0")
  }
  if (currentIndex >= length) {
    throw new Error("OnboardingProgress: currentIndex must be less than length")
  }
  if (size && size < 0) {
    throw new Error("OnboardingProgress: if passed, size must be greater than 0")
  }

  const actualSize = size || baseSize
  const $containerStyle: StyleProp<ViewStyle> = [$baseContainerStyle, props.containerStyle || {}]
  const $stepStyle: StyleProp<ViewStyle> = [
    $baseStepStyle,
    props.stepStyle || {},
    {
      width: actualSize,
      height: actualSize,
      borderRadius: actualSize,
    },
  ]
  const steps: number[] = new Array(length).fill(0)

  return (
    <View style={$containerStyle}>
      {steps.map((_, index) => (
        <View
          key={`step_${index}`}
          style={[
            $stepStyle,
            index === currentIndex ? $activeStepStyle : {},
            index < currentIndex ? $completedStepStyle : {},
          ]}
        ></View>
      ))}
    </View>
  )
}

const $activeStepStyle: ViewStyle = {
  borderColor: colors.palette.neutral100,
  backgroundColor: colors.palette.overlay50,
}
const $completedStepStyle: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
}
const $baseContainerStyle: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  marginVertical: spacing.md,
  gap: spacing.sm,
}
const $baseStepStyle: ViewStyle = {
  backgroundColor: colors.palette.overlay20,
  borderWidth: 1,
  borderColor: colors.palette.overlay50,
}
const baseSize = spacing.md
