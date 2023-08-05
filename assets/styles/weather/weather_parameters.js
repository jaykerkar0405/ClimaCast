// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    weather_parameters: {
      marginTop: 15,
      display: "flex",
      flexDirection: "row",
      width: 0.9 * screen_width,
      justifyContent: "space-between",
    },
    weather_parameter: {
      display: "flex",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      width: 0.265 * screen_width,
      height: 0.125 * screen_height,
      backgroundColor: colors.secondary_background_color,
    },
    weather_parameter_title: {
      fontSize: 11.5,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    weather_parameter_value: {
      fontSize: 11.5,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    weather_parameter_icon: {
      fontSize: 23.5,
      marginVertical: 7.5,
      color: colors.weather_parameter_icon_color,
    },
    weather_parameter_degree_symbol: {
      right: 26,
      bottom: 13.5,
      fontSize: 10,
      position: "absolute",
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
