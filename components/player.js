"use client";

import { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Player = forwardRef((props, ref) => {
  const styles = {
    width: "100%",
    textAlign: "center"
  };
  return (
    <div
      id="player"
      ref={ref}
      className="md:px12 flex w-full flex-col items-center justify-center bg-rokefelaBlack px-6 pb-24 sm:px-8">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        offset={50}>
        <h1 className="z-0 w-full py-20 pb-5 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          BEATSTORE
        </h1>
        <h4 className="pb-20 text-center font-serif text-base uppercase tracking-wider text-white lg:text-xl">
          PAY FOR 1, GET 5 (WAV LICENSE) - ENDS SUNDAY⏳
        </h4>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        offset={50}
        duration={0.7}
        delay={0.3 * 1000}
        style={styles}>
        <iframe
          src="https://player.beatstars.com/?storeId=148389"
          className="mx-auto max-w-5xl"
          width="100%"
          height="800"></iframe>
      </AnimationOnScroll>
    </div>
  );
});
export default Player;
