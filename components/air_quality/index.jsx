// App's Internal Imports
import {
  Footer,
  AirPollutantMeter,
  AirPollutantConcentration,
} from "../../components";

const AirQuality = ({ air_quality }) => {
  return (
    <>
      <AirPollutantMeter air_quality_index={air_quality.list[0].main.aqi} />

      <AirPollutantConcentration
        air_pollutant_components={air_quality.list[0].components}
      />

      <Footer />
    </>
  );
};

export default AirQuality;
