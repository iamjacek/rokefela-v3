import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Testimonials = ({ testimonials }) => {
  const carousel = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (
      testimonials &&
      testimonials[0].data &&
      testimonials[0].data
    ) {
      const tempReviews = testimonials[0].data.map(
        (review, index) => (
          <div
            key={index}
            className="relative mx-auto mb-8 flex min-h-[120px] max-w-[500px] items-center justify-start rounded-[50px] border-2 border-[#656565] bg-rokefelaBlack px-10 py-10">
            <p className="font-msg text-xl tracking-wider text-white">
              {review}
            </p>
            <div className="absolute bottom-[-30px] left-[40px] rounded-[50px] border-2 border-[#656565] bg-rokefelaBlack px-3 py-1 text-3xl">
              ❤️
            </div>
          </div>
        )
      );
      setItems(tempReviews);
    }
  }, [testimonials]);

  const styles = {
    width: "100%"
  };

  return [
    <section
      key="1"
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack pb-24">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        offset={50}>
        <h1 className="z-0 w-full px-5 py-20 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          TESTIMONIALS
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        delay={0.3 * 1000}
        offset={50}
        style={styles}>
        <div className="flex w-full items-center justify-center bg-brand bg-opacity-[45%] px-8 py-12">
          <div className="relative w-full">
            <AliceCarousel
              key="carousel"
              autoPlayInterval="3000"
              autoPlay
              infinite
              disableButtonsControls
              autoPlayStrategy="default"
              animationType="fadeout"
              disableDotsControls
              items={items}
              ref={carousel}
            />
            {/* <Image
            src="/img/chevron.svg"
            alt="chevron"
            width={52}
            height={38}
            className={`absolute left-0 top-[30%] hidden translate-y-1/2 -rotate-90 cursor-pointer p-2.5 md:block lg:left-10 xl:left-20 2xl:left-32`}
            onClick={e => carousel?.current?.slidePrev(e)}
          />
          <Image
            src="/img/chevron.svg"
            alt="chevron"
            width={52}
            height={38}
            className={`absolute right-0 top-[30%] hidden translate-y-1/2 rotate-90 cursor-pointer p-2.5 md:block lg:right-10 xl:right-20 xl:right-32`}
            onClick={e => carousel?.current?.slideNext(e)}
          /> */}
          </div>
        </div>
      </AnimationOnScroll>
      <div className=" relative flex w-full items-center justify-center bg-brand bg-opacity-[45%] px-8 py-12 ">
        <AnimationOnScroll
          animateIn="fadeInUp"
          animateOnce
          delay={0.3 * 1000}
          duration={0.7}
          offset={50}>
          <div className="relative flex w-full max-w-5xl flex-wrap justify-center">
            <Image
              src="/img/rev1.png"
              alt="review"
              width={1170}
              height={1765}
              className={`w-6/6 relative left-0 cursor-pointer p-2.5 md:w-3/6 `}
            />

            <Image
              src="/img/rev2.png"
              alt="review"
              width={1170}
              height={1765}
              className={`w-6/6 relative left-0  top-[30%] cursor-pointer p-2.5 md:w-3/6 `}
            />
            <Image
              src="/img/rev3.png"
              alt="review"
              width={1169}
              height={1132}
              className={`w-6/6 relative left-0  top-[30%] cursor-pointer p-2.5 md:w-3/6 `}
            />
            <Image
              src="/img/rev4.png"
              alt="review"
              width={1169}
              height={1132}
              className={`w-6/6 relative left-0  top-[30%] cursor-pointer p-2.5 md:w-3/6 `}
            />
          </div>
        </AnimationOnScroll>
      </div>
      <div className=" relative flex w-full flex-col items-center justify-center bg-brand bg-opacity-[45%] px-8 py-12 ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2FXWdoxEtrQ?si=RNaRKZ2gj5vJIaFd"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
        <h3 className="mt-6 inline text-3xl text-white">
          "BE YOU" on BET AWARDS 2024
        </h3>
        <p className="inline text-xl text-white">
          by VanVan & Heiress Harris (prod. Rokefela)
        </p>
      </div>
    </section>
  ];
};

export default Testimonials;
