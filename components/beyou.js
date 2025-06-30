import Image from "next/image";
import Button from "@/components/button";
import Markdown from "react-markdown";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Beyou = ({ playerRef, about }) => {
  return (
    <section
      id="beyou"
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5 pb-24">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        offset={100}>
        <div className="relative flex w-full flex-col items-center justify-center bg-rokefelaBlack pt-24">
          <iframe
            className="yt-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3FIvSm784uo?si=2Wl9sEkcJQ1rGzfp"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <h3 className="mt-6 inline text-xl text-white md:text-3xl">
            &quot;BE YOU&quot; on BET AWARDS 2024
          </h3>
          <p className="inline text-base text-white md:text-xl">
            by VanVan & Heiress Harris (prod. Rokefela)
          </p>
          <h4 className="inline pb-10 pt-20 text-xl text-white md:text-2xl">
            Played on:
          </h4>
          <div className="flex w-full max-w-5xl flex-wrap items-center justify-center gap-10">
            <Image
              src="/img/BET_Logo.svg"
              alt="Rokefela"
              width={90}
              height={90}
              className=""
            />
            <Image
              src="/img/tamronhall_logo_s5.webp"
              alt="Rokefela"
              width={192.5}
              height={59}
            />
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Beyou;
