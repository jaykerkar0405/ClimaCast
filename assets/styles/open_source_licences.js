// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 20,
    height: screen_height,
    width: 0.9 * screen_width,
    marginBottom: 0.235 * screen_height,
    backgroundColor: theme().primary_background_color,
  },
  license: {
    marginBottom: 15,
  },
  license_title: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
    color: theme().primary_text_color,
  },
  license_url: {
    fontSize: 13.25,
    fontFamily: "Poppins_400Regular",
    color: theme().tertiary_text_color,
  },
});

export default styles;
