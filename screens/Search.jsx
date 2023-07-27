// React Native Component Imports
import { View, Text, TextInput, Pressable } from "react-native";

// App's External Imports
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import { Favourites } from "../components";
import styles from "../assets/styles/search";

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pick Location</Text>
        <Text style={styles.description}>
          Find the area or city to get the weather forecast details
        </Text>
      </View>

      <Pressable
        style={styles.search}
        onPress={() => {
          navigation.navigate("SearchBar");
        }}
      >
        <TextInput
          editable={false}
          placeholder="Search ..."
          style={styles.search_bar}
          onPressIn={() => {
            navigation.navigate("SearchBar");
          }}
        />
        <Ionicons name="search" size={25} style={styles.search_icon} />
      </Pressable>

      <Favourites navigation={navigation} />
    </View>
  );
};

export default Search;
