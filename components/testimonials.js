import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const items = reviewData.map((review, index) => (
//   <div
//     key={index}
//     className="relative mx-auto mb-8 flex min-h-[120px] min-h-[80px] max-w-[500px] items-center justify-start rounded-[50px] border-2 border-[#656565] bg-rokefelaBlack px-10 py-8 lg:max-w-[700px]">
//     <p className="font-msg text-2xl tracking-wider text-white lg:text-3xl 2xl:text-4xl">
//       {review.content}
//     </p>
//     <div className="absolute bottom-[-30px] left-[40px] rounded-[50px] border-2 border-[#656565] bg-rokefelaBlack px-3 py-1 text-3xl lg:text-4xl">
//       ❤️
//     </div>
//   </div>
// ));
const Testimonials = ({ testimonials }) => {
  const carousel = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(testimonials);
    if (
      testimonials &&
      testimonials[0].data &&
      testimonials[0].data
    ) {
      const tempReviews = testimonials[0].data.map(
        (review, index) => (
          <div
            key={index}
            className="relative mx-auto mb-8 flex min-h-[120px] min-h-[80px] max-w-[500px] items-center justify-start rounded-[50px] border-2 border-[#656565] bg-rokefelaBlack px-10 py-8 lg:max-w-[700px]">
            <p className="font-msg text-2xl tracking-wider text-white lg:text-3xl 2xl:text-4xl">
              {review}
            </p>
            <div className="absolute bottom-[-30px] left-[40px] rounded-[50px] border-2 border-[#656565] bg-rokefelaBlack px-3 py-1 text-3xl lg:text-4xl">
              ❤️
            </div>
          </div>
        )
      );
      setItems(tempReviews);
    }
  }, [testimonials]);

  return [
    <section
      key="1"
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack pb-24">
      <h1 className="z-0 w-full px-5 py-20 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
        TESTIMONIALS.
      </h1>
      <div className="flex w-full items-center justify-center bg-brand bg-opacity-[45%] px-8 py-12">
        <div className="relative w-full">
          <AliceCarousel
            key="carousel"
            autoPlayInterval="3000"
            autoPlay
            infinite
            mouseTracking
            disableButtonsControls
            autoPlayStrategy="default"
            animationType="fadeout"
            items={items}
            ref={carousel}
          />
          <Image
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
          />
        </div>
      </div>
    </section>
  ];
};

export default Testimonials;
