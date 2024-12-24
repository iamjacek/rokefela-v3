import PriceBox from "@/components/pricebox";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Pricing({ pricing, playerRef }) {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5 pb-24">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        delay={0.2 * 1000}
        duration={0.7}
        offset={50}>
        <h1 className="z-0 w-full py-12 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          Pricing
        </h1>
      </AnimationOnScroll>
      {/* <h3 className="hidden pb-20 text-center font-sans text-xl tracking-wide text-white md:block lg:max-w-3xl">
        Available licensing
      </h3> */}
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        delay={0.5 * 1000}
        duration={0.7}
        offset={50}>
        <section className="flex w-full max-w-[1500px] flex-wrap justify-center gap-6">
          {pricing &&
            pricing[0].data &&
            pricing[0].data.map((item, index) => (
              <PriceBox
                key={item._key}
                title={item.title}
                price={item.price}
                subtitle={item.subtitle}
                features={item.features}
                playerRef={playerRef}
              />
            ))}
        </section>
      </AnimationOnScroll>
    </div>
  );
}

export default Pricing;
