// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    main_container: {
      flex: 1,
      width: screen_width,
      height: screen_height,
    },
    walk_through_container: {
      height: 0.75 * screen_height,
      marginTop: 0.05 * screen_height,
    },
    pagination_container: {
      width: screen_width,
      height: 0.21 * screen_height,
    },
    pagination: {
      flexDirection: "row",
      justifyContent: "center",
    },
    pagination_indicator: {
      height: 3,
      width: 12.5,
      borderRadius: 2,
      marginHorizontal: 3,
      backgroundColor: colors.secondary_text_color,
    },
    current_slide: {
      width: 27.5,
      backgroundColor: colors.primary_text_color,
    },
    navigation_container: {
      left: 0,
      right: 0,
      bottom: "7.5%",
      alignItems: "center",
      position: "absolute",
      justifyContent: "center",
    },
    navigation_button: {
      borderRadius: 10,
      marginBottom: -10,
      alignItems: "center",
      justifyContent: "center",
      width: 0.8 * screen_width,
      height: 0.088 * screen_height,
      backgroundColor: colors.tertiary_text_color,
    },
    navigation_button_text: {
      fontSize: 15,
      color: "#ffffff",
      fontFamily: "Poppins_500Medium",
    },
    navigation_button_group: {
      display: "flex",
      flexDirection: "row",
    },
    pagination_button: {
      borderRadius: 10,
      marginBottom: -10,
      alignItems: "center",
      marginHorizontal: 20,
      justifyContent: "center",
      width: 0.4 * screen_width,
      height: 0.075 * screen_height,
      backgroundColor: colors.tertiary_text_color,
    },
    pagination_button_text: {
      fontSize: 14,
      color: "#ffffff",
      fontFamily: "Poppins_500Medium",
    },
  });
};

export default get_computed_style;
