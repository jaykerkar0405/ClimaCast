// React Hook Imports
import { useCallback, useContext } from "react";

// React Native Component Imports
import { SafeAreaView, useColorScheme } from "react-native";

// App's External Imports
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

// App's Internal Imports
import {
  dark_theme,
  light_theme,
  screen_width,
  screen_height,
} from "./constants";
import { Screens } from "./components";

// App's Context Imports
import {
  ThemeState,
  WeatherState,
  NetworkState,
  ThemeContext,
  WalkThroughState,
} from "./contexts";

SplashScreen.preventAutoHideAsync();

const Children = () => {
  const { theme } = useContext(ThemeContext);
  const fetched_color_scheme = useColorScheme();

  const [fonts] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const on_layout_root_view = useCallback(async () => {
    if (fonts) {
      await SplashScreen.hideAsync();
    }
  }, [fonts]);

  if (!fonts) {
    return null;
  }

  const get_computed_theme = (theme_type) => {
    if (theme_type === "system") {
      return fetched_color_scheme;
    } else {
      return theme_type;
    }
  };

  const app_style = {
    width: screen_width,
    height: screen_height,
    backgroundColor:
      get_computed_theme(theme) === "dark"
        ? dark_theme.colors.primary_background_color
        : light_theme.colors.primary_background_color,
  };

  return (
    <SafeAreaView onLayout={on_layout_root_view} style={app_style}>
      <StatusBar
        translucent={false}
        backgroundColor={
          get_computed_theme(theme) === "dark" ? "#1E1E1E" : "#FFFFFF"
        }
      />
      <Screens
        colors={
          get_computed_theme(theme) === "dark"
            ? dark_theme.colors
            : light_theme.colors
        }
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <WalkThroughState>
      <WeatherState>
        <NetworkState>
          <ThemeState>
            <Children />
          </ThemeState>
        </NetworkState>
      </WeatherState>
    </WalkThroughState>
  );
};

export default App;
