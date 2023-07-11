import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div className="h-full">
      <div className="flex justify-end">
        <span className="flex justify-center mt-10 font-roslindale font-thin text-4xl">
          Emperor's Cooking Dynasty: <br />
          The History of Our Cuisine
        </span>
        <div className="grid justify-end gap-5 m-5">
          <p className="w-[438px]">
            Our esteemed chef, renowned for their passion and expertise in
            seafood cuisine, elevates the freshest catches into culinary works
            of art that will delight your senses. With an unwavering dedication
            to sourcing the highest quality seafood, our chef is deeply
            committed to sustainability and responsible fishing practices,
            ensuring that each ingredient is not only delicious but also
            ethically sourced.
          </p>
          <p className="w-[438px]">
            Drawing inspiration from global flavors and techniques, our chef
            combines traditional culinary wisdom with innovative approaches to
            create unforgettable dishes. From succulent crab cakes with a hint
            of Cajun spice to seared tuna atop a bed of vibrant seaweed salad.
          </p>
        </div>
      </div>
      <div className="m-5 grid grid-cols-4 gap-5">
        <Image
          src="/chefOne.jpg"
          alt="Test"
          width={650}
          height={650}
          className="col-span-2"
        />
        <Image
          src="/chefTwo.jpg"
          alt="Test"
          width={350}
          height={350}
          className="col-span-1"
        />
        <Image
          src="/chefThree.jpg"
          alt="Test"
          width={350}
          height={350}
          className="col-span-1 self-end"
        />
      </div>
    </div>
  );
};

export default SectionOne;
