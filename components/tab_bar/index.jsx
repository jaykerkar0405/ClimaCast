// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";

// App's Internal Imports
import get_computed_style from "../../assets/styles/tab_bar";

const TabBar = ({ active_tab, set_active_tab }) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);

  return (
    <View style={styles.tab_bar}>
      <TouchableOpacity
        style={[
          styles.tab,
          active_tab === "weather" ? styles.focused_tab : styles.unfocused_tab,
        ]}
        onPress={async () => {
          set_active_tab("weather");

          await analytics().logEvent("active_tab", {
            tab: "weather",
          });
        }}
      >
        <Text style={styles.tab_title}>Weather</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          active_tab === "air_quality"
            ? styles.focused_tab
            : styles.unfocused_tab,
        ]}
        onPress={async () => {
          set_active_tab("air_quality");

          await analytics().logEvent("active_tab", {
            tab: "weather",
          });
        }}
      >
        <Text style={styles.tab_title}>Air Quality</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
