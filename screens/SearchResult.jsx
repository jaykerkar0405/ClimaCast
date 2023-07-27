// React Hook Imports
import { useEffect, useState } from "react";

// App's Internal Imports
import { Main } from "../components";
import { redirect_to_error_screen } from "../modules";

const SearchResult = ({ route, navigation }) => {
  const [is_error, set_is_error] = useState(true);

  useEffect(() => {
    if (route.params.city) {
      set_is_error(false);
    } else {
      redirect_to_error_screen(
        navigation,
        "Search",
        "Please enter a valid city name consisting of letters and spaces only.",
        "search"
      );
    }

    return () => {
      set_is_error(true);
    };
  }, []);

  return (
    <>
      {!is_error && (
        <Main
          type="city"
          navigation={navigation}
          identifier={{
            city: route.params.city,
          }}
        />
      )}
    </>
  );
};

export default SearchResult;
