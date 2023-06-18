// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// App's Internal Imports
import styles from "../../assets/styles/tab_bar";

const TabBar = ({ active_tab, set_active_tab }) => {
  return (
    <View style={styles.tab_bar}>
      <TouchableOpacity
        style={[
          styles.tab,
          active_tab === "weather" ? styles.focused_tab : styles.unfocused_tab,
        ]}
        onPress={() => {
          set_active_tab("weather");
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
        onPress={() => {
          set_active_tab("air_quality");
        }}
      >
        <Text style={styles.tab_title}>Air Quality</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
