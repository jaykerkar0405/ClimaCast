// React Hook Imports
import { useEffect, useState } from "react";

// App's External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";

// App's Internal Imports
import WeatherContext from "./WeatherContext";

const WeatherState = ({ children }) => {
  const [weather_location, set_weather_location] = useState([]);

  const add_weather_location = async (location) => {
    set_weather_location([...weather_location, location]);

    await AsyncStorage.setItem(
      "weather_location",
      JSON.stringify([...weather_location, location])
    );
  };

  const remove_weather_location = async (location) => {
    const filtered_weather_location = weather_location.filter((element) => {
      return element !== location;
    });

    set_weather_location(filtered_weather_location);

    await AsyncStorage.setItem(
      "weather_location",
      JSON.stringify(filtered_weather_location)
    );
  };

  const load_saved_weather_location = async () => {
    if (await AsyncStorage.getItem("weather_location")) {
      set_weather_location(
        JSON.parse(await AsyncStorage.getItem("weather_location"))
      );
    }
  };

  useEffect(() => {
    load_saved_weather_location();

    return () => {
      set_weather_location([]);
    };
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weather_location,
        add_weather_location,
        remove_weather_location,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
