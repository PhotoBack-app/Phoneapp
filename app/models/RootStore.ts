import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { NetworkedServersStoreModel } from "./NetworkedServersStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  networkedServersStore: types.optional(NetworkedServersStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
