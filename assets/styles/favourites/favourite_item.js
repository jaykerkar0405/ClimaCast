// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  remove_favourite: {
    top: 10,
    right: 5,
    display: "flex",
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "#EE4848",
    width: 0.25 * screen_width,
    height: 0.075 * screen_height,
  },
  favourites: {
    display: "flex",
    elevation: 2.25,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    width: 0.85 * screen_width,
    height: 0.079 * screen_height,
    justifyContent: "space-between",
    backgroundColor: theme().primary_background_color,
  },
  weather_location: {
    fontSize: 14.75,
    marginLeft: 16.5,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  weather_icon: {
    resizeMode: "contain",
    width: 0.1 * screen_width,
    height: 0.04 * screen_height,
  },
  weather_information: {
    display: "flex",
    flexDirection: "row",
    width: 0.425 * screen_width,
    justifyContent: "space-between",
  },
  max_temperature: {
    fontSize: 15.5,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  min_temperature: {
    fontSize: 15.5,
    marginRight: 25,
    fontFamily: "Poppins_500Medium",
    color: theme().secondary_text_color,
  },
  degree_symbol: {
    right: 60,
    bottom: 18.5,
    fontSize: 10,
    position: "absolute",
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
});

export default styles;
