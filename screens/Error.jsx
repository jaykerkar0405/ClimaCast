// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// App's External Imports
import LottieView from "lottie-react-native";
import { MaterialIcons, Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import styles from "../assets/styles/error";
const error = require("../assets/images/error.json");

const Error = ({
  route: {
    params: {
      error_description = "We've run into a problem. Please click the button below to return home.",
      navigation_route = "Home",
      navigation_route_icon = "home",
    },
  },
  navigation,
}) => {
  return (
    <View style={styles.main_container}>
      <View style={styles.error_container}>
        <View>
          <View style={styles.error_title}>
            <Text style={styles.error_title_text}>
              Oh No! Something Went Wrong{"  "}
            </Text>
            <MaterialIcons
              size={30}
              color="#E74646"
              name="report-problem"
              style={styles.error_icon}
            />
          </View>

          <Text style={styles.error_description}>{error_description}</Text>
        </View>

        <LottieView
          loop
          autoPlay
          source={error}
          style={styles.error_animation}
        />
      </View>

      <View style={styles.navigation_container}>
        <TouchableOpacity
          style={styles.navigation_button}
          onPress={() => {
            navigation.navigate(navigation_route);
          }}
        >
          <Text style={styles.navigation_button_text}>
            Back To {navigation_route}
            {"  "}
            <Ionicons
              size={18}
              name={navigation_route_icon}
              style={styles.navigation_button_text}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Error;
