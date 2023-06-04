import { Config } from "@/config/config.export";
import { iPaymentInfo } from "@/types/payment/types";
import { CustomAxios } from "../CustomAxios";
import { BaseRes } from "@/types/BaseRes";

const { cardServiceUrl } = Config();

export async function ExecutePayment(req: iPaymentInfo) {
  const result: BaseRes = await CustomAxios.post(
    `${cardServiceUrl}/api/v1/payment`,
    req
  ).then((res) => res.data);
  return result;
}
