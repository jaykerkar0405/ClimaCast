// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    version_control_section: {
      elevation: 2.5,
      borderRadius: 10,
      alignItems: "center",
      width: 0.8 * screen_width,
      height: 0.55 * screen_height,
      justifyContent: "space-evenly",
      backgroundColor: colors.secondary_background_color,
    },
    version_control_animation: {
      height: 0.2 * screen_height,
      marginBottom: 0.025 * screen_height,
    },
    version_control_content: {
      width: 0.65 * screen_width,
    },
    version_control_title: {
      fontSize: 15.5,
      marginBottom: 5,
      textAlign: "center",
      color: colors.primary_text_color,
      fontFamily: "Poppins_600SemiBold",
    },
    version_control_description: {
      fontSize: 12,
      color: "white",
      textAlign: "center",
      color: colors.primary_text_color,
      fontFamily: "Poppins_400Regular",
    },
    version_control_button: {
      display: "flex",
      borderRadius: 10,
      marginVertical: 15,
      alignItems: "center",
      justifyContent: "center",
      width: 0.65 * screen_width,
      height: 0.075 * screen_height,
      backgroundColor: colors.tertiary_text_color,
    },
    version_control_button_text: {
      fontSize: 14.5,
      color: "white",
      fontFamily: "Poppins_500Medium",
    },
  });
};

export default get_computed_style;
