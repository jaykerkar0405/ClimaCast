// React Native Component Imports
import { View, Text, Image, TouchableOpacity } from "react-native";

// React Hook Imports
import { useContext } from "react";

// App's External Imports
import { Feather, Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import styles from "../assets/styles/network";
const network_unavailable_image = require("../assets/images/network_unavailable.png");

// App's Context Imports
import { NetworkContext } from "../contexts";

const Network = () => {
  const { fetch_network_status } = useContext(NetworkContext); // Function For Fetching Network Status

  return (
    <View style={styles.main_container}>
      <View style={styles.network_unavailable_container}>
        <Text style={styles.network_unavailable_title}>
          Failed To Connect{"  "}
          <Feather name="wifi-off" size={25} color="#E74646" />
        </Text>

        <Text style={styles.network_unavailable_description}>
          Please check your internet connection. It looks like you're not
          connected to the internet.
        </Text>

        <Image
          source={network_unavailable_image}
          style={styles.network_unavailable_image}
        />
      </View>

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
