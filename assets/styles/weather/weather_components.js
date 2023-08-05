// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    weather: {
      marginTop: 15,
      display: "flex",
      borderRadius: 10,
      justifyContent: "center",
      width: 0.925 * screen_width,
      height: 0.32 * screen_height,
      backgroundColor: colors.secondary_background_color,
    },
    upper_panel: {
      display: "flex",
      flexDirection: "row",
      marginVertical: 13.75,
      justifyContent: "flex-end",
    },
    weather_icon: {
      top: -85,
      left: 40,
      position: "absolute",
      resizeMode: "contain",
      width: 0.3 * screen_width,
      height: 0.3 * screen_height,
    },
    weather_temperature: {
      fontSize: 50,
      marginHorizontal: 45,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    weather_degree_symbol: {
      right: 50,
      bottom: 70,
      position: "absolute",
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    lower_panel: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    weather_parameter: {
      display: "flex",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      width: 0.225 * screen_width,
      height: 0.125 * screen_height,
      backgroundColor: colors.tertiary_background_color,
    },
    weather_parameter_icon: {
      color: colors.weather_component_icon_color,
    },
    weather_parameter_title: {
      marginTop: 2,
      fontSize: 11.5,
      fontFamily: "Poppins_400Regular",
      color: colors.quaternary_text_color,
    },
    weather_parameter_value: {
      fontSize: 11.5,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
