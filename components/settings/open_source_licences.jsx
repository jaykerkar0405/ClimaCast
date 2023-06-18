// React Native Component Imports
import { View, Text, Linking, Pressable } from "react-native";

// App's External Imports
import { ScrollView } from "react-native-gesture-handler";

// App's Internal Imports
import styles from "../../assets/styles/open_source_licences";
import { Footer } from "../../components";

const OpenSourceLicences = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.license}>
        <Text style={styles.license_title}>@expo-google-fonts/poppins</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/expo/google-fonts");
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/expo/google-fonts
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>
          @react-native-async-storage/async-storage
        </Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/react-native-async-storage/async-storage"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/react-native-async-storage/async-storage
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>
          @react-native-community/netinfo
        </Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/react-native-netinfo/react-native-netinfo"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/react-native-netinfo/react-native-netinfo
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>@react-navigation/bottom-tabs</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/react-navigation/react-navigation"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/react-navigation/react-navigation
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>@react-navigation/native</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/react-navigation/react-navigation"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/react-navigation/react-navigation
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>@react-navigation/native-stack</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/react-navigation/react-navigation"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/react-navigation/react-navigation
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>expo</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/expo/expo");
          }}
        >
          <Text style={styles.license_url}>https://github.com/expo/expo</Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>expo-location</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/expo/expo");
          }}
        >
          <Text style={styles.license_url}>https://github.com/expo/expo</Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>expo-sharing</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/expo/expo");
          }}
        >
          <Text style={styles.license_url}>https://github.com/expo/expo</Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>expo-splash-screen</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/expo/expo");
          }}
        >
          <Text style={styles.license_url}>https://github.com/expo/expo</Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>expo-status-bar</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/expo/expo");
          }}
        >
          <Text style={styles.license_url}>https://github.com/expo/expo</Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>lottie-react-native</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/react-native-community/lottie-react-native"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/react-native-community/lottie-react-native
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>react</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/facebook/react");
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/facebook/react
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>react-native</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/facebook/react-native");
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/facebook/react-native
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>react-native-gesture-handler</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/software-mansion/react-native-gesture-handler"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/software-mansion/react-native-gesture-handler
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>react-native-reanimated</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/software-mansion/react-native-reanimated"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/software-mansion/react-native-reanimated
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>react-native-safe-area-context</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/th3rdwave/react-native-safe-area-context"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/th3rdwave/react-native-safe-area-context
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>react-native-screens</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/software-mansion/react-native-screens"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/software-mansion/react-native-screens
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>react-native-vector-icons</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/oblador/react-native-vector-icons"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/oblador/react-native-vector-icons
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>react-native-view-shot</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL(
              "https://github.com/gre/react-native-view-shot"
            );
          }}
        >
          <Text style={styles.license_url}>
            https://github.com/gre/react-native-view-shot
          </Text>
        </Pressable>
      </View>

      <View style={styles.license}>
        <Text style={styles.license_title}>@babel/core</Text>
        <Pressable
          onPress={async () => {
            await Linking.openURL("https://github.com/babel/babel");
          }}
        >
          <Text style={styles.license_url}>https://github.com/babel/babel</Text>
        </Pressable>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default OpenSourceLicences;
