// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_height } from "../../../constants";

const get_computed_style = (colors) => {
  return StyleSheet.create({
    favourites_error_animation: {
      marginVertical: 10,
      alignSelf: "center",
      height: 0.475 * screen_height,
    },
    favourites_error_text: {
      fontSize: 16.5,
      textAlign: "center",
      fontFamily: "Poppins_500Medium",
      color: colors.primary_text_color,
    },
  });
};

export default get_computed_style;
