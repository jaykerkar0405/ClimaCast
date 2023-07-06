// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme, screen_height } from "../../../constants";

const styles = StyleSheet.create({
  air_pollutant_meter_container: {
    marginTop:30,
  },
  air_pollutant_meter: {
    marginTop: 20,
    display: "flex",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 0.065 * screen_height,
    backgroundColor: theme().secondary_background_color,
  },
  air_pollutant_meter_label: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  air_pollutant_meter_note: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
});

export default styles;
