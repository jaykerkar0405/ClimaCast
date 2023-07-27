// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  weather_information: {
    marginTop: 20,
    display: "flex",
    marginBottom: 35,
    justifyContent: "center",
    width: 0.9 * screen_width,
    height: 0.54 * screen_height,
  },
  theoretical_information_container: {
    borderRadius: 10,
    backgroundColor: theme().secondary_background_color,
  },
  theoretical_information: {
    display: "flex",
    alignItems: "center",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    width: 0.9 * screen_width,
    height: 0.0615 * screen_height,
    justifyContent: "space-between",
    borderBottomColor: theme().secondary_text_color,
  },
  theoretical_information_title: {
    fontSize: 13,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  theoretical_information_value: {
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  theoretical_information_degree_symbol: {
    right: 10,
    bottom: 20,
    fontSize: 10,
    position: "absolute",
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  wind_information_container: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wind_information: {
    borderRadius: 10,
    width: 0.43 * screen_width,
    backgroundColor: theme().quaternary_background_color,
  },
  wind_component: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    width: 0.43 * screen_width,
    height: 0.0575 * screen_height,
    justifyContent: "space-between",
    borderBottomColor: theme().secondary_text_color,
  },
  wind_component_title: {
    fontSize: 12.5,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  wind_component_value: {
    fontSize: 12.5,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  wind_direction: {
    borderRadius: 10,
    paddingVertical: 4,
    alignItems: "center",
    width: 0.43 * screen_width,
    justifyContent: "space-evenly",
    height: 0.228 * screen_height,
    backgroundColor: theme().quaternary_background_color,
  },
  wind_direction_title: {
    fontSize: 13,
    fontFamily: "Poppins_500Medium",
  },
  wind_direction_value: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
