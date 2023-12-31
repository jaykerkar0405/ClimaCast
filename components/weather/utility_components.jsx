// React Native Component Imports
import { View, Text, TouchableOpacity } from "react-native";

// React Hook Imports
import { useContext } from "react";

// App's External Imports
import * as Sharing from "expo-sharing";
import { useTheme } from "@react-navigation/native";
import analytics from "@react-native-firebase/analytics";
import { Ionicons, Feather } from "react-native-vector-icons";

// App's Internal Imports
import get_computed_style from "../../assets/styles/weather/utility_components";

// App's Context Imports
import { WeatherContext } from "../../contexts";

const UtilityComponents = ({ snapshot_ref, weather_forecast_location }) => {
  const { colors } = useTheme();
  const styles = get_computed_style(colors);
  const { weather_location, add_weather_location, remove_weather_location } =
    useContext(WeatherContext);

  return (
    <View style={styles.utility_components}>
      <TouchableOpacity
        style={styles.utility}
        onPress={() => {
          snapshot_ref.current.capture().then(async (uri) => {
            Sharing.shareAsync(uri, {
              dialogTitle: "ClimaCast: Weather Forecast",
            });

            await analytics().logEvent("share", {
              content_value: uri,
              content_type: "uri",
            });
          });
        }}
      >
        <View style={styles.utility_content}>
          <Text style={styles.utility_text}>Share</Text>
          <Feather name="share" style={styles.utility_icon} />
        </View>
      </TouchableOpacity>

      {weather_location.includes(weather_forecast_location) ? (
        <TouchableOpacity
          style={styles.utility}
          onPress={async () => {
            remove_weather_location(weather_forecast_location);

            await analytics().logEvent("manage_weather_location", {
              value: weather_forecast_location,
              method: "remove_weather_location",
            });
          }}
        >
          <View style={styles.utility_content}>
            <Text style={styles.utility_text}>Bookmark</Text>
            <Ionicons name="bookmarks" style={styles.utility_icon} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.utility}
          onPress={async () => {
            add_weather_location(weather_forecast_location);

            await analytics().logEvent("manage_weather_location", {
              method: "add_weather_location",
              value: weather_forecast_location,
            });
          }}
        >
          <View style={styles.utility_content}>
            <Text style={styles.utility_text}>Bookmark</Text>
            <Ionicons name="bookmarks-outline" style={styles.utility_icon} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UtilityComponents;
