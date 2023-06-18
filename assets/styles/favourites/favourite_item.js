// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_width, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  remove_favourite: {
    top: 15,
    right: 5,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    width: 0.25 * screen_width,
    height: 0.075 * screen_height,
  },
  favourites: {
    display: "flex",
    elevation: 2.25,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 4,
    alignItems: "center",
    flexDirection: "row",
    width: 0.85 * screen_width,
    height: 0.082 * screen_height,
    justifyContent: "space-around",
    backgroundColor: theme().primary_background_color,
  },
  weather_parameters: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: 0.88 * screen_width,
  },
  weather_location_container: {
    left: 20,
    position: "absolute",
  },
  weather_location: {
    marginLeft: 5,
    fontSize: 15.5,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  weather_icon_container: {
    width: screen_width,
    height: 0.04 * screen_height,
  },
  weather_icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  weather_information: {
    right: 30,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-evenly",
  },
  max_temperature: {
    fontSize: 15.5,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  min_temperature: {
    fontSize: 15.5,
    marginLeft: 12.75,
    fontFamily: "Poppins_500Medium",
    color: theme().secondary_text_color,
  },
});

export default styles;
