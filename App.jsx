// React Hook Imports
import { useCallback, useContext, useEffect, useState } from "react";

// React Native Component Imports
import { View, useColorScheme } from "react-native";

// App's External Imports
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import * as Application from "expo-application";
import * as SplashScreen from "expo-splash-screen";
import analytics from "@react-native-firebase/analytics";
import crashlytics from "@react-native-firebase/crashlytics";
import remoteConfig from "@react-native-firebase/remote-config";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// App's Internal Imports
import {
  dark_theme,
  light_theme,
  screen_width,
  screen_height,
} from "./constants";
import { Screens, VersionControl } from "./components";

// App's Context Imports
import {
  ThemeState,
  WeatherState,
  NetworkState,
  ThemeContext,
  WalkThroughState,
} from "./contexts";

SplashScreen.preventAutoHideAsync();

const Children = ({ is_visible, critical_update_download_url }) => {
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
    <View onLayout={on_layout_root_view} style={app_style}>
      <StatusBar
        translucent={false}
        backgroundColor={
          get_computed_theme(theme) === "dark" ? "#1E1E1E" : "#FFFFFF"
        }
      />

      <VersionControl
        is_visible={is_visible}
        critical_update_download_url={critical_update_download_url}
        colors={
          get_computed_theme(theme) === "dark"
            ? dark_theme.colors
            : light_theme.colors
        }
      />

      <Screens
        colors={
          get_computed_theme(theme) === "dark"
            ? dark_theme.colors
            : light_theme.colors
        }
      />
    </View>
  );
};

const App = () => {
  try {
    const [is_visible, set_is_visible] = useState(false);
    const [critical_update_download_url, set_critical_update_download_url] =
      useState("");

    useEffect(() => {
      const initiate_analytics = async () => {
        await analytics().logAppOpen();
      };

      initiate_analytics();

      remoteConfig()
        .setDefaults({
          critical_update_version: "",
          critical_update_download_url: "",
        })
        .then(() => remoteConfig().fetchAndActivate())
        .then(() => {
          const critical_update_version = remoteConfig().getValue(
            "critical_update_version"
          );
          const critical_update_download_url = remoteConfig().getValue(
            "critical_update_download_url"
          );

          if (
            critical_update_version.getSource() === "remote" &&
            critical_update_download_url.getSource() === "remote"
          ) {
            if (
              Application.nativeApplicationVersion !=
              critical_update_version._value
            ) {
              set_is_visible(true);
              set_critical_update_download_url(
                critical_update_download_url._value
              );
            }
          }
        });
    }, []);

    return (
      <WalkThroughState>
        <WeatherState>
          <NetworkState>
            <ThemeState>
              <GestureHandlerRootView>
                <Children
                  is_visible={is_visible}
                  critical_update_download_url={critical_update_download_url}
                />
              </GestureHandlerRootView>
            </ThemeState>
          </NetworkState>
        </WeatherState>
      </WalkThroughState>
    );
  } catch (error) {
    crashlytics().recordError(error);
  }
};

export default App;
