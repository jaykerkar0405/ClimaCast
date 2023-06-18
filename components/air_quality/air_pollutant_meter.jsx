// React Native Component Imports
import { View } from "react-native";

// App's External Imports
import RNSpeedometer from "react-native-speedometer";

// App's Internal Imports
import { air_quality_parameters } from "../../constants";
import styles from "../../assets/styles/air_quality/air_pollutant_meter";

const AirPollutantMeter = ({ air_quality_index }) => {
  return (
    <View style={styles.air_pollutant_meter_container}>
      <RNSpeedometer
        size={280}
        minValue={1}
        maxValue={5}
        allowedDecimals={0}
        value={air_quality_index}
        labels={air_quality_parameters}
        labelStyle={styles.air_pollutant_meter_label}
        labelWrapperStyle={styles.air_pollutant_meter}
        labelNoteStyle={styles.air_pollutant_meter_note}
      />
    </View>
  );
};

export default AirPollutantMeter;
