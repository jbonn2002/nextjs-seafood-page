import Image from "next/image";
import React from "react";
import { Button } from "./ui/Button";

const SectionFive = () => {
  return (
    <div className="w-full mt-20">
      <div className="text-7xl font-roslindale font-thin">
        <p className="uppercase text-center">
          We buy our products only from
          <Image
            src="/inlineOne.jpg"
            alt="Test"
            className="inline-block w-[52px] h-[52px]"
            width={100}
            height={100}
          />{" "}
          Trusted suppliers in ACCRA to guarantee{" "}
          <Image
            src="/inlineTwo.jpg"
            alt="Test"
            className="inline-block w-[180px] h-[52px]"
            width={100}
            height={100}
          />{" "}
          The highest quality of{" "}
          <Image
            src="/inlineThree.jpg"
            alt="Test"
            className="inline-block w-[122px] h-[52px]"
            width={100}
            height={100}
          />{" "}
          our dishes.
        </p>
      </div>
      <div className="flex justify-center m-5">
        <Button variant="default" className="bg-orange-400">
          Visit our restaurant
        </Button>
      </div>
    </div>
  );
};

export default SectionFive;
