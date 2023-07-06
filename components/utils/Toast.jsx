// React Native Component Imports
import { ToastAndroid } from "react-native";

const Toast = (message) => {
  return ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export default Toast;
