"use client";
import { forwardRef, useEffect, useState } from "react";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { PortableText } from "@portabletext/react";

const Accordion = ({
  title,
  content,
  isOpen,
  index,
  handleOpening
}) => {
  const [openThisCard, setOpenThisCard] = useState(false);

  useEffect(() => {
    if (index === isOpen) {
      setOpenThisCard(true);
    } else {
      setOpenThisCard(false);
    }
  }, [index, isOpen]);

  const handleClick = () => {
    if (openThisCard) {
      handleOpening(false);
    } else {
      handleOpening(index);
    }
  };

  return (
    <div className="relative w-full max-w-5xl" id="faq">
      <div
        onClick={handleClick}
        className="my-3 flex min-h-[60px] w-full cursor-pointer items-center justify-items-start bg-brand bg-opacity-[45%] py-4 pl-6 pr-20">
        <h3 className="font-serif text-base uppercase leading-4 tracking-wider text-white md:text-lg lg:text-xl">
          {title}
        </h3>
        <Image
          src="/img/chevron.svg"
          alt="chevron"
          width={32}
          height={18}
          className={`absolute right-6 top-[30px] transition-[transform] delay-200 duration-100 ease-in-out md:top-[31px] ${
            openThisCard ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`w-full overflow-hidden px-6 transition-[max-height] duration-300 ease-in-out ${
          openThisCard ? "max-h-[2000px]" : "max-h-0"
        }`}>
        <div className="pb-8 pt-4 font-sans text-base tracking-wider text-white lg:text-lg">
          <PortableText value={content} />
        </div>
      </div>
    </div>
  );
};

const FAQ = forwardRef((props, ref) => {
  const { faq } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleSectionOpen = number => {
    setIsOpen(number);
  };

  return (
    <div
      id="faq"
      ref={ref}
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack pb-24">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        offset={50}>
        <h1 className="z-0 w-full px-5 py-20 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          FAQ
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        delay={0.3 * 1000}
        offset={50}>
        <div className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5">
          {faq &&
            faq[0].data &&
            faq[0].data.map((el, index) => (
              <Accordion
                title={el.title}
                content={el.content}
                key={el._key}
                index={index}
                isOpen={isOpen}
                handleOpening={number => handleSectionOpen(number)}
              />
            ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
});
export default FAQ;
