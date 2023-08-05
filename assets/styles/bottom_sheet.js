// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { screen_width, screen_height } from "../../constants";

const get_computed_style = (colors, dark) => {
  return StyleSheet.create({
    container: {
      elevation: 10,
      borderRadius: 25,
      width: screen_width,
      position: "absolute",
      height: screen_height,
      top: screen_height - 35,
      shadowColor: dark ? "white" : null,
      backgroundColor: colors.primary_background_color,
    },
    indicator: {
      width: 75,
      height: 5,
      borderRadius: 5,
      marginVertical: 15,
      alignSelf: "center",
      backgroundColor: colors.secondary_text_color,
    },
  });
};

export default get_computed_style;
