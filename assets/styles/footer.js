// React Native Component Imports
import { StyleSheet } from "react-native";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    promotional_information_container: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
    },
    promotional_information_title: {
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    promotional_information_value: {
      fontFamily: "Poppins_500Medium",
      color: colors.tertiary_text_color,
    },
    application_information_container: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
    },
    application_information_title: {
      fontSize: 10,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    application_information_value: {
      fontSize: 10,
      color: colors.tertiary_text_color,
      fontFamily: "Poppins_400Regular",
    },
  });
};

export default get_computed_style;
