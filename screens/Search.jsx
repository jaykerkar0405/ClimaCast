// React Native Component Imports
import { View, Text, TextInput, Pressable } from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import { Favourites, Toast } from "../components";
import get_computed_style from "../assets/styles/search";

const Search = ({ navigation }) => {
  const { dark, colors } = useTheme();
  const styles = get_computed_style(colors, dark);

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
          placeholderTextColor={colors.placeholder_text_color}
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
