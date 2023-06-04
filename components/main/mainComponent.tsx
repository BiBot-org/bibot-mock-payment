"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default function MainComponent() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  if (status === "authenticated") {
    router.push("/payment");
  }

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
