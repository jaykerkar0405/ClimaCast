// App's External Imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// App's Internal Imports
import { Navbar } from "../../components";
import { Error, SearchResult } from "../../screens";

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
        name="SearchResult"
        component={SearchResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Error"
        component={Error}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
