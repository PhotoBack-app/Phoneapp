import { load, loadString, save, saveString, clear, remove } from "./storage"
import { MMKV } from "react-native-mmkv"
const storage = new MMKV()

// fixtures
const VALUE_OBJECT = { x: 1 }
const VALUE_STRING = JSON.stringify(VALUE_OBJECT)

beforeEach(() => (storage.getString as jest.Mock).mockReturnValue(Promise.resolve(VALUE_STRING)))
afterEach(() => jest.clearAllMocks())

test("load", () => {
  const value = load("something")
  expect(value).toEqual(JSON.parse(VALUE_STRING))
})

test("loadString", () => {
  const value = loadString("something")
  expect(value).toEqual(VALUE_STRING)
})

test("save", () => {
  save("something", VALUE_OBJECT)
  expect(storage.getString).toHaveBeenCalledWith("something", VALUE_STRING)
})

test("saveString", () => {
  saveString("something", VALUE_STRING)
  expect(storage.set).toHaveBeenCalledWith("something", VALUE_STRING)
})

test("remove", () => {
  remove("something")
  expect(storage.delete).toHaveBeenCalledWith("something")
})

test("clear", () => {
  clear()
  expect(storage.clearAll).toHaveBeenCalledWith()
})
