// App's External Imports
import LottieView from "lottie-react-native";

// App's Internal Imports
import styles from "../../../assets/styles/search/search_loading";
const search_loading = require("../../../assets/images/search_loading.json");

const SearchLoading = () => {
  return (
    <>
      <LottieView
        loop
        autoPlay
        source={search_loading}
        style={styles.search_loading_animation}
      />
    </>
  );
};

export default SearchLoading;
