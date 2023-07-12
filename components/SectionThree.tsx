import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <div className="">
      <div className="grid text-center">
        <span className="font-roslindale font-light text-8xl">
          Fresh Seafood Soups
        </span>
      </div>

      <div className="m-5 grid grid-cols-3 gap-5">
        <Image
          src="/soupOne.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
        <div className="">
          <p className="text-sm ">
            Our seafood chowder is a symphony of flavors and fragrances derived
            from the ocean. Meticulously chosen fresh seafood elements
            harmoniously blend together to provide an unforgettable gustatory
            journey.
          </p>
        </div>
        <Image
          src="/soupTwo.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
        <Image
          src="/soupThree.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
        <Image
          src="/soupFour.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
        <div className="self-end">
          <span className="font-roslindale font-thin text-2xl">Full menu</span>
          <p className="text-sm ">
            Discover a tantalizing array of seafood delights that await you.
            Explore our menu and immerse yourself in a culinary journey that
            will satisfy your cravings for the finest flavors from the sea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
