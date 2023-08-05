// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors, dark) => {
  return StyleSheet.create({
    container: {
      width: screen_width,
      height: screen_height,
      paddingHorizontal: 0.05 * screen_width,
    },
    header: {
      alignItems: "center",
      marginTop: 0.025 * screen_height,
    },
    title: {
      fontSize: 23.5,
      fontFamily: "Poppins_600SemiBold",
      color: colors.primary_text_color,
    },
    description: {
      marginTop: -5,
      fontSize: 13.75,
      textAlign: "center",
      marginHorizontal: 10,
      fontFamily: "Poppins_400Regular",
      color: colors.quaternary_text_color,
    },
    search: {
      marginVertical: 20,
      flexDirection: "row",
    },
    search_bar: {
      elevation: 3,
      fontSize: 14.75,
      paddingTop: 7.5,
      paddingLeft: 16,
      marginRight: 20,
      borderRadius: 10,
      width: 0.7 * screen_width,
      height: 0.059 * screen_height,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
      backgroundColor: dark
        ? colors.secondary_background_color
        : colors.primary_background_color,
    },
    search_icon: {
      paddingTop: 10.5,
      borderRadius: 10,
      textAlign: "center",
      width: 0.125 * screen_width,
      height: 0.059 * screen_height,
      color: colors.primary_text_color,
      backgroundColor: colors.quinary_background_color,
    },
  });
};

export default get_computed_style;
