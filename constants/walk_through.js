// App's Internal Imports
import images from "../assets/images/walk_through";

const walk_through_contents = [
  {
    id: 1,
    icon_name: "location",
    icon_color: "#1B9C85",
    title: "Location Access",
    description:
      "Grant ClimaCast permission to access your location for accurate weather updates tailored to your area. Don't worry, your location data is only used for weather forecasting purposes and is not stored or shared.",
    image: images.location,
  },
  {
    id: 2,
    icon_name: "brush",
    icon_color: "#4942E4",
    title: "Choose Your Theme",
    description:
      "Choose a theme that fits your personality to personalize your weather experience. ClimaCast has a variety of themes to meet your choices, whether you like a clean and modern style or a lively and colorful interface.",
    image: images.theme,
  },
  {
    id: 3,
    icon_color: "#FF55BB",
    icon_name: "thunderstorm",
    title: "Daily Forecast",
    description:
      "Keep up to date on the weather forecast for today and the next several days. Get an overview of the day's prediction, including high and low temperatures, possibilities of precipitation, and wind speed.",
    image: images.daily_forecast,
  },
  {
    id: 4,
    icon_name: "map",
    icon_color: "#7AA874",
    title: "Saved Locations",
    description:
      "Save your favourite locations to get weather information for numerous areas easily. Switch between areas and remain up to current on the weather around you, whether it's your home, job, or fantasy holiday spot.",
    image: images.saved_locations,
  },
  {
    id: 5,
    icon_name: "rainy",
    icon_color: "#9DB2BF",
    title: "Enjoy ClimaCast!",
    description:
      "Begin discovering and experiencing the advantages of ClimaCast. Stay educated, make informed judgments, and be prepared for any weather that may arise. Allow ClimaCast to be your trustworthy buddy in getting ahead of the weather!",
    image: images.enjoy_climacast,
  },
];

export default walk_through_contents;
