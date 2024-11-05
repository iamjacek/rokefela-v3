import "react-alice-carousel/lib/alice-carousel.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const serviceIcons = [
  {
    src: "/img/amazon-music_service.svg",
    alt: "amazon music"
  },
  {
    src: "/img/apple-music_service.svg",
    alt: "apple music"
  },
  {
    src: "/img/deezer_service.svg",
    alt: "deezer"
  },
  {
    src: "/img/pandora_service.svg",
    alt: "pandora premium"
  },
  {
    src: "/img/qobuz_service.svg",
    alt: "qobuz"
  },
  {
    src: "/img/spotify_service.svg",
    alt: "spotify"
  },
  {
    src: "/img/tiktok_service.svg",
    alt: "paypal"
  },
  {
    src: "/img/tidal_service.svg",
    alt: "tidal"
  },
  {
    src: "/img/vevo_service.svg",
    alt: "vevo"
  },
  {
    src: "/img/yt_service.svg",
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
      quality={100}
    />
  ));

  return (
    <section className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5 pb-24">
      <h1 className="z-0 order-1 w-full px-5 py-10 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
        MAKE MONEY FROM YOUR MUSIC.
      </h1>
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
      <h2 className="order-3 w-full px-5 pt-14 text-center font-subtitle text-5xl text-xl uppercase tracking-wider text-white md:text-3xl lg:order-2 lg:pb-20">
        RELEASE SONGS ON ALL STREAMING PLATFORMS
      </h2>
    </section>
  );
}

export default Streaming;
