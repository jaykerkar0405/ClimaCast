// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  favourites: {
    width: 0.87 * screen_width,
    height: 0.9 * screen_height,
  },
  favourites_header: {
    display: "flex",
    flexDirection: "row",
  },
  favourites_title: {
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
    color: theme().secondary_text_color,
  },
  favourites_icon: {
    marginLeft: 5,
    color: theme().tertiary_text_color,
  },
});

export default styles;
