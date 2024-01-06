import { useCallback, useEffect, useState } from "react"
import ServerDiscovery, { DiscoveryResult, ServerDiscoveryCallback } from "./ServerDiscovery"

export type Server = {
  guid: string
  name: string
  host: string
  port: number
  fqdn: string
  addresses: string[]
  status: "ready" | "found" | "comingSoon" | "connecting" | "connected"
  disabled?: boolean
}

const addServer = function (
  rawStatus: "found" | "resolved",
  newServers: Server[],
  result: DiscoveryResult,
): Server[] {
  let status: Server["status"]
  switch (rawStatus) {
    case "found":
      status = "found"
      break
    case "resolved":
      status = "ready"
      break
  }
  const newServer: Server = {
    guid: result.guid,
    name: result.name,
    host: result.host,
    port: result.port,
    fqdn: result.fullName,
    addresses: result.addresses,
    status,
  }
  const index = newServers.findIndex((server) => server.guid === result.guid)
  if (index === -1) {
    newServers.push(newServer)
  } else {
    newServers[index] = newServer
  }
  return newServers
}

/**
 * Custom hook for persisting navigation state.
 */
export function useServerDiscovery() {
  const [servers, setServers] = useState<Server[]>([])

  const cb: ServerDiscoveryCallback = useCallback(
    (error, status, result) => {
      if (error || !result) {
        console.log("zeroconf error", error)
        return
      }
      setServers((servers) => {
        const newServers = [...servers]
        if (status === "removed") {
          return servers.filter((server) => server.guid !== result.guid)
        } else {
          return addServer(status, newServers, result)
        }
      })
    },
    [setServers],
  )

  useEffect(() => {
    const newInstance = new ServerDiscovery()
    newInstance.startScan(cb)
  }, [])

  return { servers }
}
