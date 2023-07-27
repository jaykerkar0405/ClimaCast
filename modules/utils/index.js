// App's Internal Imports
import {
  days,
  months,
  screen_width,
  weather_precaution_messages,
} from "../../constants";
import images from "../../assets/images/weather";

// validate_weather_location() ----> The said function will be used to fetch city name by by `GEOLOCATION` (Latitude, Longitude) method and trim the weather location if it exceeds by 11 characters
const validate_weather_location = (weather_location) => {
  if (weather_location.length > 11) {
    return `${weather_location.slice(0, 8)}...`;
  } else {
    return weather_location;
  }
};

// render_weather_message() ----> The said function will be used to render weather message based on the weather condition received by parent element
const render_weather_message = (weather_condition) => {
  const weather_message = weather_precaution_messages.filter((element) => {
    return weather_condition === element.weather_condition;
  })[0];

  return weather_message;
};

// render_weather_icon() ----> The said function will be used to render weather icon based on the weather icon id received by parent element
const render_weather_icon = (weather_icon_id) => {
  const weather_icon = images.filter((element) => {
    return element.id === weather_icon_id;
  })[0].uri;

  return weather_icon;
};

// change_current_slide_index() ----> The said function will be used to change the current slide index for pagination
const change_current_slide_index = (element, set_current_slide_index) => {
  const content_offset_x = element.nativeEvent.contentOffset.x;
  const index = Math.round(content_offset_x / screen_width);
  set_current_slide_index(index);
};

// next_slide() ----> The said function will be used to paginate to next slide and update the index of the current (active) slide
const next_slide = (
  pagination_ref,
  current_slide_index,
  set_current_slide_index
) => {
  const next_slide_index = current_slide_index + 1;
  set_current_slide_index(next_slide_index);
  pagination_ref?.current?.scrollToIndex({
    animated: true,
    index: next_slide_index,
  });
};

// previous_slide() ----> The said function will be used to paginate to previous slide and update the index of the current (active) slide
const previous_slide = (
  pagination_ref,
  current_slide_index,
  set_current_slide_index
) => {
  const previous_slide_index = current_slide_index - 1;
  set_current_slide_index(previous_slide_index);
  pagination_ref?.current?.scrollToIndex({
    animated: true,
    index: previous_slide_index,
  });
};

// convert_unix_to_offset_time() ----> The said function will be used to convert `unix` time to `offset` time
const convert_unix_to_offset_time = (unix_time) => {
  const offset_date = new Date();
  const unix_date = new Date(unix_time * 1000);

  offset_date.setHours(unix_date.getHours() - 5);
  offset_date.setMinutes(unix_date.getMinutes() - 30);

  const offset_hours =
    offset_date.getHours() < 10
      ? "0" + offset_date.getHours()
      : offset_date.getHours();
  const offset_minutes =
    offset_date.getMinutes() < 10
      ? "0" + offset_date.getMinutes()
      : offset_date.getMinutes();

  const offset_time = offset_hours + ":" + offset_minutes;

  return offset_time;
};

// compare_timezone() ----> The said function will be used to compare `unix` time to `offset` time
const compare_timezone = (unix_time, offset) => {
  const offset_date = new Date();
  const unix_date = new Date(unix_time * 1000);

  offset_date.setDate(offset_date.getDate() + offset);

  if (unix_date.getDate() === offset_date.getDate()) {
    return true;
  } else {
    return false;
  }
};

// convert_unix_to_standard_time() ----> The said function will be used to convert `unix` time to `standard` time
const convert_unix_to_standard_time = (unix_time) => {
  const unix_date = new Date(unix_time * 1000);

  const standard_hours =
    unix_date.getHours() < 10
      ? "0" + unix_date.getHours()
      : unix_date.getHours();
  const standard_minutes =
    unix_date.getMinutes() < 10
      ? "0" + unix_date.getMinutes()
      : unix_date.getMinutes();

  const standard_time = standard_hours + ":" + standard_minutes;

  return standard_time;
};

// redirect_to_error_screen() ----> The said function will be used to redirect to `Error` page
const redirect_to_error_screen = (
  navigation,
  navigation_route,
  error_description,
  navigation_route_icon
) => {
  navigation.navigate("Error", {
    navigation_route: navigation_route,
    error_description: error_description,
    navigation_route_icon: navigation_route_icon,
  });
};

// render_timeline() ----> The said function will be used to render timeline based on the `timeline_id` received by parent element
const render_timeline = (timeline_id) => {
  const timeline_date = new Date();
  timeline_date.setDate(timeline_date.getDate() + timeline_id);

  const standard_day = days.filter((element) => {
    return element.id === timeline_date.getDay();
  })[0].name;

  const standard_date = timeline_date.getDate();

  const standard_month = months.filter((element) => {
    return element.id === timeline_date.getMonth();
  })[0].name;

  const timeline = `${standard_day}, ${standard_date} ${standard_month}`;

  return timeline;
};

// calculate_timespan() ----> The said function will be used to calculate timespan between specified date and current date
const calculate_timespan = (supplied_date) => {
  const current_date = Date.now();
  const specified_date = new Date(
    supplied_date.year,
    supplied_date.month,
    supplied_date.date,
    supplied_date.hours,
    supplied_date.minutes,
    supplied_date.seconds,
    supplied_date.milliseconds
  ).getTime();

  const timespan = Math.round((specified_date - current_date) / 1000);

  return timespan;
};

// bearing_to_direction() ----> The said function will be used to calculate the geographical direction based upon the angle provided
const bearing_to_direction = (angle) => {
  if ((angle >= 0 && angle <= 22.5) || (angle >= 337.5 && angle <= 360)) {
    return {
      direction_name: "North",
      direction_icon: "north",
    };
  }

  if (angle >= 67.5 && angle <= 112.5) {
    return {
      direction_name: "East",
      direction_icon: "east",
    };
  }

  if (angle >= 157.5 && angle <= 202.5) {
    return {
      direction_name: "South",
      direction_icon: "south",
    };
  }

  if (angle >= 247.5 && angle <= 292.5) {
    return {
      direction_name: "West",
      direction_icon: "west",
    };
  }

  if (angle > 22.5 && angle < 67.5) {
    return {
      direction_name: "North East",
      direction_icon: "north-east",
    };
  }

  if (angle > 112.5 && angle < 157.5) {
    return {
      direction_name: "South East",
      direction_icon: "south-east",
    };
  }

  if (angle > 202.5 && angle < 247.5) {
    return {
      direction_name: "South West",
      direction_icon: "south-west",
    };
  }

  if (angle > 292.5 && angle < 337.5) {
    return {
      direction_name: "North West",
      direction_icon: "north-west",
    };
  }
};

export {
  next_slide,
  previous_slide,
  render_timeline,
  compare_timezone,
  calculate_timespan,
  render_weather_icon,
  bearing_to_direction,
  render_weather_message,
  redirect_to_error_screen,
  validate_weather_location,
  change_current_slide_index,
  convert_unix_to_offset_time,
  convert_unix_to_standard_time,
};
