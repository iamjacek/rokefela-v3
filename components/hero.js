"use client";

import { useEffect, useState, useRef } from "react";
import Button from "@/components/button";

export default function Hero({ hero }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleText = useRef(null);

  useEffect(() => {
    console.log(hero);
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      titleText.current.style.opacity = 0;
      setTimeout(() => {
        if (currentIndex === hero[0].names - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(updatedData);
        }
      }, 150);
      setTimeout(() => {
        titleText.current.style.opacity = 1;
      }, 250);
    }, 2500);

    return () => clearInterval(interval);
  }, [hero, currentIndex]);

  return (
    <div className="flex h-screen min-h-[500px] w-full items-center justify-center overflow-hidden bg-brand bg-[url('/img/hero-image.png')] bg-cover bg-center bg-no-repeat pb-28 pt-[96px] bg-blend-overlay md:pb-24">
      <div className="flex h-full w-full flex-col items-center justify-center px-5">
        <h1 className="z-0 w-full text-center font-serif text-5xl uppercase tracking-wider text-white drop-shadow-md md:translate-x-24 lg:translate-x-20 lg:text-6xl 2xl:translate-x-10 2xl:text-7xl">
          {hero && hero[0].mainTitle}{" "}
          <span
            className="block w-full text-center transition-opacity md:inline-block md:w-[450px] md:text-left"
            ref={titleText}>
            {hero && hero[0].names[currentIndex]}
          </span>
        </h1>
        <Button extraStyle="py-4 px-4 md:px-20 md:px-44 sm:py-5 md:py-6 sm:px-36 2xl:py-8 2xl:px-64">
          BUY BEATS
        </Button>
      </div>
    </div>
  );
}
