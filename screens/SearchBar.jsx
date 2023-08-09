// React Hook Imports
import { useEffect, useState } from "react";

// React Native Component Imports
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// App's External Imports
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

// App's Internal Imports
import {
  auto_suggest,
  calculate_timespan,
  generate_authentication_token,
} from "../modules";
import {
  Toast,
  Footer,
  SearchLoading,
  FavouritesError as SearchError,
} from "../components";
import { screen_height } from "../constants";
import get_computed_style from "../assets/styles/search_bar";

const SearchBar = ({ navigation: { goBack, navigate } }) => {
  const { dark, colors } = useTheme();
  const [city, set_city] = useState("");
  const styles = get_computed_style(colors, dark);
  const [auto_suggestion, set_auto_suggestion] = useState([]);
  const [authentication_token, set_authentication_token] = useState(null);

  const fetch_authentication_token = async () => {
    const fetched_authentication_token = await generate_authentication_token();

    if (fetched_authentication_token) {
      set_authentication_token(
        fetched_authentication_token.authentication_token
      );

      await AsyncStorage.setItem(
        "authentication_token",
        JSON.stringify(fetched_authentication_token)
      );
    }
  };

  const load_saved_authentication_token = async () => {
    const saved_authentication_token = JSON.parse(
      await AsyncStorage.getItem("authentication_token")
    );

    if (saved_authentication_token) {
      const timespan = calculate_timespan(saved_authentication_token.timestamp);

      if (saved_authentication_token.expires_in < timespan) {
        set_authentication_token(
          saved_authentication_token.authentication_token
        );
      } else {
        fetch_authentication_token();
      }
    } else {
      fetch_authentication_token();
    }
  };

  const fetch_auto_suggestion = async () => {
    const fetched_auto_suggestion = await auto_suggest(
      city,
      authentication_token
    );

    set_auto_suggestion(fetched_auto_suggestion);
  };

  useEffect(() => {
    load_saved_authentication_token();

    return () => {
      set_authentication_token(null);
    };
  }, []);

  useEffect(() => {
    if (city.length > 1) {
      fetch_auto_suggestion();
    }

    return () => {
      set_auto_suggestion([]);
    };
  }, [city]);

  return (
    <>
      <View style={styles.search_container}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
        >
          <Ionicons name="chevron-back" size={30} style={styles.back_icon} />
        </TouchableOpacity>

        <TextInput
          value={city}
          onChangeText={set_city}
          placeholder="Search ..."
          style={styles.search_bar}
          placeholderTextColor={colors.placeholder_text_color}
        />

        <TouchableOpacity
          onPress={async () => {
            if (city) {
              navigate("SearchResult", {
                city: city,
              });

              set_city("");
            } else {
              Toast("Search field cannot be empty.");
            }
          }}
        >
          <Ionicons name="search" size={25} style={styles.search_icon} />
        </TouchableOpacity>
      </View>

      {city.length > 0 && (
        <View style={styles.auto_suggest_header}>
          <Text style={styles.auto_suggest_title}>Suggestions By Mappls </Text>
          <Ionicons
            size={22}
            name="location"
            style={styles.auto_suggest_icon}
          />
        </View>
      )}

      <ScrollView style={styles.auto_suggest_container}>
        {city.length > 0 ? (
          auto_suggestion.length > 0 && auto_suggestion[0].placeName ? (
            auto_suggestion.map((element, index) => {
              if (auto_suggestion.length - 1 !== index) {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.auto_suggest_item}
                    onPress={async () => {
                      navigate("SearchResult", {
                        city: element.placeName,
                      });

                      set_city("");
                    }}
                  >
                    <View>
                      <Text style={styles.auto_suggest_item_title}>
                        {element.placeName}
                      </Text>
                    </View>

                    <View>
                      <Ionicons
                        size={25}
                        name="chevron-forward"
                        style={styles.auto_suggest_item_icon}
                      />
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.auto_suggest_item,
                      { marginBottom: 0.025 * screen_height },
                    ]}
                    onPress={async () => {
                      navigate("SearchResult", {
                        city: element.placeName,
                      });

                      set_city("");
                    }}
                  >
                    <View>
                      <Text style={styles.auto_suggest_item_title}>
                        {element.placeName}
                      </Text>
                    </View>

                    <View>
                      <Ionicons
                        size={25}
                        name="chevron-forward"
                        style={styles.auto_suggest_item_icon}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }
            })
          ) : (
            <SearchLoading />
          )
        ) : (
          <View style={styles.search_error}>
            <SearchError />
          </View>
        )}

        <Footer />
      </ScrollView>
    </>
  );
};

export default SearchBar;
