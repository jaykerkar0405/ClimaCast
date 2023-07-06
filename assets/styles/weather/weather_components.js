// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  weather: {
    marginTop: 15,
    display: "flex",
    borderRadius: 10,
    justifyContent: "center",
    width: 0.925 * screen_width,
    height: 0.35 * screen_height,
    backgroundColor: theme().secondary_background_color,
  },
  upper_panel: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 13.75,
    justifyContent: "flex-end",
  },
  weather_icon: {
    top: -110,
    left: 40,
    position: "absolute",
    resizeMode: "contain",
    width: 0.35 * screen_width,
    height: 0.35 * screen_height,
  },
  weather_temperature: {
    fontSize: 50,
    marginHorizontal: 40,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  weather_degree_symbol: {
    right: 48,
    bottom: 70,
    position: "absolute",
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  lower_panel: {
    marginTop: 10,
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
    backgroundColor: theme().tertiary_background_color,
  },
  weather_parameter_title: {
    fontSize: 11.5,
    marginTop: 2,
    fontFamily: "Poppins_400Regular",
    color: theme().secondary_text_color,
  },
  weather_parameter_value: {
    fontSize: 11.5,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
});

export default styles;
