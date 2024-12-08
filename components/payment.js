import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
const paymentIcons = [
  {
    src: "/img/americanexpress_icon.png",
    alt: "american express"
  },
  {
    src: "/img/apple_icon.png",
    alt: "apple pay"
  },
  {
    src: "/img/gpay_icon.png",
    alt: "google pay"
  },
  {
    src: "/img/discover_icon.png",
    alt: "discover"
  },
  {
    src: "/img/pay_icon.png",
    alt: "pay"
  },
  {
    src: "/img/mastercard_icon.png",
    alt: "mastercard"
  },
  {
    src: "/img/paypal_icon.png",
    alt: "paypal"
  },
  {
    src: "/img/club_icon.png",
    alt: "club"
  },
  {
    src: "/img/visa_icon.png",
    alt: "visa"
  }
];

function Payment() {
  return (
    <div className="flex w-full items-center justify-center bg-rokefelaBlack px-5 pb-24">
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOnce
        duration={0.7}
        offset={50}>
        <div className="flex max-w-[275px] flex-row flex-wrap items-center justify-center gap-2 md:max-w-full lg:gap-4 ">
          {paymentIcons.map(icon => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={72}
              height={45}
              className="h-[26px] w-[42px] lg:h-[45px] lg:w-[72px]"
            />
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Payment;
