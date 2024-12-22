"use client";
import CountdownTimer from "@/components/countdown";

export default function Banner({ hero }) {
  return (
    <>
      {hero && hero[0].isBannerOn && (
        <div
          className={`from-bg-brand relative z-[99999999] m-0 flex h-20 w-full items-center justify-center gap-2.5 border-b-2 bg-gradient-to-r px-2 text-center transition-all`}>
          <p className="text-xs text-white sm:text-base md:text-xl lg:text-2xl">
            {hero && hero[0].bannerText}
          </p>
          {hero[0].bannerDate && (
            <CountdownTimer targetDate={hero[0].bannerDate} />
          )}
        </div>
      )}
    </>
  );
}
