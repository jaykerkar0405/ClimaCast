// React Native Component Imports
import { View, Text, Image, TouchableOpacity } from "react-native";

// App's External Imports
import { MaterialIcons, Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import images from "../assets/images/error";
import styles from "../assets/styles/error";

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
        <View style={styles.error_title}>
          <Text style={styles.error_title_text}>
            Oh No! Something Went Wrong{"  "}
          </Text>
          <MaterialIcons
            name="report-problem"
            size={30}
            color="#E74646"
            style={styles.error_icon}
          />
        </View>

        <Text style={styles.error_description}>{error_description}</Text>

        <Image source={images.error} style={styles.error_image} />
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
