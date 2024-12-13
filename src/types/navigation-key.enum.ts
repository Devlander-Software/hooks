export enum NavigationKey {
  Enter = "Enter",
  Tab = "Tab",
  ArrowDown = "ArrowDown",
  ArrowUp = "ArrowUp",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  Space = " ",
}

export type NavigationKeyType = `${NavigationKey}` | NavigationKey
