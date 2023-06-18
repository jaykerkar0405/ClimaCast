// React Hook Imports
import { useContext } from "react";

// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// App's External Imports
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import styles from "../../assets/styles/theme";
import { ThemeContext } from "../../contexts";
import { Footer } from "../../components";

const Theme = () => {
  const { theme, change_theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.theme_tabs}>
        <TouchableOpacity
          style={styles.theme}
          onPress={() => {
            change_theme("system");
          }}
        >
          <Ionicons name="contrast" style={styles.theme_icon} color="#179881" />
          <Text style={styles.theme_name}>Follow System</Text>
          <Ionicons
            name={theme === "system" ? "radio-button-on" : "radio-button-off"}
            style={styles.radio_button}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.theme}
          onPress={() => {
            change_theme("light");
          }}
        >
          <Ionicons name="sunny" style={styles.theme_icon} color="#CCCC00" />
          <Text style={styles.theme_name}>Light{"                 "}</Text>
          <Ionicons
            name={theme === "light" ? "radio-button-on" : "radio-button-off"}
            style={styles.radio_button}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.theme, { borderBottomWidth: 0 }]}
          onPress={() => {
            change_theme("dark");
          }}
        >
          <Ionicons name="moon" style={styles.theme_icon} color="#146C94" />
          <Text style={styles.theme_name}>Dark{"                  "}</Text>
          <Ionicons
            name={theme === "dark" ? "radio-button-on" : "radio-button-off"}
            style={styles.radio_button}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.information}>
        Note :- Follow System is only supported on operating systems that allow
        you to control the system-wide color scheme.
      </Text>

      <Footer />
    </View>
  );
};

export default Theme;
