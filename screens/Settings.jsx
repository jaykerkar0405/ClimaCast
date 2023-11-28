// React Hook Imports
import { useRef, useCallback, useState, useContext } from "react";

// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";

// App's Internal Imports
import { screen_height } from "../constants";
import get_computed_style from "../assets/styles/settings";
import { Theme, Footer, BottomSheet, TemperatureUnit } from "../components";

// App's Context Imports
import { ThemeContext, TemperatureUnitContext } from ".././contexts";

const Settings = ({ navigation: { navigate } }) => {
  const { colors } = useTheme();
  const bottom_sheet_ref = useRef(null);
  const styles = get_computed_style(colors);
  const { theme } = useContext(ThemeContext);
  const { temperature_unit } = useContext(TemperatureUnitContext);

  const [children, set_children] = useState(null);

  const toggle_bottom_sheet = useCallback((type) => {
    const is_active = bottom_sheet_ref.current.is_active();
    set_children(type);

    if (is_active) {
      bottom_sheet_ref.current.scroll_to(0);
    } else {
      bottom_sheet_ref.current.scroll_to(-0.5575 * screen_height);
    }
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.setting_section}>
          <Text style={styles.setting_title}>General</Text>
          <TouchableOpacity
            onPress={async () => {
              toggle_bottom_sheet("theme");

              await analytics().logScreenView({
                screen_name: "Theme",
                screen_class: "Theme",
              });
            }}
            style={styles.setting}
          >
            <View style={styles.setting_information}>
              <MaterialCommunityIcons
                name="brush-variant"
                style={styles.setting_icon}
                color={colors.tertiary_text_color}
              />

              <Text style={styles.setting_name}>Theme</Text>
            </View>

            <View style={styles.setting_button_container}>
              <Text style={styles.setting_button_text}>
                {theme === "system"
                  ? "Follow System"
                  : theme === "light"
                  ? "Light"
                  : "Dark"}
              </Text>
              <Ionicons name="chevron-forward" style={styles.setting_button} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => {
              toggle_bottom_sheet("temperature_unit");

              await analytics().logScreenView({
                screen_name: "TemperatureUnit",
                screen_class: "TemperatureUnit",
              });
            }}
            style={styles.setting}
          >
            <View style={styles.setting_information}>
              <Ionicons
                color="#4DA8C2"
                name="thermometer"
                style={styles.setting_icon}
              />

              <Text style={styles.setting_name}>Temperature Unit</Text>
            </View>

            <View style={styles.setting_button_container}>
              <Text style={styles.setting_button_text}>
                {temperature_unit === "metric"
                  ? "°C"
                  : temperature_unit === "imperial"
                  ? "°F"
                  : "K"}
              </Text>
              <Ionicons name="chevron-forward" style={styles.setting_button} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => {
              navigate("ReleaseNotes");
            }}
            style={styles.setting}
          >
            <View style={styles.setting_information}>
              <MaterialCommunityIcons
                name="update"
                color="#FF5722"
                style={styles.setting_icon}
              />

              <Text style={styles.setting_name}>Release Notes</Text>
            </View>

            <View>
              <Ionicons name="chevron-forward" style={styles.setting_button} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.setting_section}>
          <Text style={styles.setting_title}>Legal</Text>
          <TouchableOpacity
            onPress={() => {
              navigate("PrivacyPolicy");
            }}
            style={styles.setting}
          >
            <View style={styles.setting_information}>
              <Ionicons
                size={25}
                color="#0EA293"
                name="lock-closed"
                style={styles.setting_icon}
              />

              <Text style={styles.setting_name}>Privacy Policy</Text>
            </View>

            <View>
              <Ionicons name="chevron-forward" style={styles.setting_button} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate("TermsAndConditions");
            }}
            style={styles.setting}
          >
            <View style={styles.setting_information}>
              <Ionicons
                size={25}
                name="document"
                color="#2F58CD"
                style={styles.setting_icon}
              />

              <Text style={styles.setting_name}>Terms & Conditions</Text>
            </View>

            <View>
              <Ionicons name="chevron-forward" style={styles.setting_button} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate("OpenSourceLicences");
            }}
            style={[styles.setting, { marginBottom: 20 }]}
          >
            <View style={styles.setting_information}>
              <Ionicons
                size={25}
                name="terminal"
                color="#DB005B"
                style={styles.setting_icon}
              />

              <Text style={styles.setting_name}>Open Source Licences</Text>
            </View>

            <View>
              <Ionicons name="chevron-forward" style={styles.setting_button} />
            </View>
          </TouchableOpacity>
        </View>

        <Footer />
      </View>

      <BottomSheet ref={bottom_sheet_ref}>
        {children === "theme" && <Theme />}
        {children === "temperature_unit" && <TemperatureUnit />}
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Settings;
