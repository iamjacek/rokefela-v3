"use client";

export default function Banner({ hero }) {
  return (
    <>
      {hero && hero[0].isBannerOn && (
        <div
          className={`from-bg-brand relative z-[99999999] m-0 flex h-20 w-full items-center justify-center border-b-2 bg-gradient-to-r px-2 text-center transition-all`}>
          <p className="text-xs text-white sm:text-base">
            {hero && hero[0].bannerText}
          </p>
        </div>
      )}
    </>
  );
}
