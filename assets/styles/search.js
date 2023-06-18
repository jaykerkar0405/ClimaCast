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
  header: {
    display: "flex",
    alignItems: "center",
    marginTop: 0.07 * screen_height,
  },
  heading: {
    fontSize: 23.5,
    fontFamily: "Poppins_600SemiBold",
    color: theme().primary_text_color,
  },
  description: {
    marginTop: -3,
    fontSize: 13.75,
    textAlign: "center",
    marginHorizontal: 10,
    fontFamily: "Poppins_400Regular",
    color: theme().secondary_text_color,
  },
  search: {
    display: "flex",
    marginVertical: 25,
    flexDirection: "row",
  },
  search_bar: {
    elevation: 3.5,
    fontSize: 14.75,
    paddingTop: 7.5,
    paddingLeft: 16,
    marginRight: 20,
    borderRadius: 10,
    width: 0.7 * screen_width,
    backgroundColor: "#F9FFFE",
    height: 0.059 * screen_height,
    fontFamily: "Poppins_400Regular",
  },
  search_icon: {
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 10.5,
    backgroundColor: "#9BE0CB",
    width: 0.125 * screen_width,
    height: 0.059 * screen_height,
  },
});

export default styles;
