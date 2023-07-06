// React Native Component Imports
import { Text, View } from "react-native";

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
              <View style={styles.tab}>
                <Foundation
                  size={26}
                  name="home"
                  style={focused ? styles.focused_icon : styles.unfocused_icon}
                />

                <Text
                  style={
                    focused ? styles.focused_title : styles.unfocused_title
                  }
                >
                  Home
                </Text>
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
              <View style={styles.tab}>
                <FontAwesome
                  size={26}
                  name="search"
                  style={focused ? styles.focused_icon : styles.unfocused_icon}
                />

                <Text
                  style={
                    focused ? styles.focused_title : styles.unfocused_title
                  }
                >
                  Search
                </Text>
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
              <View style={styles.tab}>
                <Ionicons
                  size={26}
                  name="settings"
                  style={focused ? styles.focused_icon : styles.unfocused_icon}
                />

                <Text
                  style={
                    focused ? styles.focused_title : styles.unfocused_title
                  }
                >
                  Settings
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navbar;
