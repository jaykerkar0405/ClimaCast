// React Hook Imports
import { useEffect, useState } from "react";

// App's External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";

// App's Internal Imports
import WalkThroughContext from "./WalkThroughContext";

const WalkThroughState = ({ children }) => {
  const [walk_through_status, set_walk_through_status] = useState(true);

  const change_walk_through_status = async (status) => {
    set_walk_through_status(status);
    await AsyncStorage.setItem("walk_through_status", status);
  };

  const load_saved_walkthrough_status = async () => {
    if (await AsyncStorage.getItem("walk_through_status")) {
      set_walk_through_status(
        await AsyncStorage.getItem("walk_through_status")
      );
    } else {
      change_walk_through_status("true");
    }
  };

  useEffect(() => {
    load_saved_walkthrough_status();

    return () => {
      set_walk_through_status(true);
    };
  }, []);

  return (
    <WalkThroughContext.Provider
      value={{ walk_through_status, change_walk_through_status }}
    >
      {children}
    </WalkThroughContext.Provider>
  );
};

export default WalkThroughState;
