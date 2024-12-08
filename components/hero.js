"use client";

import { useEffect, useState, useRef } from "react";
import Button from "@/components/button";

export default function Hero({ hero, playerRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleText = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      titleText.current.style.opacity = 0;
      setTimeout(() => {
        if (currentIndex === hero[0].names.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(updatedData);
        }
      }, 850);
      setTimeout(() => {
        titleText.current.style.filter = "blur(1rem)";
        titleText.current.style.transform =
          "translateY(70px) scale(2.5) skew(10deg)";
      }, 400);
      setTimeout(() => {
        titleText.current.style.transform =
          "translateY(0) scale(1) skew(0)";
        titleText.current.style.opacity = 1;
        titleText.current.style.filter = "blur(0)";
      }, 800);
    }, 3500);

    return () => clearInterval(interval);
  }, [hero, currentIndex]);

  return (
    <div className="flex h-screen min-h-[500px] w-full items-center justify-center overflow-hidden bg-brand bg-[url('/img/hero-image.png')] bg-cover bg-center bg-no-repeat pb-28 pt-[96px] bg-blend-overlay md:pb-24">
      <div className="flex h-full w-full flex-col items-center justify-center px-5">
        <h1 className="z-0 flex w-full flex-col items-center justify-center text-center font-serif text-6xl uppercase tracking-wider text-white drop-shadow-md lg:text-8xl 2xl:text-9xl">
          {hero && hero[0].mainTitle}
          <span
            className="block min-h-[120px] w-full text-center text-4xl transition-all duration-500 sm:min-h-[96px] md:inline-block lg:text-6xl 2xl:text-7xl"
            ref={titleText}>
            {hero && hero[0].names[currentIndex]}
          </span>
        </h1>
        <Button
          playerRef={playerRef}
          extraStyle="py-4 px-4 md:px-20 md:px-44 sm:py-5 md:py-6 sm:px-36 2xl:py-8 2xl:px-64">
          BUY BEATS
        </Button>
      </div>
    </div>
  );
}
