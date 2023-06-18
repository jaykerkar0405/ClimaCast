// React Hook Imports
import { useState } from "react";

// React Native Component Imports
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// App's External Imports
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import styles from "../assets/styles/search";
import { Favourites, Toast } from "../components";

const Search = ({ navigation }) => {
  const [city, set_city] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Pick Location</Text>
        <Text style={styles.description}>
          Find the area or city to get the weather forecast details
        </Text>
      </View>

      <View style={styles.search}>
        <TextInput
          value={city}
          onChangeText={set_city}
          placeholder="Search ..."
          style={styles.search_bar}
        />
        <TouchableOpacity
          onPress={() => {
            if (city) {
              navigation.navigate("SearchResult", {
                city: city,
              });

              set_city(null);
            } else {
              Toast("Search field cannot be empty.");
            }
          }}
        >
          <Ionicons name="search" size={25} style={styles.search_icon} />
        </TouchableOpacity>
      </View>

      <Favourites navigation={navigation} />
    </View>
  );
};

export default Search;
