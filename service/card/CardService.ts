import { Config } from "@/config/config.export";
import { GetAllCardRes } from "@/types/card/ResponseType";
import { CustomAxios } from "../CustomAxios";

const { cardServiceUrl } = Config();

export async function GetAllCard() {
  const response: GetAllCardRes = await CustomAxios.get(
    `${cardServiceUrl}/api/v1/card/all`
  ).then((res) => res.data);
  return response;
}
