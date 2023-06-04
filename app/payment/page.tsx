import { PaymentContent } from "@/components/payment/payment-content";
import { authOptions } from "@/lib/auth";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
      <PaymentContent />
    </div>
  );
}

export default Page;
