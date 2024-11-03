"use client";
import { useRef } from "react";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
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

export default function Home({
  hero,
  pricing,
  faq,
  testimonials,
  about
}) {
  const playerRef = useRef(null);
  return (
    <>
      <Container>
        {hero && <Hero hero={hero} playerRef={playerRef} />}
        <Player ref={playerRef} />
        <Payment />
        <HowToBuy />
        {pricing && <Pricing pricing={pricing} />}
        <Streaming />
        {faq && <FAQ faq={faq} />}
        {testimonials && <Testimonials testimonials={testimonials} />}
        {about && <About playerRef={playerRef} about={about} />}
        <Contact />
        {/* <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div> */}
      </Container>
    </>
  );
}
