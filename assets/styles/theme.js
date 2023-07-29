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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme().secondary_text_color,
  },
  theme: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    height: 0.075 * screen_height,
    justifyContent: "space-between",
    borderColor: theme().secondary_text_color,
  },
  theme_information: {
    flexDirection: "row",
  },
  theme_icon: {
    fontSize: 23,
    marginHorizontal: 15,
  },
  theme_name: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  radio_button: {
    fontSize: 23,
    marginRight: 15,
    color: theme().secondary_text_color,
  },
  theme_note: {
    marginTop: 20,
    fontSize: 11.5,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
});

export default styles;
