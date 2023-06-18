// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  utility_components: {
    display: "flex",
    flexDirection: "row",
    width: 0.9 * screen_width,
    height: 0.095 * screen_height,
    justifyContent: "space-between",
  },
  utility: {
    borderRadius: 10,
    width: 0.425 * screen_width,
    height: 0.06 * screen_height,
    backgroundColor: theme().secondary_background_color,
  },
  utility_content: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 11.5,
    paddingHorizontal: 10,
    justifyContent: "space-evenly",
  },
  utility_text: {
    fontSize: 13.75,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  utility_icon: {
    fontSize: 22,
    color: "#414141",
  },
});

export default styles;
