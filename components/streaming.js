import "react-alice-carousel/lib/alice-carousel.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
const serviceIcons = [
  {
    src: "/img/amazon-music_service.png",
    alt: "amazon music"
  },
  {
    src: "/img/apple-music_service.png",
    alt: "apple music"
  },
  {
    src: "/img/deezer_service.png",
    alt: "deezer"
  },
  {
    src: "/img/pandora_service.png",
    alt: "pandora premium"
  },
  {
    src: "/img/qobuz_service.png",
    alt: "qobuz"
  },
  {
    src: "/img/spotify_service.png",
    alt: "spotify"
  },
  {
    src: "/img/tiktok_service.png",
    alt: "paypal"
  },
  {
    src: "/img/tidal_service.png",
    alt: "tidal"
  },
  {
    src: "/img/vevo_service.png",
    alt: "vevo"
  },
  {
    src: "/img/yt_service.png",
    alt: "youtube music"
  }
];

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false
});

function Streaming() {
  const responsive = {
    0: { items: 2 },
    600: { items: 3 },
    1024: { items: 4 }
  };

  const handleDragStart = e => e.preventDefault();

  //no ssr is to avoid hydration issue which occurs when implementing responsive qty of items in AliceCarousel
  const items = serviceIcons.map(icon => (
    <Image
      key={icon.alt}
      src={icon.src}
      alt={icon.alt}
      onDragStart={handleDragStart}
      role="presentation"
      width="250"
      height="80"
      unoptimized
    />
  ));

  const styles = {
    width: "1000px"
  };

  return (
    <section className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5 pb-24">
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOnce
        duration={0.7}
        offset={50}>
        <h1 className="z-0 order-1 w-full px-5 py-10 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          MAKE MONEY FROM YOUR MUSIC
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOnce
        duration={0.7}
        delay={0.3 * 1000}
        offset={50}
        style={styles}>
        {serviceIcons && (
          <div className="relative order-2 my-10 w-full max-w-5xl px-5 lg:order-3">
            <AliceCarousel
              items={items}
              autoPlayInterval="1000"
              autoPlayStrategy="none"
              autoPlay
              disableDotsControls
              infinite="true"
              disableButtonsControls
              responsive={responsive}
              animationDuration="400"
              animationType="slide"
            />
          </div>
        )}
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOnce
        duration={0.7}
        delay={0.5 * 1000}
        offset={50}>
        <h2 className="order-3 w-full px-5 pt-14 text-center font-subtitle text-5xl text-xl uppercase tracking-wider text-white md:text-3xl lg:order-2 lg:pb-20">
          RELEASE SONGS ON ALL STREAMING PLATFORMS
        </h2>
      </AnimationOnScroll>
    </section>
  );
}

export default Streaming;
