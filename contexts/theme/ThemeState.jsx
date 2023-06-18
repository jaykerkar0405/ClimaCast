// React Hook Imports
import { useEffect, useState } from "react";

// App's External Imports
import AsyncStorage from "@react-native-async-storage/async-storage";

// App's Internal Imports
import ThemeContext from "./ThemeContext";

const ThemeState = ({ children }) => {
  const [theme, set_theme] = useState("system");

  const change_theme = async (type) => {
    set_theme(type);
    await AsyncStorage.setItem("theme", type);
  };

  const load_saved_theme = async () => {
    if (await AsyncStorage.getItem("theme")) {
      set_theme(await AsyncStorage.getItem("theme"));
    } else {
      change_theme("system");
    }
  };

  useEffect(() => {
    load_saved_theme();

    return () => {
      set_theme("system");
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, change_theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
