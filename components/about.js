import Image from "next/image";
import Button from "@/components/button";
import Markdown from "react-markdown";
import { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
const About = forwardRef((props, ref) => {
  const { playerRef, about } = props;
  const styles = {
    width: "100%",
    textAlign: "center"
  };
  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5 pb-24">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        offset={50}>
        <h1 className="z-0 w-full py-20 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          WHO AM I?
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        offset={50}>
        <div className="flex max-w-[615px] flex-col items-start justify-center gap-10 lg:max-w-5xl lg:flex-row">
          <div className="font-sans text-lg leading-8 tracking-wider text-white lg:w-8/12">
            {about &&
              about[0].content[0] &&
              about[0].content[0].children[0] &&
              about[0].content[0].children[0].text && (
                <Markdown
                  components={{
                    p(props) {
                      const { node, ...rest } = props;
                      return (
                        <p
                          style={{ marginBottom: "2rem" }}
                          {...rest}
                        />
                      );
                    }
                  }}>
                  {about[0].content[0].children[0].text}
                </Markdown>
              )}
          </div>

          <div className="lg:w-4/12">
            <Image
              src="/img/roke-min.png"
              alt="Rokefela"
              width={615}
              height={968}
              className=""
            />
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        style={styles}
        delay={0.5 * 1000}
        duration={0.7}
        offset={50}>
        <Button
          playerRef={playerRef}
          extraStyle="mb-12 py-4 px-6 md:px-24 sm:py-5 md:py-7 sm:px-26 2xl:py-8 2xl:px-14 sm:w-full sm:max-w-[615px] 2xl:max-w-[815px]">
          BROWSE BEATS
        </Button>
      </AnimationOnScroll>
    </section>
  );
});

export default About;
