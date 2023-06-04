import { PaymentInfoStatus } from "@/state/paymentInfo/PaymentIntoStatus";
import { iProductOrder } from "@/types/payment/types";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";

export function PaymentProductInfo({ product }: { product: iProductOrder }) {
  const [paymentInfo, setPaymentInfo] = useRecoilState(PaymentInfoStatus);
  const onClickDelete = () => {
    Swal.fire({
      title: "주의",
      text: "삭제 하시겠습니까?",
      icon: "question",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        const idxOfDelete = paymentInfo.productOrderList.indexOf(product);
        let newArr = paymentInfo.productOrderList;
        newArr = newArr.filter((e, idx) => idx !== idxOfDelete);
        setPaymentInfo({
          ...paymentInfo,
          productOrderList: paymentInfo.productOrderList.filter(
            (e, idx) => !(e === product && idx === idxOfDelete)
          ),
        });
      }
      Swal.fire({
        title: "완료",
        text: "삭제 되었습니다.",
        icon: "success",
      });
    });
  };
  return (
    <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="grid grid-cols-6 grid-flow-col gap-2">
        <div className="col-span-1">
          <button
            className="w-full h-full justify-items-center bg-bibot-red rounded-full text-bibot-white"
            onClick={onClickDelete}
          >
            삭제
          </button>
        </div>
        <div className="col-span-5">
          <label className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5">
            {product.productName}
          </label>
          <label className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ">
            {product.productCost} 원
          </label>
          <label className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ">
            {product.count} 개
          </label>
        </div>
      </div>
    </div>
  );
}
