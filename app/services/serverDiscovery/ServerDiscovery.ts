import Zeroconf, { Service } from "react-native-zeroconf"

export type DiscoveryResult = {
  guid: string
  addresses: string[]
  fullName: string
  host: string
  name: string
  port: number
  txt: Record<string, string>
}

export type DiscoveryStatus = "found" | "resolved" | "removed"
export type ServerDiscoveryCallback = (
  error: Error | null,
  status: DiscoveryStatus,
  result: DiscoveryResult | null,
) => void

const splitName = (name: string): [string, string] => {
  const [guid, ...rest] = name.split("*")
  return [guid, rest.join("")]
}

const DiscoveryResultFromNameFactory = (rawName: string): DiscoveryResult => {
  const [guid, name] = splitName(rawName)
  return {
    guid: guid,
    addresses: [],
    fullName: "",
    host: "",
    name,
    port: 0,
    txt: {},
  }
}

const DiscoveryResultFromServiceFactory = (service: Service): DiscoveryResult => {
  const [guid, name] = splitName(service.name)
  return {
    guid,
    addresses: service.addresses,
    fullName: service.fullName,
    host: service.host,
    name,
    port: service.port,
    txt: service.txt,
  }
}

export default class ServerDiscovery {
  static myInstance: Zeroconf | null = null

  constructor() {
    if (ServerDiscovery.myInstance === null) {
      ServerDiscovery.myInstance = new Zeroconf()
    }
    return this
  }

  startScan(cb: ServerDiscoveryCallback) {
    try {
      if (ServerDiscovery.myInstance) {
        ServerDiscovery.myInstance.on("found", (name: string) => {
          cb(null, "found", DiscoveryResultFromNameFactory(name))
        })
        ServerDiscovery.myInstance.on("resolved", (service: Service) => {
          cb(null, "resolved", DiscoveryResultFromServiceFactory(service))
        })
        ServerDiscovery.myInstance.on("remove", (name: string) => {
          cb(null, "removed", DiscoveryResultFromNameFactory(name))
        })
        ServerDiscovery.myInstance.scan("photobackapp")
      }
    } catch (error) {
      console.error("zeroconf startScan error", error)
    }
  }

  stopScan() {
    try {
      if (ServerDiscovery.myInstance) {
        ServerDiscovery.myInstance.stop()
      }
    } catch (error) {
      console.error("zeroconf stopScan error", error)
      return
    }
    try {
      if (ServerDiscovery.myInstance) {
        ServerDiscovery.myInstance.removeDeviceListeners()
      }
    } catch (error) {
      console.error("zeroconf removeDeviceListeners error", error)
    }
  }
}
