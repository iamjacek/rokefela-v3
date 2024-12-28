"use client";
import dynamic from "next/dynamic";
const CountdownTimer = dynamic(() => import("./countdown"), {
  ssr: false
});
import { useEffect } from "react";

export default function Banner({ hero, playerRef }) {
 
  return (
    <>
      {hero && hero[0].isBannerOn && hero[0].bannerDate && (
        <CountdownTimer
          text={hero[0].bannerText}
          targetDate={hero[0].bannerDate}
          playerRef={playerRef}
        />
      )}
    </>
  );
}
