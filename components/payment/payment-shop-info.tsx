import { GetAllCard } from "@/service/card/CardService";
import { CardInfoRes } from "@/types/card/types";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import LoadingComponent from "../main/loadingComponent";
import { useRecoilState } from "recoil";
import { PaymentInfoStatus } from "@/state/paymentInfo/PaymentIntoStatus";

export function PaymentShopInfo() {
  const [cardList, setCardList] = useState<CardInfoRes[]>([]);
  const [paymentInfo, setPaymentInfo] = useRecoilState(PaymentInfoStatus);
  const { isLoading } = useQuery("myCards", GetAllCard, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      setCardList(data.data);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const onChangeCardList = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      cardId: Number(value),
    });
  };

  const onChangeShopInfoInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="w-full h-4/5 bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-3 sm:p-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-bibot-black md:text-2xl">
          Shop Info
        </h1>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Card
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={onChangeCardList}
          >
            <option key={`cardId : default`} value="">
              결제에 사용 할 카드를 선택 해주세요
            </option>
            {cardList &&
              cardList.map((card) => (
                <option key={card.id} value={card.id}>
                  {card.cardCompany} : {card.cardNo}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            상호명
          </label>
          <input
            type="text"
            name="paymentDestination"
            id="paymentDestination"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="상호 명"
            value={paymentInfo.paymentDestination}
            onChange={onChangeShopInfoInput}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            가맹점 번호
          </label>
          <input
            type="text"
            name="destinationNum"
            id="destinationNum"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="가맹점 번호"
            value={paymentInfo.destinationNum}
            onChange={onChangeShopInfoInput}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            사업자 번호
          </label>
          <input
            type="text"
            name="businessLicense"
            id="businessLicense"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="사업자 번호"
            value={paymentInfo.businessLicense}
            onChange={onChangeShopInfoInput}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            대표자명
          </label>
          <input
            type="text"
            name="representationName"
            id="representationName"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="대표자명"
            value={paymentInfo.representationName}
            onChange={onChangeShopInfoInput}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            주소
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="주소"
            value={paymentInfo.address}
            onChange={onChangeShopInfoInput}
            required
          />
        </div>
      </div>
    </div>
  );
}
