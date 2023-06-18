// React Hook Imports
import { useEffect, useState } from "react";

// App's External Imports
import * as Location from "expo-location";

// App's Internal Imports
import { Main } from "../components";
import { redirect_to_error_page } from "../modules";

const Home = ({ navigation }) => {
  const [is_error, set_is_error] = useState(true);
  const [geolocation, set_geolocation] = useState(null);

  const fetch_geolocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync(); // Get Geolocation's Permission From User

    if (status === "granted") {
      const fetched_geolocation = (await Location.getCurrentPositionAsync({})) // Fetch User's Current Position
        .coords;

      if (fetched_geolocation) {
        set_geolocation(fetched_geolocation);
        set_is_error(false);
      } else {
        redirect_to_error_page(
          navigation,
          "Home",
          "Unable to retrieve location. Please enable access for the location services.",
          "home"
        );
      }
    }
  };

  useEffect(() => {
    fetch_geolocation(); // Function To Fetch User's Geolocation

    return () => {
      set_geolocation(null);
      set_is_error(true);
    };
  }, []);

  return (
    <>
      {!is_error && (
        <Main
          type="geolocation"
          identifier={{
            latitude: Number(geolocation.latitude.toFixed(2)),
            longitude: Number(geolocation.longitude.toFixed(2)),
          }}
          navigation={navigation}
        />
      )}
    </>
  );
};

export default Home;
