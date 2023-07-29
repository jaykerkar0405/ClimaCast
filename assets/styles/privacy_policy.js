// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 20,
    width: 0.9 * screen_width,
    marginBottom: 0.025 * screen_height,
    backgroundColor: theme().primary_background_color,
  },
  policy: {
    marginBottom: 15,
  },
  policy_title: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: theme().primary_text_color,
  },
  policy_content: {
    marginTop: 5,
    fontSize: 12.5,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  external_url: {
    fontSize: 12.5,
    fontFamily: "Poppins_400Regular",
    color: theme().tertiary_text_color,
  },
});

export default styles;
