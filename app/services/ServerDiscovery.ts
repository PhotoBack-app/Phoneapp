/* eslint-disable n/no-callback-literal */
import Zeroconf from "react-native-zeroconf"
// import { foundServer } from "~actions/networkActions"
// import store from "~src/store"

export type ServerDiscoveryCallback = (status: string, result: any) => void

export default class ServerDiscovery {
  static myInstance: Zeroconf | null = null

  constructor() {
    if (ServerDiscovery.myInstance === null) {
      ServerDiscovery.myInstance = new Zeroconf()
    }
    return this
  }

  startScan(cb: ServerDiscoveryCallback) {
    console.log("zeroconf startScan")
    try {
      if (ServerDiscovery.myInstance) {
        console.log("zeroconf found instance")

        ServerDiscovery.myInstance.on("start", () => {
          cb("zeroconf scan started", {})
          console.log("zeroconf scan started", {})
        })
        ServerDiscovery.myInstance.on("resolved", (result) => {
          cb("resolved", result)
          console.log("resolved", result)
        })
        ServerDiscovery.myInstance.on("found", (result) => {
          cb("found", result)
          console.log("found", result)
        })
        ServerDiscovery.myInstance.on("error", (error) => {
          cb("zeroconf error", error)
          console.log("zeroconf error", error)
        })
        ServerDiscovery.myInstance.on("update", (result) => {
          cb("update", result)
          console.log("update", result)
        })
        ServerDiscovery.myInstance.on("remove", (result) => {
          cb("remove", result)
          console.log("remove", result)
        })
        ServerDiscovery.myInstance.scan("photobackapp")
      }
    } catch (error) {
      console.log("zeroconf startScan error", error)
      return null
    }
  }

  stopScan() {
    try {
      ServerDiscovery.myInstance.stop()
    } catch (error) {
      return null
    }
    try {
      ServerDiscovery.myInstance.removeDeviceListeners()
    } catch (error) {
      return null
    }
  }
}
