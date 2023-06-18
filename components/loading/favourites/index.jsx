// App's External Imports
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient); // Creating An Individual Loading Component

const FavouritesLoader = () => {
  return (
    <>
      <ShimmerPlaceholder
        style={{ width: 100, height: 30, borderRadius: 10 }}
      ></ShimmerPlaceholder>

      <ShimmerPlaceholder
        style={{ width: 50, height: 30, borderRadius: 10 }}
      ></ShimmerPlaceholder>

      <ShimmerPlaceholder
        style={{ width: 100, height: 30, borderRadius: 10 }}
      ></ShimmerPlaceholder>
    </>
  );
};

export default FavouritesLoader;
