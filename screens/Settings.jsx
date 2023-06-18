// React Hook Imports
import { useRef, useCallback, useState } from "react";

// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// App's External Imports
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import styles from "../assets/styles/settings";
import {
  Theme,
  Footer,
  BottomSheet,
  PrivacyPolicy,
  OpenSourceLicences,
  TermsAndConditions,
} from "../components";

const Settings = () => {
  const bottom_sheet_ref = useRef(null);
  const [children, set_children] = useState(null);

  const toggle_bottom_sheet = useCallback((type) => {
    const is_active = bottom_sheet_ref.current.is_active();
    set_children(type);

    if (is_active) {
      bottom_sheet_ref.current.scroll_to(0);
    } else {
      bottom_sheet_ref.current.scroll_to(-520);
    }
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.setting_section}>
          <Text style={styles.setting_title}>General</Text>
          <TouchableOpacity
            onPress={() => {
              toggle_bottom_sheet("theme");
            }}
            style={styles.setting}
          >
            <View>
              <MaterialCommunityIcons
                name="brush-variant"
                color="#7149C6"
                style={styles.setting_icon}
              />
            </View>

            <View>
              <Text style={styles.setting_name}>
                Theme{"                            "}
              </Text>
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
              toggle_bottom_sheet("privacy_policy");
            }}
            style={styles.setting}
          >
            <View>
              <Ionicons
                name="lock-closed"
                color="#0EA293"
                style={styles.setting_icon}
                size={25}
              />
            </View>

            <View>
              <Text style={styles.setting_name}>
                Privacy Policy{"                "}
              </Text>
            </View>

            <View>
              <Ionicons
                name="chevron-forward"
                style={styles.setting_button}
                size={25}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              toggle_bottom_sheet("terms_and_conditions");
            }}
            style={styles.setting}
          >
            <View>
              <Ionicons
                name="document"
                color="#2F58CD"
                style={styles.setting_icon}
                size={25}
              />
            </View>

            <View>
              <Text style={styles.setting_name}>
                Terms & Conditions{"     "}
              </Text>
            </View>

            <View>
              <Ionicons
                name="chevron-forward"
                style={styles.setting_button}
                size={25}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              toggle_bottom_sheet("open_source_licences");
            }}
            style={styles.setting}
          >
            <View>
              <Ionicons
                name="terminal"
                color="#DB005B"
                style={styles.setting_icon}
                size={25}
              />
            </View>

            <View>
              <Text style={styles.setting_name}>Open Source Licences</Text>
            </View>

            <View>
              <Ionicons
                name="chevron-forward"
                style={styles.setting_button}
                size={25}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Footer />
      </View>

      <BottomSheet ref={bottom_sheet_ref}>
        {children === "theme" && <Theme />}
        {children === "privacy_policy" && <PrivacyPolicy />}
        {children === "terms_and_conditions" && <TermsAndConditions />}
        {children === "open_source_licences" && <OpenSourceLicences />}
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Settings;
