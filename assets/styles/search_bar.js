// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors, dark) => {
  return StyleSheet.create({
    search_container: {
      display: "flex",
      marginTop: 15,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    search_bar: {
      elevation: 3,
      fontSize: 14.75,
      paddingTop: 7.5,
      paddingLeft: 16,
      marginRight: 20,
      borderRadius: 10,
      width: 0.65 * screen_width,
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
    back_icon: {
      marginLeft: -10,
      marginRight: 10,
      color: colors.primary_text_color,
    },
    auto_suggest_header: {
      marginTop: 20,
      flexDirection: "row",
      alignSelf: "center",
    },
    auto_suggest_title: {
      fontSize: 13,
      fontFamily: "Poppins_500Medium",
      color: colors.quaternary_text_color,
    },
    auto_suggest_icon: {
      color: colors.tertiary_text_color,
    },
    auto_suggest_container: {
      paddingHorizontal: 15,
      marginBottom: 0.025 * screen_height,
    },
    auto_suggest_item: {
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 0.75,
      width: 0.95 * screen_width,
      height: 0.08 * screen_height,
      justifyContent: "space-between",
      borderBottomColor: colors.secondary_text_color,
    },
    auto_suggest_item_title: {
      fontSize: 14.5,
      marginLeft: 10,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    auto_suggest_item_icon: {
      fontSize: 20,
      marginRight: 0.05 * screen_width,
      color: colors.tertiary_text_color,
    },
    search_error: {
      justifyContent: "center",
      height: 0.725 * screen_height,
    },
  });
};

export default get_computed_style;
