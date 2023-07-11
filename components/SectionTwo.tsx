import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  return (
    <div className="">
      <div className="grid justify-end text-end">
        <span className="font-roslindale font-thin text-5xl">
          Our eatery provides an array of quality ingredients,
          <br /> crafting a diverse range of flavourful dishes.
        </span>
      </div>

      <div className="m-5 grid grid-cols-3 gap-5">
        <Image
          src="/salmonOne.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
        <Image
          src="/salmonTwo.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
        <div className="self-end">
          <span className="font-roslindale font-thin text-2xl">
            Exquisite Salmon Delicacies
          </span>
          <p className="text-sm ">
            Discover a tantalizing array of seafood delights that await you.
            Explore our menu and immerse yourself in a culinary journey that
            will satisfy your cravings for the finest flavors from the sea.
          </p>
        </div>
        <Image
          src="/salmonThree.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
        <Image
          src="/salmonFour.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
        <Image
          src="/salmonFive.jpg"
          alt="Test"
          width={450}
          height={450}
          className="col-span-1"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
