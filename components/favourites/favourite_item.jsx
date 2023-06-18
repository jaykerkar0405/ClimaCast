// React Hook Imports
import { useEffect, useState } from "react";

// React Native Component Imports
import { View, Text, Dimensions, Image } from "react-native";

// App's External Imports
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { Ionicons } from "react-native-vector-icons";
import { PanGestureHandler } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated/lib/reanimated2/core";

// App's Internal Imports
import {
  render_weather_icon,
  fetch_weather_by_city,
  validate_weather_location,
} from "../../modules";
import { FavouritesLoader } from "../../components";
import styles from "../../assets/styles/favourites/favourite_item";

const FavouriteItem = ({
  onDismiss,
  weather_location,
  simultaneousHandlers,
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

  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const translateX = useSharedValue(0);
  const display_favourite = useSharedValue(1);
  const opacity = useSharedValue(0);
  const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

  const gesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
      const is_dismissible = translateX.value < TRANSLATE_X_THRESHOLD;

      if (is_dismissible) {
        opacity.value = 1;
      } else {
        opacity.value = 0;
      }
    },

    onEnd: () => {
      const is_dismissible = translateX.value < TRANSLATE_X_THRESHOLD;

      if (is_dismissible) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        display_favourite.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(weather_location);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const reanimated_style = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const remove_transition = useAnimatedStyle(() => {
    return { opacity: opacity.value };
  });

  const dismiss_favourite = useAnimatedStyle(() => {
    const display = display_favourite.value === 1 ? "flex" : "none";

    return { display };
  });

  return (
    <>
      <Animated.View style={[styles.remove_favourite, remove_transition]}>
        <Ionicons name="trash-outline" size={30} color="red" />
      </Animated.View>

      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={gesture}
      >
        <Animated.View
          style={[styles.favourites, reanimated_style, dismiss_favourite]}
        >
          {weather_forecast ? (
            <View style={styles.weather_parameters}>
              <View style={styles.weather_location_container}>
                <Text style={styles.weather_location}>
                  {validate_weather_location(weather_location)}
                </Text>
              </View>

              <View style={styles.weather_icon_container}>
                <Image
                  source={{
                    uri: render_weather_icon(weather_forecast.weather[0].icon),
                  }}
                  style={styles.weather_icon}
                />
              </View>

              <View style={styles.weather_information}>
                <Text style={styles.max_temperature}>
                  {Math.round(weather_forecast.main.temp_max)}°
                </Text>
                <Text style={styles.min_temperature}>
                  {Math.round(weather_forecast.main.temp_min)}°
                </Text>
              </View>
            </View>
          ) : (
            <FavouritesLoader />
          )}
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default FavouriteItem;
