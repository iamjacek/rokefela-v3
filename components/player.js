"use client";

import { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Player = forwardRef((props, ref) => {
  const styles = {
    width: "1000px"
  };
  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5 pb-24">
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOnce
        duration={0.7}
        offset={50}>
        <h1 className="z-0 w-full py-20 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          BEATSTORE
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOnce
        offset={50}
        duration={0.7}
        delay={0.3 * 1000}
        style={styles}>
        <iframe
          src="https://player.beatstars.com/?storeId=148389"
          className="max-w-5xl"
          width="100%"
          height="800"></iframe>
      </AnimationOnScroll>
    </div>
  );
});
export default Player;
