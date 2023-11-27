// React Native Component Imports
import { Text, View, Modal, Linking, TouchableOpacity } from "react-native";

// App's External Imports
import LottieView from "lottie-react-native";

// App's Internal Imports
import get_computed_style from "../../assets/styles/version_control";
const version_control = require("../../assets/images/version_control.json");

const VersionControl = ({
  colors,
  is_visible,
  critical_update_download_url,
}) => {
  const styles = get_computed_style(colors);

  return (
    <Modal transparent={true} visible={is_visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.version_control_section}>
          <LottieView
            loop
            autoPlay
            source={version_control}
            style={styles.version_control_animation}
          />

          <View style={styles.version_control_content}>
            <Text style={styles.version_control_title}>
              App Update Required!
            </Text>
            <Text style={styles.version_control_description}>
              We have added new features and fix some bugs to make your
              experience seamless
            </Text>
          </View>

          <TouchableOpacity
            style={styles.version_control_button}
            onPress={async () => {
              await Linking.openURL(critical_update_download_url);
            }}
          >
            <Text style={styles.version_control_button_text}>Update App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default VersionControl;
