// React Native Component Imports
import { View, Text, Linking, Pressable } from "react-native";

// App's External Imports
import * as Application from "expo-application";
import { useTheme } from "@react-navigation/native";

// App's Internal Imports
import get_computed_style from "../../assets/styles/footer";

const Footer = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <>
      <View style={styles.promotional_information_container}>
        <Text style={styles.promotional_information_title}>Powered By </Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://www.bytewise.ml");
          }}
        >
          <Text style={styles.promotional_information_value}>ByteWise</Text>
        </Pressable>
      </View>

      <View style={styles.application_information_container}>
        <Text style={styles.application_information_title}>
          Developer Name:
        </Text>
        <Text style={styles.application_information_value}> Jay Kerkar</Text>
      </View>

      <View style={styles.application_information_container}>
        <Text style={styles.application_information_title}>App Version:</Text>
        <Text style={styles.application_information_value}>
          {" "}
          {Application.nativeApplicationVersion}
        </Text>
        <Text style={styles.application_information_title}>
          {"  "}| Build Version:
        </Text>
        <Text style={styles.application_information_value}>
          {" "}
          {Application.nativeBuildVersion}
        </Text>
      </View>
    </>
  );
};

export default Footer;
