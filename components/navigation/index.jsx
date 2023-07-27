// App's External Imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// App's Internal Imports
import { theme } from "../../constants";
import { Navbar } from "../../components";
import { Error, SearchBar, SearchResult } from "../../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
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
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Search Result",
          headerTitleStyle: {
            fontSize: 17.5,
            fontFamily: "Poppins_500Medium",
            color: theme().primary_text_color,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
