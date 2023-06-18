// React Native Component Imports
import { View, Text, Image } from "react-native";

// App's Internal Imports
import images from "../../assets/images/search";
import styles from "../../assets/styles/favourites/favourites_error";

const FavouritesError = () => {
  return (
    <View style={styles.favourites_error}>
      <Image source={images.search} style={styles.favourites_error_image} />
      <Text style={styles.favourites_error_text}>Nothing here yet</Text>
    </View>
  );
};

export default FavouritesError;
