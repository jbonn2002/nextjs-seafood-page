import ImageSection from "@/components/ImageSection";
import MapGoogle from "@/components/MapGoogle";
import SectionFive from "@/components/SectionFive";
import SectionFour from "@/components/SectionFour";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <div className="overflow-hidden">
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
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <MapGoogle />
    </div>
  );
}
