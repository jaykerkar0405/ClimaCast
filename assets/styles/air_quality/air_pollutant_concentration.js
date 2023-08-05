// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_height } from "../../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    air_pollutant_concentration_container: {
      borderRadius: 10,
      marginTop: 0.125 * screen_height,
      marginBottom: 0.025 * screen_height,
      backgroundColor: colors.quaternary_background_color,
    },
    air_pollutant_concentration: {
      display: "flex",
      alignItems: "center",
      borderBottomWidth: 1,
      flexDirection: "row",
      paddingHorizontal: 20,
      height: 0.0615 * screen_height,
      justifyContent: "space-between",
      borderBottomColor: colors.secondary_text_color,
    },
    air_pollutant_concentration_title: {
      fontSize: 13,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    air_pollutant_concentration_value: {
      fontSize: 13,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
