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
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  tab_bar: {
    elevation: 0,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 2.5,
    width: 0.9 * screen_width,
    height: 0.0975 * screen_height,
    marginLeft: 0.045 * screen_width,
    backgroundColor: theme().secondary_background_color,
  },
  focused_tab: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 0.154 * screen_width,
    backgroundColor: theme().tertiary_background_color,
  },
  focused_icon: {
    color: theme().tertiary_text_color,
  },
  unfocused_icon: {
    color: "#3b5681",
  },
});

export default styles;
