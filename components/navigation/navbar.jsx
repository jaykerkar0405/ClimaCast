// React Native Component Imports
import { View } from "react-native";

// App's External Imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, FontAwesome, Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import styles from "../../assets/styles/navbar";
import { Home, Search, Settings } from "../../screens";

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        headerStyle: { ...styles.header },
        tabBarStyle: { ...styles.tab_bar },
        headerTitleStyle: { ...styles.header_title },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused && styles.focused_tab}>
                <Foundation
                  name="home"
                  size={30}
                  style={focused ? styles.focused_icon : styles.unfocused_icon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused && styles.focused_tab}>
                <FontAwesome
                  name="search"
                  size={30}
                  style={focused ? styles.focused_icon : styles.unfocused_icon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused && styles.focused_tab}>
                <Ionicons
                  name="settings"
                  size={30}
                  style={focused ? styles.focused_icon : styles.unfocused_icon}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navbar;
