// React Hook Imports
import { useRef, useContext } from "react";

// App's Context Imports
import { ThemeContext } from "../../contexts";

// App's External Imports
import { useColorScheme } from "react-native";
import analytics from "@react-native-firebase/analytics";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// App's Internal Imports
import {
  Navbar,
  PrivacyPolicy,
  TermsAndConditions,
  OpenSourceLicences,
} from "../../components";
import { dark_theme, light_theme } from "../../constants";
import { Error, SearchBar, SearchResult } from "../../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const route_name_ref = useRef(null);
  const navigation_ref = useRef(null);
  const { theme } = useContext(ThemeContext);
  const fetched_color_scheme = useColorScheme();

  const get_computed_theme = (theme_type) => {
    if (theme_type === "system") {
      return fetched_color_scheme;
    } else {
      return theme_type;
    }
  };

  const stack_screen_options = (screen_title, { colors }) => {
    const options = {
      headerShown: true,
      headerTitle: screen_title,
      headerTitleAlign: "center",
      headerTintColor: colors.primary_text_color,
      headerTitleStyle: {
        fontSize: 17.5,
        fontFamily: "Poppins_500Medium",
        color: colors.primary_text_color,
      },
      headerStyle: {
        backgroundColor: colors.primary_background_color,
      },
    };

    return options;
  };

  return (
    <NavigationContainer
      ref={navigation_ref}
      theme={get_computed_theme(theme) === "dark" ? dark_theme : light_theme}
      onReady={() => {
        route_name_ref.current = navigation_ref.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previous_route_name = route_name_ref.current;
        const current_route_name =
          navigation_ref.current.getCurrentRoute().name;

        if (previous_route_name !== current_route_name) {
          await analytics().logScreenView({
            screen_name: current_route_name,
            screen_class: current_route_name,
          });
        }
        route_name_ref.current = current_route_name;
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Navbar"
          component={Navbar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Error"
          component={Error}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SearchBar"
          component={SearchBar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={stack_screen_options(
            "Privacy Policy",
            get_computed_theme(theme) === "dark" ? dark_theme : light_theme
          )}
        />

        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={stack_screen_options(
            "Terms & Conditions",
            get_computed_theme(theme) === "dark" ? dark_theme : light_theme
          )}
        />

        <Stack.Screen
          name="OpenSourceLicences"
          component={OpenSourceLicences}
          options={stack_screen_options(
            "Open Source Licences",
            get_computed_theme(theme) === "dark" ? dark_theme : light_theme
          )}
        />

        <Stack.Screen
          name="SearchResult"
          component={SearchResult}
          options={stack_screen_options(
            "Search Result",
            get_computed_theme(theme) === "dark" ? dark_theme : light_theme
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
