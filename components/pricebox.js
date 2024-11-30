"use client";
import Image from "next/image";
import { useState } from "react";

function PriceBox({ title, subtitle, price, features, playerRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDetails = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = e => {
    e.preventDefault();
    playerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`flex w-full flex-col overflow-hidden bg-dimmed px-7 py-8 text-center transition-[max-height] duration-300 ease-in-out md:w-[calc(50%-1.5rem/2)] lg:max-h-full lg:w-[calc(33%-1.5rem*2/3)] lg:px-3 lg:py-4 xl:w-[calc(20%-1.5rem*4/5)] ${
        isOpen ? "max-h-[2000px]" : "max-h-[506px]"
      }`}>
      <h3 className="h-[100px] py-3 font-serif text-3xl uppercase tracking-wider text-white">
        {title}
      </h3>
      <div className="py-3 font-sans text-2xl tracking-wider text-white">
        {price}
      </div>
      <p className="min-h-[150px] py-3 font-bold text-base tracking-wider text-white">
        {subtitle}
      </p>
      <div
        className={`grow overflow-hidden transition-[max-height] duration-300 ease-in-out lg:max-h-full ${
          isOpen ? "max-h-full" : "max-h-0"
        }`}>
        {features &&
          features.map((el, index) => (
            <div
              key={el._key}
              className="flex w-full flex-row items-start px-2 py-4 text-left">
              <Image
                src="/img/tick.svg"
                alt="tick icon"
                width={72}
                height={45}
                className="mr-2 mt-[1px] h-[20px] w-[20px]"
              />
              <div className="font-sans text-base tracking-wide text-white">
                {el.name}
              </div>
            </div>
          ))}
      </div>
      <button
        className="my-7 font-mono tracking-wider text-white underline hover:no-underline lg:hidden"
        onClick={handleDetails}>
        SEE DETAILS
      </button>
      <button
        href="#"
        className="mx-auto w-full bg-brand py-4 font-button text-base tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-brand hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_30%)] lg:mt-20"
        onClick={handleClick}>
        BUY BEATS
      </button>
    </div>
  );
}

export default PriceBox;
