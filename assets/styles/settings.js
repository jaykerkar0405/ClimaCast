// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 18,
    },
    setting_section: {
      marginBottom: 10,
    },
    setting_title: {
      marginTop: 20,
      fontSize: 16.5,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    setting: {
      paddingLeft: 5,
      paddingRight: 10,
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 0.75,
      width: 0.9 * screen_width,
      height: 0.085 * screen_height,
      justifyContent: "space-between",
      borderBottomColor: colors.secondary_text_color,
    },
    setting_information: { flexDirection: "row" },
    setting_icon: {
      fontSize: 24,
    },
    setting_name: {
      fontSize: 14,
      marginHorizontal: 20,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    setting_button_container: {
      flexDirection: "row",
    },
    setting_button_text: {
      fontSize: 12.75,
      fontFamily: "Poppins_400Regular",
      color: colors.secondary_text_color,
    },
    setting_button: {
      fontSize: 20,
      marginLeft: 0.025 * screen_width,
      color: colors.tertiary_text_color,
    },
  });
};

export default get_computed_style;
