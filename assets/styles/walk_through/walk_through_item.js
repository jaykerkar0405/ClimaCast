// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    walk_through_image: {
      width: screen_width,
      resizeMode: "contain",
      height: 0.35 * screen_height,
    },
    walk_through_title: {
      fontSize: 23,
      marginTop: 25,
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
    walk_through_icon: {
      fontSize: 23,
    },
    walk_through_description: {
      marginTop: 5,
      fontSize: 12.5,
      lineHeight: 22.5,
      maxWidth: 0.9 * screen_width,
      fontFamily: "Poppins_400Regular",
      color: colors.quaternary_text_color,
    },
  });
};

export default get_computed_style;
