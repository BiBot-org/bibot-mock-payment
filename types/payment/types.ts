export interface iPaymentInfo {
  paymentDestination: string;
  businessLicense: string;
  representationName: string;
  address: string;
  paymentDate: string;
  destinationNum: string;
  cardId: number;
  productOrderList: iProductOrder[];
}

export interface iProductOrder {
  productName: string;
  productCost: number;
  count: number;
}
