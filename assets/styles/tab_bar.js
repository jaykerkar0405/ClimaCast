// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  tab_bar: {
    marginTop: 17.5,
    display: "flex",
    borderWidth: 1.5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: theme().secondary_text_color,
  },
  tab: {
    display: "flex",
    borderRadius: 10,
    marginVertical: 3.5,
    alignItems: "center",
    justifyContent: "center",
    width: 0.45 * screen_width,
    height: 0.05 * screen_height,
  },
  tab_title: {
    fontSize: 13.75,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  focused_tab: {
    backgroundColor: "#B8E7E1",
  },
  unfocused_tab: {
    backgroundColor: "#FFFFFF",
  },
});

export default styles;
