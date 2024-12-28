"use client";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

const styles = "w-full max-w-48";
const footerData = [
  {
    title: "IMPORTANT",
    links: [
      { text: "Licences", href: "/licences" },
      { text: "FAQ", href: "/faq" },
      { text: "ABOUT", href: "/about" },
      { text: "Contact", href: "/contact" }
    ]
  },
  {
    title: "NEXT STEPS",
    links: [
      { text: "8 Free for profit beats", href: "https://mailchi.mp/3bc001c74959/8freebeats" },
      { text: "20 Detroit Beat Bundle", href: "https://dth.rokefela.com/" },
      { text: "350k+ YT Channel", href: "https://www.youtube.com/channel/UCj4EkDhY1wwKmyZauI9NQfw?sub_confirmation=1" },
    ]
  },
  {
    title: "FOLLOW ME",
    links: [
      {
        icon: <FiInstagram />,
        href: "https://www.instagram.com/rokefela_/"
      },
      {
        icon: <FiYoutube />,
        href: "https://www.youtube.com/channel/UCj4EkDhY1wwKmyZauI9NQfw?sub_confirmation=1"
      },
      {
        icon: "/img/x.svg",
        href: "https://x.com/rokefela",
        image: true
      },
      {
        icon: "/img/spotify.png",
        href: "https://open.spotify.com/artist/4Ikusg8rsSZk8n2SmSqJH4",
        image: true
      }
    ]
  },
  {
    links: [
      {
        icon: "/img/footer_image.png?v=08",
        href: "https://beacons.ai/rokefela",
        image: true,
        styleImage: styles,
        styleATag: styles
      }
    ]
  }
];

const FooterCopyright = () => {
  return (
    <div className="flex items-center justify-center bg-brand bg-opacity-[45%] px-5 py-20 text-center md:py-6 lg:justify-between">
      <div className="ml-6 hidden font-mono text-sm tracking-wider text-white hover:underline lg:block">
        <Link href="/terms">TERMS OF USE</Link>
      </div>
      <div className="font-sans text-base text-lg tracking-wider text-white">
        &copy; Copyright {new Date().getFullYear()},{` `}
        <a
          href="https://rokefela.com"
          target="__blank"
          rel="noopener noreferrer"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase drop-shadow-md hover:underline">
          ROKEFELA
        </a>
      </div>
      <div className="mr-6 hidden font-mono text-sm tracking-wider text-white drop-shadow-md hover:underline lg:block">
        <Link href="/privacypolicy" rel="noopener noreferrer">
          PRIVACY POLICY
        </Link>
      </div>
    </div>
  );
};

export default function Footer(props) {
  return (
    <footer className="bg-rokefelaBlack">
      <AnimationOnScroll
        animateIn="fadeInUp"
        animateOnce
        duration={0.7}
        offset={50}>
        <div className="sm:pt-30 pt-20">
          {/* Footer social links */}
          <div className="mb-12 flex flex-col items-center justify-center px-5 sm:mb-28 md:px-20">
            <div className="flex w-full flex-wrap gap-4 text-center sm:gap-6">
              {footerData &&
                footerData.map((link, i) => (
                  <div
                    key={i}
                    className="mb-12 flex w-full flex-col md:w-[calc(50%-1.5rem/2)] lg:mb-0 lg:w-[calc(25%-1.5rem*3/4)]">
                    {link.title && (
                      <h4 className="mb-8 font-serif text-xl leading-5 tracking-wider text-white lg:text-2xl lg:leading-6">
                        {link.title}
                      </h4>
                    )}

                    <div
                      className={`flex w-full items-center justify-center ${link.links[0].text ? "flex-col" : "flex-row"}`}>
                      {link.links &&
                        link.links.map((el, i) => (
                          <a
                            key={i}
                            href={el.href}
                            target="__blank"
                            className={`flex cursor-pointer items-center justify-center font-mono text-sm uppercase tracking-wider tracking-wider text-white text-white hover:underline ${el.styleImage ?? el.styleImage} ${el.icon ?? "py-3"}`}>
                            {el.image ? (
                              <Image
                                src={el.icon}
                                alt="X"
                                width={el.styleATag ? "192" : "28"}
                                height={el.styleATag ? "192" : "28"}
                                className={`mx-4 text-xl sm:text-2xl md:text-3xl ${el.styleATag ?? el.styleATag}`}
                              />
                            ) : el.text ? (
                              el.text
                            ) : (
                              <i className="mx-4 text-3xl">
                                {el.icon}
                              </i>
                            )}
                          </a>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <FooterCopyright />
        </div>
      </AnimationOnScroll>
    </footer>
  );
}
