// App's External Imports
import LottieView from "lottie-react-native";

// App's Internal Imports
const weather_loader = require("../../../assets/images/weather_loading.json");

const WeatherLoader = () => {
  return <LottieView loop autoPlay source={weather_loader} />;
};

export default WeatherLoader;
