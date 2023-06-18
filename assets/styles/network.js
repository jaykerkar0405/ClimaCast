// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    alignItems: "center",
    width: screen_width,
    height: screen_height,
    justifyContent: "center",
    backgroundColor: theme().primary_background_color,
  },
  network_unavailable_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  network_unavailable_title: {
    fontSize: 23.75,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  network_unavailable_description: {
    fontSize: 14.25,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    color: theme().secondary_text_color,
  },
  network_unavailable_image: {
    marginTop: -60,
    resizeMode: "contain",
    width: 0.8 * screen_width,
    height: 0.7 * screen_height,
  },
  try_again_container: {
    bottom: "5%",
    position: "absolute",
  },
  try_again_button: {
    display: "flex",
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 0.8 * screen_width,
    height: 0.09 * screen_height,
    backgroundColor: theme().tertiary_text_color,
  },
  try_again_button_text: {
    fontSize: 15,
    color: "white",
    fontFamily: "Poppins_500Medium",
  },
});

export default styles;
