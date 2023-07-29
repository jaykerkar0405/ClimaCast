// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: screen_width,
    height: screen_height,
    paddingHorizontal: 20,
    backgroundColor: theme().primary_background_color,
  },
  setting_section: {
    marginBottom: 10,
  },
  setting_title: {
    marginTop: 20,
    fontSize: 16.5,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  setting: {
    paddingLeft: 5,
    paddingRight: 10,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.75,
    width: 0.9 * screen_width,
    height: 0.085 * screen_height,
    justifyContent: "space-between",
    borderBottomColor: theme().secondary_text_color,
  },
  setting_information: { flexDirection: "row" },
  setting_icon: {
    fontSize: 24,
    marginBottom: 5,
  },
  setting_name: {
    fontSize: 14,
    marginHorizontal: 20,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  setting_button: {
    fontSize: 20,
    marginLeft: 0.125 * screen_width,
    color: theme().tertiary_text_color,
  },
});

export default styles;
