import ImageSection from "@/components/ImageSection";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-hero bg-contain bg-no-repeat md:bg-cover text-white flex min-h-screen flex-col items-center justify-between p-24">
        <div className="">
          <h1 className="font-roslindale font-thin text-5xl md:text-9xl">
            Savour Real Seafood
          </h1>
          <p className="w-[333px] md:text-base text-xs">
            With a deep-rooted love for all things seafood, our talented chefs
            combine culinary expertise with creativity to craft dishes that
            celebrate the ocean's treasures.
          </p>
        </div>
      </main>
      <SectionOne />
      <ImageSection />
      <SectionTwo />
    </div>
  );
}
