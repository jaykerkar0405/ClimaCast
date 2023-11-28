// React Hook Imports
import { useContext } from "react";

// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";

// App's Internal Imports
import get_computed_style from "../../assets/styles/temperature_unit";

// App's Context Imports
import { TemperatureUnitContext } from "../../contexts";

const TemperatureUnit = () => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);
  const { temperature_unit, change_temperature_unit } = useContext(
    TemperatureUnitContext
  );

  return (
    <View style={styles.container}>
      <View style={styles.temperature_unit_tabs}>
        <TouchableOpacity
          style={styles.temperature_unit}
          onPress={async () => {
            change_temperature_unit("metric");

            await analytics().logEvent("change_temperature_unit", {
              temperature_unit: "metric",
            });
          }}
        >
          <View style={styles.temperature_unit_information}>
            <MaterialCommunityIcons
              color="#8796A5"
              name="temperature-celsius"
              style={styles.temperature_unit_icon}
            />
            <Text style={styles.temperature_unit_name}>Celsius</Text>
          </View>

          <Ionicons
            style={styles.radio_button}
            name={
              temperature_unit === "metric"
                ? "radio-button-on"
                : "radio-button-off"
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.temperature_unit}
          onPress={async () => {
            change_temperature_unit("imperial");

            await analytics().logEvent("change_temperature_unit", {
              temperature_unit: "imperial",
            });
          }}
        >
          <View style={styles.temperature_unit_information}>
            <MaterialCommunityIcons
              color="#DAA520"
              name="temperature-fahrenheit"
              style={styles.temperature_unit_icon}
            />
            <Text style={styles.temperature_unit_name}>Fahrenheit</Text>
          </View>

          <Ionicons
            style={styles.radio_button}
            name={
              temperature_unit === "imperial"
                ? "radio-button-on"
                : "radio-button-off"
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.temperature_unit, { borderBottomWidth: 0 }]}
          onPress={async () => {
            change_temperature_unit("standard");

            await analytics().logEvent("change_temperature_unit", {
              temperature_unit: "standard",
            });
          }}
        >
          <View style={styles.temperature_unit_information}>
            <MaterialCommunityIcons
              color="#8E4585"
              name="temperature-kelvin"
              style={styles.temperature_unit_icon}
            />
            <Text style={styles.temperature_unit_name}>Kelvin</Text>
          </View>

          <Ionicons
            style={styles.radio_button}
            name={
              temperature_unit === "standard"
                ? "radio-button-on"
                : "radio-button-off"
            }
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.temperature_unit_note}>
        Note :- Application defaults to displaying temperatures in Celsius (°C)
        for user convenience.
      </Text>
    </View>
  );
};

export default TemperatureUnit;
