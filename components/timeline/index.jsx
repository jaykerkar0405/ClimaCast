// React Native Component Imports
import { FlatList, Text, TouchableOpacity, View } from "react-native";

// React Hook Imports
import { useState } from "react";

// App's Internal Imports
import { render_timeline } from "../../modules";
import { screen_height } from "../../constants";
import styles from "../../assets/styles/timeline";
import { HourlyForecast } from "../../components";
import { Ionicons } from "react-native-vector-icons";

const Timeline = ({
  timeline_id,
  timeline_type,
  set_timeline_id,
  future_forecast,
  is_timeline_active,
  set_is_timeline_active,
}) => {
  const timeline = [1, 2, 3, 4, 5];

  const TimelineItem = ({ item }) => {
    return (
      <View
        style={[
          styles.timeline,
          item === timeline_id ? styles.focused_tab : styles.unfocused_tab,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            set_timeline_id(item);
          }}
        >
          <Text style={styles.timeline_date}>{render_timeline(item)}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.timeline_container,
        is_timeline_active && { height: 0.3 * screen_height },
      ]}
    >
      <View style={styles.timeline_header}>
        <Text style={styles.timeline_header_title}>Future Forecast</Text>

        <TouchableOpacity
          style={styles.timeline_drawer}
          onPress={() => {
            if (is_timeline_active) {
              set_is_timeline_active(false);
            } else {
              set_is_timeline_active(true);
            }
          }}
        >
          {is_timeline_active ? (
            <>
              <Text style={styles.timeline_drawer_title}>collapse</Text>
              <Ionicons name="chevron-up" style={styles.timeline_drawer_icon} />
            </>
          ) : (
            <>
              <Text style={[styles.timeline_drawer_title, { marginLeft: 7.5 }]}>
                expand
              </Text>
              <Ionicons
                name="chevron-down"
                style={styles.timeline_drawer_icon}
              />
            </>
          )}
        </TouchableOpacity>
      </View>

      {is_timeline_active && timeline_type === "weather" && (
        <>
          <FlatList
            data={timeline}
            horizontal={true}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TimelineItem item={item} />}
            style={{
              flexGrow: 0,
              height: 0.0625 * screen_height,
            }}
          />

          <HourlyForecast
            offset={timeline_id}
            future_forecast={future_forecast.list}
          />
        </>
      )}
    </View>
  );
};

export default Timeline;
