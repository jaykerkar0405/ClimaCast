// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    main_container: {
      alignItems: "center",
      width: screen_width,
      height: screen_height,
      justifyContent: "center",
    },
    network_error_title: {
      fontSize: 23,
      textAlign: "center",
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    network_error_description: {
      fontSize: 13,
      textAlign: "center",
      marginHorizontal: 20,
      fontFamily: "Poppins_400Regular",
      color: colors.quaternary_text_color,
    },
    network_error_animation: {
      marginTop: 20,
      height: 0.45 * screen_height,
    },
    try_again_container: {
      marginTop: 0.1 * screen_height,
    },
    try_again_button: {
      display: "flex",
      borderRadius: 10,
      marginVertical: 15,
      alignItems: "center",
      justifyContent: "center",
      width: 0.8 * screen_width,
      height: 0.09 * screen_height,
      backgroundColor: colors.tertiary_text_color,
    },
    try_again_button_text: {
      fontSize: 15,
      color: "white",
      fontFamily: "Poppins_500Medium",
    },
  });
};

export default get_computed_style;
