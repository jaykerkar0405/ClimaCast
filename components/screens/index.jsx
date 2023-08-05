// React Hook Imports
import { useContext } from "react";

// App's Context Imports
import { NetworkContext, WalkThroughContext } from "../../contexts";

// App's Screen Imports
import { Network, WalkThrough } from "../../screens";

// App's Internal Imports
import { Navigation } from "../../components";

const Screens = ({ colors }) => {
  const { network_status } = useContext(NetworkContext); // Fetching Network Status
  const { walk_through_status } = useContext(WalkThroughContext); // Fetching WalkThrough Status

  return (
    <>
      {!network_status ? (
        <Network colors={colors} />
      ) : walk_through_status === "true" ? (
        <WalkThrough colors={colors} />
      ) : (
        <Navigation />
      )}
    </>
  );
};

export default Screens;
