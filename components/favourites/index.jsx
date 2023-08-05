// React Hook Imports
import { useRef, useContext } from "react";

// React Native Component Imports
import { View, Text, Pressable } from "react-native";

// App's External Imports
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import { screen_height } from "../../constants";
import { WeatherContext } from "../../contexts";
import get_computed_style from "../../assets/styles/favourites";
import { FavouriteItem, FavouritesError } from "../../components";

const Favourites = ({ navigation: { navigate } }) => {
  const { colors } = useTheme();
  const scroll_ref = useRef(null);
  const styles = get_computed_style(colors);
  const { weather_location, remove_weather_location } =
    useContext(WeatherContext);

  const on_dismiss = (location) => {
    remove_weather_location(location);
  };

  return (
    <View style={styles.favourites}>
      <View style={styles.favourites_header}>
        <Text style={styles.favourites_title}>My Favourites </Text>
        <Ionicons size={24} name="heart" style={styles.favourites_icon} />
      </View>

      {weather_location.length > 0 ? (
        <GestureHandlerRootView>
          <ScrollView
            ref={scroll_ref}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 0.315 * screen_height,
            }}
            showsVerticalScrollIndicator={false}
          >
            {weather_location.map((element, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigate("SearchResult", {
                      city: element,
                    });
                  }}
                >
                  <FavouriteItem
                    on_dismiss={on_dismiss}
                    weather_location={element}
                    simultaneous_handlers={scroll_ref}
                    saved_weather_location={weather_location}
                  />
                </Pressable>
              );
            })}
          </ScrollView>
        </GestureHandlerRootView>
      ) : (
        <FavouritesError />
      )}
    </View>
  );
};

export default Favourites;
