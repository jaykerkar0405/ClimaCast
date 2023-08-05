// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    favourites: {
      width: 0.87 * screen_width,
      height: 0.9 * screen_height,
    },
    favourites_header: {
      display: "flex",
      flexDirection: "row",
    },
    favourites_title: {
      fontSize: 15,
      fontFamily: "Poppins_500Medium",
      color: colors.quaternary_text_color,
    },
    favourites_icon: {
      marginLeft: 5,
      color: colors.tertiary_text_color,
    },
  });
};

export default get_computed_style;
