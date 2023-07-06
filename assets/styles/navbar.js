// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  header: {
    elevation: 10,
    backgroundColor: theme().primary_background_color,
  },
  header_title: {
    marginTop: 5,
    fontSize: 17.5,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  tab_bar: {
    elevation: 0,
    width: screen_width,
    height: 0.115 * screen_height,
    backgroundColor: theme().secondary_background_color,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  focused_icon: {
    borderRadius: 20,
    paddingVertical: 5,
    textAlign: "center",
    position: "absolute",
    top: 0.018 * screen_height,
    width: 0.175 * screen_width,
    height: 0.045 * screen_height,
    color: theme().tertiary_text_color,
    backgroundColor: theme().primary_background_color,
  },
  unfocused_icon: {
    color: "#3b5681",
    position: "absolute",
    top: 0.024 * screen_height,
  },
  focused_title: {
    fontSize: 12,
    marginTop: 2.5,
    position: "absolute",
    bottom: 0.0145 * screen_height,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  unfocused_title: {
    bottom: 12,
    fontSize: 12,
    marginTop: 12,
    color: "#3b5681",
    position: "absolute",
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
