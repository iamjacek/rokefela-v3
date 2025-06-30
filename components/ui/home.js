"use client";
import { useRef } from "react";
import Container from "@/components/container";
import Hero from "@/components/hero";
import Player from "@/components/player";
import Payment from "@/components/payment";
import HowToBuy from "@/components/howtobuy";
import Pricing from "@/components/pricing";
import Streaming from "@/components/streaming";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Contact from "@/components/contact";
import Banner from "@/components/banner";
import Popup from "@/components/popup";
import Beyou from "@/components/beyou";

export default function Home({
  hero,
  pricing,
  faq,
  testimonials,
  about,
  settings
}) {
  const playerRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Container>
        {hero && hero[0].isPopupOn && (
          <Popup hero={hero} playerRef={playerRef} />
        )}
        {hero && <Banner hero={hero} playerRef={playerRef} />}

        {hero && <Hero hero={hero} playerRef={playerRef} />}
        <Beyou />
        <Player ref={playerRef} />
        <Payment />
        <HowToBuy />
        {pricing && (
          <Pricing pricing={pricing} playerRef={playerRef} />
        )}
        <Streaming />
        {faq && <FAQ faq={faq} ref={faqRef} />}
        {testimonials && <Testimonials testimonials={testimonials} />}
        {about && (
          <About ref={aboutRef} playerRef={playerRef} about={about} />
        )}
        <Contact ref={contactRef} settings={settings} />
      </Container>
    </>
  );
}
