import Image from "next/image";
import React from "react";

export const Pagination = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-evenly md:mx-20">
      <button className="flex justify-center gap-2 text-sm font-medium items-center">
        <Image
          src={"/assets/arrow-left.svg"}
          width={20}
          height={20}
          alt="arrow-left"
        />
        Previous
      </button>
      <div className="flex">
        <section className="text-violet-500 p-3 text-center text-sm font-medium">
          1
        </section>
        <section className="p-3 text-center text-sm font-medium">2</section>
        <section className="p-3 text-center text-sm font-medium">3</section>
      </div>

      <button className="text-sm font-medium flex justify-center items-center gap-2">
        Next
        <Image
          src={"/assets/arrow-right.svg"}
          width={20}
          height={20}
          alt="arrow-left"
        />
      </button>
    </div>
  );
};
