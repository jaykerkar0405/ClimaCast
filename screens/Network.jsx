// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// React Hook Imports
import { useContext, useEffect } from "react";

// App's External Imports
import LottieView from "lottie-react-native";
import analytics from "@react-native-firebase/analytics";
import { Feather, Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import get_computed_style from "../assets/styles/network";
const network_error = require("../assets/images/network_error.json");

// App's Context Imports
import { NetworkContext } from "../contexts";

const Network = ({ colors }) => {
  const styles = get_computed_style(colors);
  const { fetch_network_status } = useContext(NetworkContext); // Function For Fetching Network Status

  useEffect(() => {
    const initiate_analytics = async () => {
      await analytics().logScreenView({
        screen_name: "Network",
        screen_class: "Network",
      });
    };

    initiate_analytics();
  }, []);

  return (
    <View style={styles.main_container}>
      <Text style={styles.network_error_title}>
        Failed To Connect{"  "}
        <Feather name="wifi-off" size={25} color="#E74646" />
      </Text>

      <Text style={styles.network_error_description}>
        Please check your internet connection. It looks like you're not
        connected to the internet.
      </Text>

      <LottieView
        loop
        autoPlay
        source={network_error}
        style={styles.network_error_animation}
      />

      <View style={styles.try_again_container}>
        <TouchableOpacity
          style={styles.try_again_button}
          onPress={() => {
            fetch_network_status();
          }}
        >
          <Text style={styles.try_again_button_text}>
            Try Again <Ionicons name="refresh" size={18} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Network;
