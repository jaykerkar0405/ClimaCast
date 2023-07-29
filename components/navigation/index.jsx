// App's External Imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// App's Internal Imports
import { theme } from "../../constants";
import {
  Navbar,
  OpenSourceLicences,
  PrivacyPolicy,
  TermsAndConditions,
} from "../../components";
import { Error, SearchBar, SearchResult } from "../../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const stack_screen_options = (screen_title) => {
    const options = {
      headerShown: true,
      headerTitleAlign: "center",
      headerTitle: screen_title,
      headerTitleStyle: {
        fontSize: 17.5,
        fontFamily: "Poppins_500Medium",
        color: theme().primary_text_color,
      },
    };

    return options;
  };

  return (
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
        options={stack_screen_options("Privacy Policy")}
      />

      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={stack_screen_options("Terms & Conditions")}
      />

      <Stack.Screen
        name="OpenSourceLicences"
        component={OpenSourceLicences}
        options={stack_screen_options("Open Source Licences")}
      />

      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={stack_screen_options("Search Result")}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
