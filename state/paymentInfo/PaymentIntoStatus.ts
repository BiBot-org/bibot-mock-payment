import { iPaymentInfo } from "@/types/payment/types";
import { atom } from "recoil";

export const initPaymentInfo = {
  paymentDestination: "",
  businessLicense: "",
  representationName: "",
  address: "",
  paymentDate: "",
  destinationNum: "",
  cardId: 0,
  productOrderList: [],
};

export const PaymentInfoStatus = atom<iPaymentInfo>({
  key: "paymentInfo",
  default: initPaymentInfo,
});
