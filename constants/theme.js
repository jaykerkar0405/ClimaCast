const theme = () => {
  switch (theme) {
    case "light":
      return {
        primary_background_color: "#ffffff",
        secondary_background_color: "#dee9fc",
        tertiary_background_color: "#f3f4fd",
        quaternary_background_color: "#D2E9E9",

        primary_text_color: "#000000",
        secondary_text_color: "#585858",
        tertiary_text_color: "hsl(250,69%,61%)",
      };
      break;

    case "dark":
      return {
        primary_background_color: "#ffffff",
        secondary_background_color: "#dee9fc",
        tertiary_background_color: "#f3f4fd",
        quaternary_background_color: "#D2E9E9",

        primary_text_color: "#000000",
        secondary_text_color: "#585858",
        tertiary_text_color: "hsl(250,69%,61%)",
      };
      break;

    default:
      return {
        primary_background_color: "#ffffff",
        secondary_background_color: "#dee9fc",
        tertiary_background_color: "#f3f4fd",
        quaternary_background_color: "#D2E9E9",

        primary_text_color: "#000000",
        secondary_text_color: "#585858",
        tertiary_text_color: "hsl(250,69%,61%)",
      };
  }
};

export default theme;
