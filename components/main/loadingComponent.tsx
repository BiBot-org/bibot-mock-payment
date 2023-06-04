import Image from "next/image";
export default function LoadingComponent() {
  return (
    <div className="w-full h-full  flex justify-center align-middle ">
      <Image
        src="assets/icons/companyLogo.svg"
        alt="logo"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
