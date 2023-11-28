// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      margin: 20,
      width: 0.9 * screen_width,
    },
    temperature_unit_tabs: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.secondary_text_color,
    },
    temperature_unit: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      height: 0.075 * screen_height,
      justifyContent: "space-between",
      borderColor: colors.secondary_text_color,
    },
    temperature_unit_information: {
      flexDirection: "row",
    },
    temperature_unit_icon: {
      fontSize: 23,
      marginHorizontal: 15,
    },
    temperature_unit_name: {
      fontSize: 14,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    radio_button: {
      fontSize: 23,
      marginRight: 15,
      color: colors.radio_button_color,
    },
    temperature_unit_note: {
      marginTop: 20,
      fontSize: 11.5,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
