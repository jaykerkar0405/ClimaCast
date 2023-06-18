// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    borderRadius: 25,
    width: screen_width,
    position: "absolute",
    height: screen_height,
    top: screen_height - 35,
    backgroundColor: theme().primary_background_color,
  },
  indicator: {
    width: 75,
    height: 5,
    borderRadius: 5,
    alignSelf: "center",
    marginVertical: 15,
    backgroundColor: theme().secondary_text_color,
  },
});

export default styles;
