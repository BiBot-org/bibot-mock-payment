import { useRecoilState } from "recoil";
import { PaymentProductInfo } from "./payment-product-info";
import { PaymentInfoStatus } from "@/state/paymentInfo/PaymentIntoStatus";
import { iProductOrder } from "@/types/payment/types";
import { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";

export function PaymentItemInfo() {
  const [paymentInfo, setPaymentInfo] = useRecoilState(PaymentInfoStatus);
  const [product, setProduct] = useState<iProductOrder>({} as iProductOrder);

  const onChangeProductInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "productName") {
      setProduct({
        ...product,
        [name]: value,
      });
    } else {
      setProduct({
        ...product,
        [name]: Number(value),
      });
    }
  };

  const onClickAdd = () => {
    if (
      product.productName === "" ||
      product.productCost === 0 ||
      product.count === 0
    ) {
      Swal.fire({
        title: "주의!",
        text: "상품 정보를 확인 해 주세요!",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "알림",
        text: "추가하시겠습니까?",
        icon: "info",
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          setPaymentInfo({
            ...paymentInfo,
            productOrderList: [...paymentInfo.productOrderList, product],
          });
          setProduct({
            productName: "",
            productCost: 0,
            count: 0,
          });

          Swal.fire({
            title: "성공",
            text: "추가 되었습니다.",
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <div className="w-full h-4/5 bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-3 sm:p-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Payment Item Info
        </h1>
        <div className="space-y-4 md:space-y-6">
          <div className="min-h-60 max-h-60 overflow-auto">
            {paymentInfo.productOrderList &&
              paymentInfo.productOrderList.map((product, idx) => (
                <PaymentProductInfo
                  key={`${idx} : ${product.productName}`}
                  product={product}
                />
              ))}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              상품 등록
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="상품 명"
              value={product.productName || ""}
              onChange={onChangeProductInfo}
              required
            />
            <input
              type="number"
              name="productCost"
              id="productCost"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="상품 가격"
              value={product.productCost || 0}
              onChange={onChangeProductInfo}
              required
            />
            <input
              type="number"
              name="count"
              id="count"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="상품 갯수"
              value={product.count || 0}
              onChange={onChangeProductInfo}
              required
            />
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={onClickAdd}
            >
              추가
            </button>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                총 가격 :{" "}
                {paymentInfo.productOrderList.reduce(
                  (acc, cur) => acc + cur.count * cur.productCost,
                  0
                )}
                원
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
