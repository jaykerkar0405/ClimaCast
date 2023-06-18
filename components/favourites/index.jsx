// React Hook Imports
import { useContext, useRef, useCallback } from "react";

// React Native Component Imports
import { View, Text, Pressable } from "react-native";

// App's External Imports
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import { theme } from "../../constants";
import { WeatherContext } from "../../contexts";
import styles from "../../assets/styles/favourites";
import { FavouriteItem, FavouritesError } from "../../components";

const Favourites = ({ navigation }) => {
  const scroll_ref = useRef(null);
  const { weather_location, remove_weather_location } =
    useContext(WeatherContext);

  const on_dismiss = useCallback((location) => {
    remove_weather_location(location);
  }, []);

  return (
    <View style={styles.favourites}>
      <View style={styles.favourites_header}>
        <Text style={styles.favourites_title}>My Favourites </Text>
        <Ionicons
          name="heart"
          style={styles.favourites_icon}
          size={24}
          color={theme().tertiary_text_color}
        />
      </View>

      <GestureHandlerRootView>
        <ScrollView ref={scroll_ref} showsVerticalScrollIndicator={false}>
          {weather_location.length > 0 ? (
            weather_location.map((item, index) => {
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate("SearchResult", {
                      city: item,
                    });
                  }}
                  key={index}
                >
                  <FavouriteItem
                    weather_location={item}
                    onDismiss={on_dismiss}
                    simultaneousHandlers={scroll_ref}
                  />
                </Pressable>
              );
            })
          ) : (
            <FavouritesError />
          )}
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};

export default Favourites;
