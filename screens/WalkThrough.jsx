// React Native Component Imports
import { View, Text, TouchableOpacity, FlatList } from "react-native";

// React Hook Imports
import { useContext, useRef, useState } from "react";

// App's External Imports
import { Ionicons } from "react-native-vector-icons";
import analytics from "@react-native-firebase/analytics";

// App's Internal Imports
import {
  next_slide,
  previous_slide,
  change_current_slide_index,
} from "../modules";
import { WalkThroughItem } from "../components";
import { WalkThroughContext } from "../contexts";
import { walk_through_contents } from "../constants";
import get_computed_style from "../assets/styles/walk_through";

const WalkThrough = ({ colors }) => {
  const styles = get_computed_style(colors);
  const walk_through_ref = useRef(null); // Reference Variable Used To Perform Pagination
  const { change_walk_through_status } = useContext(WalkThroughContext); // Function For Changing WalkThrough Status
  const [current_slide_index, set_current_slide_index] = useState(0); // State Variable To Store The Value Of Current (Active) Slide's Index For Pagination

  return (
    <View style={styles.main_container}>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        ref={walk_through_ref}
        data={walk_through_contents}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.walk_through_container}
        renderItem={({ item }) => (
          <WalkThroughItem item={item} colors={colors} />
        )}
        onMomentumScrollEnd={(element) => {
          change_current_slide_index(element, set_current_slide_index);
        }}
      />

      <View style={styles.pagination_container}>
        <View style={styles.pagination}>
          {walk_through_contents.map((_, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.pagination_indicator,
                  current_slide_index === index && styles.current_slide,
                ]}
              />
            );
          })}
        </View>
      </View>

      <View style={styles.navigation_container}>
        {current_slide_index === 0 && (
          <View>
            <TouchableOpacity
              style={styles.navigation_button}
              onPress={async () => {
                next_slide(
                  walk_through_ref,
                  current_slide_index,
                  set_current_slide_index
                );

                await analytics().logTutorialBegin();
              }}
            >
              <Text style={styles.navigation_button_text}>
                Begin Your Adventure{" "}
                <Ionicons
                  name="arrow-forward"
                  style={styles.navigation_button_text}
                  size={18}
                />
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {current_slide_index !== 0 &&
          current_slide_index !== walk_through_contents.length - 1 && (
            <View style={styles.navigation_button_group}>
              <TouchableOpacity
                style={styles.pagination_button}
                onPress={() => {
                  previous_slide(
                    walk_through_ref,
                    current_slide_index,
                    set_current_slide_index
                  );
                }}
              >
                <Text style={styles.pagination_button_text}>
                  <Ionicons
                    name="arrow-back"
                    style={styles.pagination_button_text}
                    size={18}
                  />
                  {"  "}
                  Previous
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pagination_button}
                onPress={() => {
                  next_slide(
                    walk_through_ref,
                    current_slide_index,
                    set_current_slide_index
                  );
                }}
              >
                <Text style={styles.pagination_button_text}>
                  Next{"  "}
                  <Ionicons
                    name="arrow-forward"
                    style={styles.pagination_button_text}
                    size={18}
                  />
                </Text>
              </TouchableOpacity>
            </View>
          )}

        {current_slide_index === walk_through_contents.length - 1 && (
          <View>
            <TouchableOpacity
              style={styles.navigation_button}
              onPress={async () => {
                change_walk_through_status("false");

                await analytics().logTutorialComplete();
              }}
            >
              <Text style={styles.navigation_button_text}>
                Get Started{" "}
                <Ionicons
                  name="arrow-forward"
                  style={styles.navigation_button_text}
                  size={18}
                />
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default WalkThrough;
