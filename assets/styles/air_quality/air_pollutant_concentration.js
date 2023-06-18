// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  air_pollutant_concentration_container: {
    marginTop: 105,
    borderRadius: 10,
    backgroundColor: theme().quaternary_background_color,
  },
  air_pollutant_concentration: {
    display: "flex",
    alignItems: "center",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 0.0615 * screen_height,
    justifyContent: "space-between",
    borderBottomColor: theme().secondary_text_color,
  },
  air_pollutant_concentration_title: {
    fontSize: 13,
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  air_pollutant_concentration_value: {
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
});

export default styles;
