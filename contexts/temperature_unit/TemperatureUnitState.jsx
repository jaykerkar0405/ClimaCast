// React Hook Imports
import { useEffect, useState } from "react";

// App's External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";

// App's Internal Imports
import TemperatureUnitContext from "./TemperatureUnitContext";

const TemperatureUnitState = ({ children }) => {
  const [temperature_unit, set_temperature_unit] = useState("metric");

  const change_temperature_unit = async (type) => {
    set_temperature_unit(type);
    await AsyncStorage.setItem("temperature_unit", type);
  };

  const load_saved_temperature_unit = async () => {
    if (await AsyncStorage.getItem("temperature_unit")) {
      set_temperature_unit(await AsyncStorage.getItem("temperature_unit"));
    } else {
      change_temperature_unit("metric");
    }
  };

  useEffect(() => {
    load_saved_temperature_unit();

    return () => {
      set_temperature_unit("metric");
    };
  }, []);

  return (
    <TemperatureUnitContext.Provider
      value={{ temperature_unit, change_temperature_unit }}
    >
      {children}
    </TemperatureUnitContext.Provider>
  );
};

export default TemperatureUnitState;
