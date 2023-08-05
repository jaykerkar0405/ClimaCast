// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    main_container: {
      width: screen_width,
      alignItems: "center",
      height: screen_height,
      justifyContent: "center",
      backgroundColor: colors.primary_background_color,
    },
    error_container: {
      alignItems: "center",
      height: 0.725 * screen_height,
      justifyContent: "space-evenly",
    },
    error_title: {
      flexDirection: "row",
      alignItems: "center",
    },
    error_title_text: {
      fontSize: 23.5,
      textAlign: "center",
      marginHorizontal: 30,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    error_description: {
      marginTop: 5,
      fontSize: 14,
      textAlign: "center",
      marginHorizontal: 10,
      paddingHorizontal: 10,
      fontFamily: "Poppins_400Regular",
      color: colors.quaternary_text_color,
    },
    error_animation: {
      height: 0.4 * screen_height,
    },
    navigation_container: {
      marginTop: 0.05 * screen_height,
    },
    navigation_button: {
      display: "flex",
      borderRadius: 10,
      marginVertical: 15,
      alignItems: "center",
      justifyContent: "center",
      width: 0.8 * screen_width,
      height: 0.09 * screen_height,
      backgroundColor: colors.tertiary_text_color,
    },
    navigation_button_text: {
      fontSize: 15,
      color: "#ffffff",
      fontFamily: "Poppins_500Medium",
    },
  });
};

export default get_computed_style;
