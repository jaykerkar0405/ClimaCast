// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  weather_parameters: {
    display: "flex",
    flexDirection: "row",
    width: 0.9 * screen_width,
    height: 0.095 * screen_height,
    justifyContent: "space-between",
  },
  weather_parameter: {
    display: "flex",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 0.265 * screen_width,
    height: 0.125 * screen_height,
    backgroundColor: theme().quaternary_background_color,
  },
  weather_parameter_value: {
    fontSize: 12.75,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  weather_parameter_icon: {
    fontSize: 25,
    color: "#414141",
    marginVertical: 12.5,
  },
});

export default styles;
