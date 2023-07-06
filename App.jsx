// React Native Component Imports
import { SafeAreaView } from "react-native";

// React Hook Imports
import { useCallback } from "react";

// App's External Imports
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// App's Internal Imports
import { theme } from "./constants";
import { Screens } from "./components";
import styles from "./assets/styles/app";

// App's Context Imports
import {
  ThemeState,
  WeatherState,
  NetworkState,
  WalkThroughState,
} from "./contexts";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const theme_configuration = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme().primary_background_color,
    },
  };

  const [fonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonts) {
      await SplashScreen.hideAsync();
    }
  }, [fonts]);

  if (!fonts) {
    return null;
  }

  return (
    <WalkThroughState>
      <WeatherState>
        <NetworkState>
          <ThemeState>
            <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
              <NavigationContainer theme={theme_configuration}>
                <StatusBar
                  translucent={false}
                  backgroundColor={"transparent"}
                />
                <Screens />
              </NavigationContainer>
            </SafeAreaView>
          </ThemeState>
        </NetworkState>
      </WeatherState>
    </WalkThroughState>
  );
};

export default App;
