// React Native Component Imports
import { View, Text, Image } from "react-native";

// App's External Imports
import { Ionicons } from "react-native-vector-icons";

// App's Internal Imports
import get_computed_style from "../../assets/styles/walk_through/walk_through_item";

const WalkThroughItem = ({ item, colors }) => {
  const styles = get_computed_style(colors);

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.walk_through_image} />
      <Text style={styles.walk_through_title}>
        {item.title}{" "}
        <Ionicons
          size={18}
          name={item.icon_name}
          color={item.icon_color}
          style={styles.walk_through_icon}
        />
      </Text>
      <Text style={styles.walk_through_description}>{item.description}</Text>
    </View>
  );
};

export default WalkThroughItem;
