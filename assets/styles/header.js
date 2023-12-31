// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 0.015 * screen_height,
    },
    left_panel: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    left_panel_title: {
      fontSize: 13.5,
      marginBottom: -5,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    weather_icon: {
      right: -12,
      bottom: -12,
      position: "absolute",
      resizeMode: "contain",
      width: 0.055 * screen_width,
      height: 0.055 * screen_height,
    },
    right_panel: {
      display: "flex",
      borderWidth: 1.5,
      borderRadius: 10,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 10,
      justifyContent: "center",
      width: 0.4 * screen_width,
      marginLeft: 0.075 * screen_width,
      borderColor: colors.secondary_text_color,
    },
    right_panel_title: {
      fontSize: 13.5,
      marginTop: 3.5,
      marginLeft: 7.5,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
