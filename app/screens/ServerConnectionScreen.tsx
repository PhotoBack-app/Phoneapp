import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, ViewStyle, View } from "react-native"
import { ListItem, Text } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"
import { t } from "i18n-js"
import { Server, useServerDiscovery } from "app/services/serverDiscovery/useServerDiscovery"

interface ServerConnectionScreenProps extends AppStackScreenProps<"ServerConnection"> {}

// type Server = {
//   guid: string
//   name: string
//   host: string
//   port: number
//   status: "ready" | "notFound" | "comingSoon" | "connecting" | "connected"
//   disabled?: boolean
// }
// const servers: Server[] = [
//   {
//     guid: "1",
//     name: "Marys Macbook Pro",
//     host: "marys-macbook-pro.local",
//     port: 8080,
//     status: "notFound",
//   },
//   {
//     guid: "2",
//     name: "Marys PC",
//     host: "192.168.18.1",
//     port: 8080,
//     status: "ready",
//   },
//   {
//     guid: "3",
//     name: t("serverConnectionScreen.cloudOption"),
//     host: "cloud.photoback.app",
//     port: 80,
//     disabled: true,
//     status: "comingSoon",
//   },
// ]

export const ServerConnectionScreen: FC<ServerConnectionScreenProps> = observer(
  function ServerConnectionScreen(props) {
    const navigation = props.navigation
    const result = useServerDiscovery()
    const onServerPress = (item: Server) => {
      console.log("ATTEMPTING LOGIN FOR SERVER", item)
      navigation.navigate("Login", { server: item.host, port: item.port })
    }
    return (
      <OnboardingWrapper length={6} currentIndex={4}>
        <View>
          <Text preset="heading" style={$text} tx="serverConnectionScreen.header" />
          <Text preset="default" style={$text} tx="serverConnectionScreen.details" />
          <Text preset="bold" style={$text} tx="serverConnectionScreen.CTA" />
          {result.servers.map((item) => {
            return <ServerItem key={item.guid} item={item} onPress={onServerPress} />
          })}
        </View>
      </OnboardingWrapper>
    )
  },
)

type ServerItemProps = {
  item: Server
  onPress: (item: Server) => void
}
const ServerItem = ({ item, onPress }: ServerItemProps) => {
  const disabled = item.disabled || false
  const $itemStyle = [$lineWrapperItem]
  if (disabled) {
    $itemStyle.push({ opacity: 0.6 })
  }
  const onListItemPress = () => {
    onPress(item)
  }
  const Left = (
    <View>
      <Text style={$itemStyle} preset="bold" text={item.name} size="s" />
      <Text
        style={$itemStyle}
        preset="default"
        text={t(`serverConnectionScreen.statuses.${item.status}`)}
        size="xs"
      />
    </View>
  )
  const Right = (
    <Text
      style={$itemStyle}
      preset="default"
      text={t(`serverConnectionScreen.statuses.${item.status}`)}
      size="md"
    />
  )
  return (
    <ListItem
      disabled={disabled}
      key={`serverListed-${item.guid}`}
      onPress={onListItemPress}
      topSeparator={true}
      bottomSeparator={true}
      containerStyle={$lineWrapper}
      LeftComponent={Left}
      RightComponent={Right}
    />
  )
}

const $lineWrapper: ViewStyle = {
  paddingVertical: spacing.sm,
  marginTop: -1,
}

const $lineWrapperItem: TextStyle = {
  alignSelf: "flex-start",
  textAlign: "left",
}

const $text: TextStyle = {
  marginVertical: spacing.xs,
  textAlign: "center",
}
