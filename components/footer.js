"use client";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

const styles = "w-full max-w-48";
const footerData = [
  {
    title: "IMPORTANT",
    links: [
      { text: "Licences", href: "#licences", target: "_self" },
      { text: "FAQ", href: "#faq", target: "_self" },
      { text: "ABOUT", href: "#about", target: "_self" },
      { text: "Contact", href: "#contact", target: "_self" }
    ]
  },
  {
    title: "NEXT STEPS",
    links: [
      {
        text: "8 Free for profit beats",
        href: "/8freebeats",
        target: "_self"
      },
      {
        text: "20 Detroit Beat Bundle",
        href: "https://dth.rokefela.com/",
        target: "_blank"
      },
      {
        text: "350k+ YT Channel",
        href: "https://www.youtube.com/channel/UCj4EkDhY1wwKmyZauI9NQfw?sub_confirmation=1",
        target: "_blank"
      }
    ]
  },
  {
    title: "FOLLOW ME",
    links: [
      {
        icon: <FiInstagram />,
        href: "https://www.instagram.com/rokefela_/",
        target: "_blank"
      },
      {
        icon: <FiYoutube />,
        href: "https://www.youtube.com/channel/UCj4EkDhY1wwKmyZauI9NQfw?sub_confirmation=1",
        target: "_blank"
      },
      {
        icon: "/img/x.svg",
        href: "https://x.com/rokefela_?s=21&t=FRqm8kjxE5YkLrbEB-k0Yg",
        target: "_blank",
        image: true
      },
      {
        icon: "/img/spotify.png",
        href: "https://open.spotify.com/artist/4Ikusg8rsSZk8n2SmSqJH4",
        target: "_blank",
        image: true
      }
    ]
  },
  {
    links: [
      {
        icon: "/img/footer_image.png?v=08",
        href: "https://beacons.ai/rokefela",
        target: "_blank",
        image: true,
        styleImage: styles,
        styleATag: styles
      }
    ]
  }
];

const FooterCopyright = ({ linksHidden }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-y-4 bg-brand ${linksHidden ? "absolute bottom-0 w-full bg-opacity-[0%]" : "relative bg-opacity-[45%]"} px-5 py-20 text-center md:py-6 lg:flex-row lg:justify-between`}>
      <div className="font-mono text-sm tracking-wider text-white hover:underline lg:ml-6">
        <Link href="/terms-and-conditions">TERMS AND CONDITIONS</Link>
      </div>
      <div className="font-sans text-base text-lg tracking-wider text-white">
        &copy; Copyright {new Date().getFullYear()},{` `}
        <Link
          href="/"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase drop-shadow-md hover:underline">
          ROKEFELA
        </Link>
      </div>
      <div className="font-mono text-sm tracking-wider text-white drop-shadow-md hover:underline lg:mr-6">
        <Link href="/privacy">PRIVACY POLICY</Link>
      </div>
    </div>
  );
};

export default function Footer({ linksHidden }) {
  if (linksHidden) {
    return <FooterCopyright linksHidden={linksHidden} />;
  } else {
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
                              target={el.target}
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
}
