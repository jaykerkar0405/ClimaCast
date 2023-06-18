// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: screen_width,
    height: screen_height,
    backgroundColor: theme().primary_background_color,
  },
});

export default styles;
