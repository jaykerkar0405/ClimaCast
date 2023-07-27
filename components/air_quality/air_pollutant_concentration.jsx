// React Native Component Imports
import { Text, View } from "react-native";

// App's Internal Imports
import styles from "../../assets/styles/air_quality/air_pollutant_concentration";

// React Hook Imports
import { useEffect, useState } from "react";

const AirPollutantConcentration = ({ air_pollutant_components }) => {
  const [air_pollutant_concentration, set_air_pollutant_concentration] =
    useState(null);

  useEffect(() => {
    set_air_pollutant_concentration([
      {
        pollutant_name: "O₃",
        pollutant_value: air_pollutant_components.o3,
      },
      {
        pollutant_name: "CO",
        pollutant_value: air_pollutant_components.co,
      },
      {
        pollutant_name: "NO",
        pollutant_value: air_pollutant_components.no,
      },
      {
        pollutant_name: "NO₂",
        pollutant_value: air_pollutant_components.no2,
      },
      {
        pollutant_name: "SO₂",
        pollutant_value: air_pollutant_components.so2,
      },
      {
        pollutant_name: "NH₃",
        pollutant_value: air_pollutant_components.nh3,
      },
      {
        pollutant_name: "pm10",
        pollutant_value: air_pollutant_components.pm10,
      },
      {
        pollutant_name: "pm2.5",
        pollutant_value: air_pollutant_components.pm2_5,
      },
    ]);
  }, []);

  return (
    <View style={styles.air_pollutant_concentration_container}>
      {air_pollutant_concentration &&
        air_pollutant_concentration.map((element, index) => {
          return index !== 7 ? (
            <View style={styles.air_pollutant_concentration} key={index}>
              <Text style={styles.air_pollutant_concentration_title}>
                {element.pollutant_name}
              </Text>
              <Text style={styles.air_pollutant_concentration_value}>
                {element.pollutant_value}
              </Text>
            </View>
          ) : (
            <View
              style={[
                styles.air_pollutant_concentration,
                { borderBottomWidth: 0 },
              ]}
              key={index}
            >
              <Text style={styles.air_pollutant_concentration_title}>
                {element.pollutant_name}
              </Text>
              <Text style={styles.air_pollutant_concentration_value}>
                {element.pollutant_value}
              </Text>
            </View>
          );
        })}
    </View>
  );
};

export default AirPollutantConcentration;
