import configLocal from "./config.local";

export const Config = () => {
  switch (process.env.RUN_MODE) {
    case "local":
      return configLocal;

    default:
      return configLocal;
  }
};
