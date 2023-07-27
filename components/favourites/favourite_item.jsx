// React Hook Imports
import { useState, useEffect } from "react";

// React Native Component Imports
import { View, Text, Image } from "react-native";

// App's External Imports
import Animated, {
  runOnJS,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { Ionicons } from "react-native-vector-icons";
import { PanGestureHandler } from "react-native-gesture-handler";

// App's Internal Imports
import {
  render_weather_icon,
  fetch_weather_by_city,
  validate_weather_location,
} from "../../modules";
import { screen_width } from "../../constants";
import { FavouritesLoader } from "../../components";
import styles from "../../assets/styles/favourites/favourite_item";

const FavouriteItem = ({
  on_dismiss,
  weather_location,
  simultaneous_handlers,
  saved_weather_location,
}) => {
  const [weather_forecast, set_weather_forecast] = useState(null);

  const fetch_weather_forecast = async () => {
    const fetched_weather_forecast = await fetch_weather_by_city(
      weather_location
    );
    set_weather_forecast(fetched_weather_forecast);
  };

  useEffect(() => {
    fetch_weather_forecast();

    return () => {
      set_weather_forecast(null);
    };
  }, []);

  const translate_x = useSharedValue(0);
  const display_favourite = useSharedValue(1);
  const translate_x_threshold = -screen_width * 0.3;

  const gesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translate_x.value = event.translationX;
    },

    onEnd: () => {
      const is_dismissible = translate_x.value < translate_x_threshold;

      if (is_dismissible) {
        if (on_dismiss) {
          runOnJS(on_dismiss)(weather_location);
        }

        if (!saved_weather_location.includes(weather_location)) {
          display_favourite.value = withTiming(0);
          translate_x.value = withTiming(-screen_width);
        } else {
          translate_x.value = withTiming(0);
        }
      } else {
        translate_x.value = withTiming(0);
      }
    },
  });

  const swipe_animation = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translate_x.value,
      },
    ],
  }));

  const remove_icon_animation = useAnimatedStyle(() => {
    const opacity = withTiming(
      translate_x.value < translate_x_threshold ? 1 : 0
    );

    return { opacity };
  });

  const dismiss_favourite = useAnimatedStyle(() => {
    return { opacity: display_favourite.value };
  });

  return (
    <Animated.View style={dismiss_favourite}>
      <Animated.View style={[styles.remove_favourite, remove_icon_animation]}>
        <Ionicons name="trash-outline" size={30} color="white" />
      </Animated.View>

      <PanGestureHandler
        onGestureEvent={gesture}
        simultaneousHandlers={simultaneous_handlers}
      >
        <Animated.View style={[styles.favourites, swipe_animation]}>
          {weather_forecast ? (
            <>
              <Text style={styles.weather_location}>
                {validate_weather_location(weather_location)}
              </Text>

              <View style={styles.weather_information}>
                <Image
                  source={{
                    uri: render_weather_icon(weather_forecast.weather[0].icon),
                  }}
                  style={styles.weather_icon}
                />

                <Text style={styles.max_temperature}>
                  {Math.round(weather_forecast.main.temp_max)}
                </Text>
                <Text style={styles.degree_symbol}>°C</Text>

                <Text style={styles.min_temperature}>
                  {Math.round(weather_forecast.main.temp_min)}
                </Text>
                <Text style={[styles.degree_symbol, { right: 10 }]}>°C</Text>
              </View>
            </>
          ) : (
            <FavouritesLoader />
          )}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default FavouriteItem;
