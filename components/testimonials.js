import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const images = [
  {
    url: "/img/rev1.png?v=01",
    key: 1
  },
  {
    url: "/img/rev2.png?v=01",
    key: 2
  },
  {
    url: "/img/rev3.png?v=01",
    key: 3
  },
  {
    url: "/img/rev4.png?v=01",
    key: 4
  },
  {
    url: "/img/rev5.png?v=01",
    key: 5
  },
  {
    url: "/img/rev6.png?v=01",
    key: 6
  },
  {
    url: "/img/rev7.png?v=01",
    key: 7
  },
  {
    url: "/img/rev8.png?v=02",
    key: 8
  },
  {
    url: "/img/rev9.png?v=01",
    key: 9
  },
  {
    url: "/img/rev10.png?v=02",
    key: 10
  },
  {
    url: "/img/rev11.png?v=01",
    key: 11
  }
];

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
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack pb-12">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        offset={50}>
        <h1 className="z-0 w-full py-20 pt-5 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          NUMBERS DON&apos;T LIE:
        </h1>
        <h4 className="pb-5 text-center font-serif text-2xl uppercase tracking-wider text-white">
          Over 6.5 Million views and streams behind my beats
        </h4>
        <h4 className="pb-5 text-center font-serif text-2xl uppercase tracking-wider text-white">
          12+ years of experience
        </h4>
        <h4 className="pb-5 text-center font-serif text-2xl uppercase tracking-wider text-white">
          Over 400 industry quality beats on Beatstars
        </h4>
        <h4 className="pb-20 text-center font-serif text-2xl uppercase tracking-wider text-white">
          Hunreds collaborations with independent rappers and
          producers
        </h4>
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
          </div>
        </div>
      </AnimationOnScroll>
      <div className=" relative flex w-full items-center justify-center bg-brand bg-opacity-[45%] px-8 py-12 ">
        <AnimationOnScroll
          animateIn="fadeInUp"
          animateOnce
          delay={0.3 * 1000}
          duration={0.7}
          offset={50}
          style={styles}>
          <div className="relative mx-auto flex w-full max-w-5xl flex-wrap justify-center">
            {images.map(image => (
              <div
                key={image.key}
                className={`w-6/6 relative aspect-[1170/1765] cursor-pointer p-2.5 md:w-3/6 lg:w-2/6`}>
                <Image
                  src={image.url}
                  alt="review"
                  width={1170}
                  height={1765}
                  placeholder="empty"
                  className={`h-full w-full object-cover object-left`}
                />
              </div>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center bg-brand bg-opacity-[45%] px-10 py-12">
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
        <h3 className="mt-6 inline text-3xl text-white">
          &quot;BE YOU&quot; on BET AWARDS 2024
        </h3>
        <p className="inline text-xl text-white">
          by VanVan & Heiress Harris (prod. Rokefela)
        </p>
      </div>
    </section>
  ];
};

export default Testimonials;
