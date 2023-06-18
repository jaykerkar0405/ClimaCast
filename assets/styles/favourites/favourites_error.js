// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  favourites_error: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 0.9 * screen_width,
    height: 0.55 * screen_height,
    backgroundColor: theme().primary_background_color,
  },
  favourites_error_image: {
    resizeMode: "contain",
    width: 0.7 * screen_width,
    height: 0.275 * screen_height,
  },
  favourites_error_text: {
    fontSize: 15.5,
    marginTop: 0.01 * screen_height,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
});

export default styles;
