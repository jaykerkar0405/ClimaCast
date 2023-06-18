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
    marginBottom: 20,
  },
  setting_title: {
    fontSize: 17.5,
    marginTop: 20,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  setting: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.75,
    width: 0.9 * screen_width,
    height: 0.085 * screen_height,
    borderBottomColor: theme().secondary_text_color,
  },
  setting_icon: {
    fontSize: 24,
    marginBottom: 5,
  },
  setting_name: {
    fontSize: 15,
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
