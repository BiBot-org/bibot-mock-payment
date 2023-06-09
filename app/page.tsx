import MainComponent from "@/components/main/mainComponent";

export default async function Home() {
  return (
    <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
      <MainComponent />
    </div>
  );
}
