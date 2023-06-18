// React Native Component Imports
import { StyleSheet } from "react-native";

// App's Internal Imports
import { theme } from "../../constants";

const styles = StyleSheet.create({
  promotional_information_container: {
    marginTop: 10,
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
  },
  promotional_information_title: {
    fontFamily: "Poppins_500Medium",
    color: theme().primary_text_color,
  },
  promotional_information_value: {
    color: theme().tertiary_text_color,
    fontFamily: "Poppins_500Medium",
  },
  application_information_container: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
  },
  application_information_title: {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: theme().primary_text_color,
  },
  application_information_value: {
    fontSize: 10,
    color: theme().tertiary_text_color,
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
