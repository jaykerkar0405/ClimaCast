// React Hook Imports
import { useEffect, useState } from "react";

// App's External Imports
import NetInfo from "@react-native-community/netinfo";

// App's Internal Imports
import NetworkContext from "./NetworkContext";

const NetworkState = ({ children }) => {
  const [network_status, set_network_status] = useState(false);

  const fetch_network_status = () => {
    NetInfo.addEventListener((state) => {
      set_network_status(state.isConnected);
    });
  };

  useEffect(() => {
    fetch_network_status();

    return () => {
      set_network_status(false);
    };
  }, []);

  return (
    <NetworkContext.Provider value={{ network_status, fetch_network_status }}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkState;
