import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, ViewStyle, View } from "react-native"
import { ListItem, Text } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "../theme"
import OnboardingWrapper from "app/components/OnboardingWrapper"
import { t } from "i18n-js"
import ServerDiscovery from "app/services/ServerDiscovery"

interface ServerConnectionScreenProps extends AppStackScreenProps<"ServerConnection"> {}

const ServerDiscoveryInstance = new ServerDiscovery()

type Server = {
  id: string
  name: string
  address: string
  port: number
  status: "ready" | "notFound" | "comingSoon" | "connecting" | "connected"
  disabled?: boolean
}
// const servers: Server[] = [
//   {
//     id: "1",
//     name: "Marys Macbook Pro",
//     address: "marys-macbook-pro.local",
//     port: 8080,
//     status: "notFound",
//   },
//   {
//     id: "2",
//     name: "Marys PC",
//     address: "192.168.18.1",
//     port: 8080,
//     status: "ready",
//   },
//   {
//     id: "3",
//     name: t("serverConnectionScreen.cloudOption"),
//     address: "cloud.photoback.app",
//     port: 80,
//     disabled: true,
//     status: "comingSoon",
//   },
// ]
type ServerDiscoveryEvent = {
  status: string
  result: any
}
const updates: ServerDiscoveryEvent[] = []

export const ServerConnectionScreen: FC<ServerConnectionScreenProps> = observer(
  function ServerConnectionScreen(props) {
    const navigation = props.navigation

    React.useEffect(() => {
      updates.splice(0, updates.length)
      ServerDiscoveryInstance.startScan((status, result) => {
        updates.push({ status, result })
      })
      return () => {
        ServerDiscoveryInstance.stopScan()
      }
    }, [])

    const onServerPress = (item: Server) => {
      navigation.navigate("Login", { server: item.address, port: item.port })
    }
    return (
      <OnboardingWrapper length={6} currentIndex={4}>
        <View>
          <Text preset="heading" style={$text} tx="serverConnectionScreen.header" />
          <Text preset="default" style={$text} tx="serverConnectionScreen.details" />
          {/* <Text preset="bold" style={$text} tx="serverConnectionScreen.CTA" />
          {servers.map((item, index) => {
            return <ServerItem key={item.id} item={item} index={index} onPress={onServerPress} />
          })} */}
          {updates.map((item, index) => {
            return <Text key={`update-${index}`} text={JSON.stringify(item)} />
          })}
        </View>
      </OnboardingWrapper>
    )
  },
)

type ServerItemProps = {
  item: Server
  index: number
  onPress: (item: Server) => void
}
const ServerItem = ({ item, index, onPress }: ServerItemProps) => {
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
      <Text style={$itemStyle} preset="bold" text={item.name} size="md" />
      <Text style={$itemStyle} preset="default" text={item.address} size="xs" />
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
      key={`serverListed-${item.id}`}
      onPress={onListItemPress}
      topSeparator={index !== 0}
      bottomSeparator={false}
      containerStyle={$lineWrapper}
      LeftComponent={Left}
      RightComponent={Right}
    />
  )
}

const $lineWrapper: ViewStyle = {
  paddingVertical: spacing.sm,
}

const $lineWrapperItem: TextStyle = {
  alignSelf: "flex-start",
  textAlign: "left",
}

const $text: TextStyle = {
  marginVertical: spacing.xs,
  textAlign: "center",
}
