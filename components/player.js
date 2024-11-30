"use client";

import { forwardRef } from "react";

const Player = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5 pb-24">
      <h1 className="z-0 w-full py-20 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
        BEATSTORE
      </h1>
      <iframe
        src="https://player.beatstars.com/?storeId=148389"
        className="max-w-5xl"
        width="100%"
        height="800"></iframe>
    </div>
  );
});
export default Player;
