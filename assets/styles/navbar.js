// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors, dark) => {
  return StyleSheet.create({
    header: {
      borderBottomWidth: dark ? 0.25 : 0,
      borderBottomColor: colors.secondary_text_color,
      backgroundColor: colors.primary_background_color,
    },
    header_title: {
      marginTop: 5,
      fontSize: 17.5,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    tab_bar: {
      elevation: 0,
      borderTopWidth: 0,
      width: screen_width,
      height: 0.11 * screen_height,
      backgroundColor: colors.secondary_background_color,
    },
    tab: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    focused_icon: {
      borderRadius: 20,
      paddingVertical: 5,
      textAlign: "center",
      position: "absolute",
      top: 0.018 * screen_height,
      width: 0.175 * screen_width,
      height: 0.045 * screen_height,
      color: colors.tertiary_text_color,
      backgroundColor: colors.primary_background_color,
    },
    unfocused_icon: {
      position: "absolute",
      top: 0.024 * screen_height,
      color: colors.bottom_tab_tint_color,
    },
    focused_title: {
      fontSize: 12,
      position: "absolute",
      bottom: 0.0115 * screen_height,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    unfocused_title: {
      bottom: 9.5,
      fontSize: 12,
      position: "absolute",
      fontFamily: "Poppins_400Regular",
      color: colors.bottom_tab_tint_color,
    },
  });
};

export default get_computed_style;
