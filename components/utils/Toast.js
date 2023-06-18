import { ToastAndroid } from "react-native";

export default function Toast(message) {
  return ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
}
