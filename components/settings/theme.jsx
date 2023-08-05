// React Hook Imports
import { useContext } from "react";

// React Native Component Imports
import { View, Text, TouchableOpacity, useColorScheme } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import { ThemeContext } from "../../contexts";
import get_computed_style from "../../assets/styles/theme";

const Theme = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);
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
          <View style={styles.theme_information}>
            <Ionicons
              name="contrast"
              color="#179881"
              style={styles.theme_icon}
            />
            <Text style={styles.theme_name}>Follow System</Text>
          </View>

          <Ionicons
            style={styles.radio_button}
            name={theme === "system" ? "radio-button-on" : "radio-button-off"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.theme}
          onPress={() => {
            change_theme("light");
          }}
        >
          <View style={styles.theme_information}>
            <Ionicons name="sunny" style={styles.theme_icon} color="#CCCC00" />
            <Text style={styles.theme_name}>Light</Text>
          </View>

          <Ionicons
            style={styles.radio_button}
            name={theme === "light" ? "radio-button-on" : "radio-button-off"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.theme, { borderBottomWidth: 0 }]}
          onPress={() => {
            change_theme("dark");
          }}
        >
          <View style={styles.theme_information}>
            <Ionicons name="moon" style={styles.theme_icon} color="#146C94" />
            <Text style={styles.theme_name}>Dark</Text>
          </View>

          <Ionicons
            style={styles.radio_button}
            name={theme === "dark" ? "radio-button-on" : "radio-button-off"}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.theme_note}>
        Note :- Follow System is only supported on operating systems that allow
        you to control the system-wide color scheme.
      </Text>
    </View>
  );
};

export default Theme;
