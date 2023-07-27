// React Native Component Imports
import { Text } from "react-native";

// App's External Imports
import LottieView from "lottie-react-native";

// App's Internal Imports
import styles from "../../assets/styles/favourites/favourites_error";
const favourite_error = require("../../assets/images/favourite_error.json");

const FavouritesError = () => {
  return (
    <>
      <LottieView
        loop
        autoPlay
        source={favourite_error}
        style={styles.favourites_error_animation}
      />

      <Text style={styles.favourites_error_text}>Nothing Here Yet</Text>
    </>
  );
};

export default FavouritesError;
