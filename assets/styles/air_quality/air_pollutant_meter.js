// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_height } from "../../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    air_pollutant_meter_container: {
      marginTop: 30,
    },
    air_pollutant_meter_inner_circle: {
      backgroundColor: colors.primary_background_color,
    },
    air_pollutant_meter_wrapper: {
      marginTop: 20,
      borderRadius: 10,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      height: 0.065 * screen_height,
      backgroundColor: colors.secondary_background_color,
    },
    air_pollutant_meter_label: {
      fontSize: 16,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    air_pollutant_meter_note: {
      fontSize: 16,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
