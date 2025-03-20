import { OneSignal } from "react-native-onesignal"

export function tagUserInfoCreate() {
  // OneSignal.User.addTag("user_email", email)
  // OneSignal.User.removeTag("user_email")
  // OneSignal.User.addTags({
  //   user_name: 'Tiago',
  //   user_email: 'tiagomartinscc@hotmail.com'
  // })
  // OneSignal.User.removeTag("user_name")
  // OneSignal.User.removeTag("user_email")
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount)
}
