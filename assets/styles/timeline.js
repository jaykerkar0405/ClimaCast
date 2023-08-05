// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width } from "../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    timeline_container: {
      marginTop: 15,
      width: 0.9 * screen_width,
    },
    timeline_header: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    timeline_header_title: {
      fontSize: 15,
      marginLeft: 5,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    timeline_drawer: {
      display: "flex",
      flexDirection: "row",
      width: 0.25 * screen_width,
      justifyContent: "space-between",
    },
    timeline_drawer_title: {
      fontSize: 13,
      fontFamily: "Poppins_400Regular",
      color: colors.primary_text_color,
    },
    timeline_drawer_icon: {
      fontSize: 22,
      color: colors.primary_text_color,
      fontFamily: "Poppins_400Regular",
    },
    timeline: {
      marginTop: 7.5,
      display: "flex",
      marginRight: 15,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      width: 0.431 * screen_width,
    },
    timeline_date: {
      fontSize: 12.75,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    focused_tab: {
      backgroundColor: colors.secondary_background_color,
    },
    unfocused_tab: {
      borderWidth: 1.5,
      borderColor: colors.secondary_text_color,
    },
  });
};

export default get_computed_style;
