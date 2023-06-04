"use client";
import { endSession } from "@/service/auth/AuthService";
import { PaymentItemInfo } from "./payment-item-info";
import { PaymentShopInfo } from "./payment-shop-info";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ExecutePayment } from "@/service/payment/PaymentService";
import { useRecoilState } from "recoil";
import {
  PaymentInfoStatus,
  initPaymentInfo,
} from "@/state/paymentInfo/PaymentIntoStatus";
import dayjs from "dayjs";
import Swal from "sweetalert2";
export function PaymentContent() {
  const router = useRouter();
  const [paymentInfo, setPaymentInfo] = useRecoilState(PaymentInfoStatus);

  const handleSignOut = async () => {
    await endSession().then(
      async () =>
        await signOut().then(() => {
          Swal.fire({
            title: "Success",
            text: "로그아웃 되었습니다.",
            icon: "success",
          }).then(() => router.push("/login"));
        })
    );
  };

  useEffect(() => {
    setPaymentInfo({
      ...initPaymentInfo,
      paymentDate: dayjs(Date.now()).format("YYYY-MM-DDTHH:mm:ss"),
    });
  }, []);
  const onSubmitPayment = () => {
    if (
      paymentInfo.address === "" ||
      paymentInfo.paymentDestination === "" ||
      paymentInfo.businessLicense === "" ||
      paymentInfo.representationName === "" ||
      paymentInfo.address === "" ||
      paymentInfo.destinationNum === "" ||
      paymentInfo.cardId === 0 ||
      paymentInfo.productOrderList.length === 0
    ) {
      Swal.fire({
        title: "info",
        text: "결제 항목들을 확인 해 주세요",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "결제 확인",
        text: `결제 하시겠습니까?`,
        icon: "question",
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          ExecutePayment(paymentInfo)
            .then((res) => {
              const paymentId = res.data;
              Swal.fire({
                title: "Result",
                text: `https://storage.googleapis.com/bibot_receipt/RECEIPT_IMAGE/${dayjs(
                  Date.now()
                ).format("YYYY-MM-DD")}/${paymentId}.png`,
                icon: "info",
              }).then(() => {
                setPaymentInfo({ ...initPaymentInfo });
              });
            })
            .catch(() => {
              Swal.fire({
                title: "Error",
                text: "에러가 발생했습니다.",
                icon: "error",
              });
            });
        }
      });
    }
  };
  return (
    <section className="flex flex-col bg-bibot-white rounded-lg shadow items-center justify-center px-7 py-4 mx-auto md:h-11/12 md:w-138">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl my-4">
        Bibot 가상 결제 서비스
      </h1>
      <h2 className="text-l leading-tight tracking-tight text-bibot-black md:text-l my-2">
        결제 항목 값을 입력하여 결제하기 버튼을 누르세요.
      </h2>
      <div className="flex flex-row w-full grid-cols-2 gap-4 items-center justify-center">
        <PaymentShopInfo />
        <PaymentItemInfo />
      </div>
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:r ing-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={onSubmitPayment}
        >
          결제하기
        </button>
        <button
          onClick={handleSignOut}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          로그아웃
        </button>
      </div>
    </section>
  );
}
