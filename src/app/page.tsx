import Search from "@/components/Search";
import PopularCity from "./home/PopularCity";

export default function Home() {
  return (
    <main className="pb-20">
      <div className="flex justify-center flex-col gap-12 items-center mt-24 mb-12 text-lg">
        <div className="flex flex-col gap-12 items-center">
          <h1 className="bold text-white text-center">Mau kemana hari ini?</h1>
          <Search />
        </div>
          <PopularCity />
      </div>
    </main>
  );
}
