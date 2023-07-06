// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  hourly_forecast_container: {
    flexGrow: 0,
    marginTop: 15,
    width: 0.9 * screen_width,
  },
  hourly_forecast: {
    display: "flex",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 11,
    width: 0.25 * screen_width,
    height: 0.16 * screen_height,
    backgroundColor: theme().quaternary_background_color,
  },
  hourly_forecast_time: {
    top: 6.25,
    fontSize: 12.5,
    position: "absolute",
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  hourly_forecast_icon: {
    top: 32,
    position: "absolute",
    resizeMode: "contain",
    width: 0.085 * screen_width,
    height: 0.05 * screen_height,
  },
  hourly_forecast_condition: {
    bottom: 30,
    fontSize: 12,
    position: "absolute",
    fontFamily: "Poppins_400Regular",
    color: theme().secondary_text_color,
  },
  hourly_forecast_temperature: {
    bottom: 6.25,
    fontSize: 12,
    position: "absolute",
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  hourly_forecast_degree_symbol: {
    bottom: 13,
    right: 22.5,
    fontSize: 10,
    position: "absolute",
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
});

export default styles;
