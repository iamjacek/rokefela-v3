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
import Navbar from "@/components/navbar";

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
        <Navbar
          playerRef={playerRef}
          aboutRef={aboutRef}
          faqRef={faqRef}
          contactRef={contactRef}
        />
        {hero && <Hero hero={hero} playerRef={playerRef} />}
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
