// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: 0.9 * screen_width,
    backgroundColor: theme().primary_background_color,
  },
  theme_tabs: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: theme().secondary_text_color,
  },
  theme: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1.5,
    height: 0.075 * screen_height,
    borderColor: theme().secondary_text_color,
  },
  theme_icon: {
    fontSize: 24,
    marginHorizontal: 15,
  },
  theme_name: {
    fontSize: 14.75,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  radio_button: {
    fontSize: 24,
    marginLeft: 0.3 * screen_width,
    color: theme().secondary_text_color,
  },
  information: {
    fontSize: 12,
    marginTop: 20,
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
