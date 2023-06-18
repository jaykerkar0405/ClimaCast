// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    width: screen_width,
    alignItems: "center",
    height: screen_height,
    justifyContent: "center",
    backgroundColor: theme().primary_background_color,
  },
  error_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  error_title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  error_title_text: {
    fontSize: 23.75,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  error_icon: {
    top: 48,
    right: 30,
    position: "absolute",
  },
  error_description: {
    fontSize: 14.25,
    textAlign: "center",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    fontFamily: "Poppins_400Regular",
    color: theme().secondary_text_color,
  },
  error_image: {
    marginTop: -60,
    resizeMode: "contain",
    width: 0.8 * screen_width,
    height: 0.7 * screen_height,
  },
  navigation_container: {
    bottom: "5%",
    position: "absolute",
  },
  navigation_button: {
    display: "flex",
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 0.8 * screen_width,
    height: 0.09 * screen_height,
    backgroundColor: theme().tertiary_text_color,
  },
  navigation_button_text: {
    fontSize: 15,
    color: "#ffffff",
    fontFamily: "Poppins_500Medium",
  },
});

export default styles;
