// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      marginTop: 15,
      marginHorizontal: 20,
      width: 0.9 * screen_width,
      marginBottom: 0.025 * screen_height,
    },
    policy: {
      marginBottom: 15,
    },
    policy_title: {
      fontSize: 16,
      fontFamily: "Poppins_600SemiBold",
      color: colors.primary_text_color,
    },
    policy_content: {
      marginTop: 5,
      fontSize: 12.5,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    external_url: {
      fontSize: 12.5,
      fontFamily: "Poppins_400Regular",
      color: colors.tertiary_text_color,
    },
  });
};

export default get_computed_style;
