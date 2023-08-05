// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    tab_bar: {
      marginTop: 17.5,
      display: "flex",
      borderWidth: 1.5,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      borderColor: colors.secondary_text_color,
    },
    tab: {
      display: "flex",
      borderRadius: 10,
      marginVertical: 4.5,
      alignItems: "center",
      justifyContent: "center",
      width: 0.447 * screen_width,
      height: 0.05 * screen_height,
    },
    tab_title: {
      fontSize: 13.75,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    focused_tab: {
      backgroundColor: colors.quaternary_background_color,
    },
    unfocused_tab: {
      backgroundColor: colors.primary_background_color,
    },
  });
};

export default get_computed_style;
