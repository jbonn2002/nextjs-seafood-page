import Image from "next/image";
import React from "react";

const SectionFour = () => {
  return (
    <div className="">
      <div className="grid text-end">
        <span className="font-roslindale font-thin text-6xl">
          In our venue, we maintain a coastal ambiance with <br /> traditional
          IVORIAN elements like <br /> ivorian prints tissues walls <br /> and
          wood lighting fixtures.
        </span>
      </div>

      <div className="m-5 grid grid-cols-6 gap-1">
        <Image
          src="/soupOne.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-2"
        />

        <Image
          src="/soupTwo.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-3"
        />
        <Image
          src="/soupThree.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-1 self-end"
        />
      </div>
      <div className="m-5 grid grid-cols-4 gap-1">
        <Image
          src="/soupFour.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-2"
        />
        <Image
          src="/soupOne.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-1"
        />

        <Image
          src="/soupTwo.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-1 self-end"
        />
      </div>
      <div className="m-5 grid grid-cols-5 gap-1">
        <Image
          src="/soupThree.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-1"
        />
        <Image
          src="/soupFour.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-1 self-end"
        />
        <Image
          src="/soupThree.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-1"
        />
        <Image
          src="/soupFour.jpg"
          alt="Test"
          width={500}
          height={500}
          className="col-span-2"
        />
      </div>
    </div>
  );
};

export default SectionFour;
