import { AuthForm } from "@/components/auth/AuthForm";

function Page() {
  return (
    <>
      <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-bibot-white shadow md:mt-0 sm:max-w-lg xl:p-0">
          <AuthForm />
        </div>
      </div>
    </>
  );
}

export default Page;
