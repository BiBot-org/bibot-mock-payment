export declare namespace ICommonConfig {
  export type Mode = "local" | "dev";

  export interface Params {
    cardServiceUrl: string;
    keycloakUrl: string;
    clientCridential: string;
    mode: Mode;
  }
}

export default function getConfigs(params: ICommonConfig.Params) {
  const { cardServiceUrl, keycloakUrl, clientCridential, mode } = params;
  return { cardServiceUrl, keycloakUrl, clientCridential, mode, api: {} };
}
