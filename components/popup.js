"use client";
import { FiX } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Image from "next/image";
const images = [
  {
    url: "/img/popup/1.jpeg"
  },
  {
    url: "/img/popup/2.jpeg"
  },
  {
    url: "/img/popup/3.jpeg"
  },
  {
    url: "/img/popup/4.jpeg"
  },
  {
    url: "/img/popup/5.jpeg"
  },
  {
    url: "/img/popup/6.jpeg"
  },
  {
    url: "/img/popup/7.jpeg"
  },
  {
    url: "/img/popup/8.jpeg"
  },
  {
    url: "/img/popup/9.jpeg"
  },
  {
    url: "/img/popup/10.jpeg"
  },
  {
    url: "/img/popup/11.jpeg"
  },
  {
    url: "/img/popup/12.jpeg"
  }
];

export default function Popup({ playerRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageNo, setImageNo] = useState(0);

  useEffect(() => {
    const cookies = new Cookies("registered");
    if (!cookies.get("registered")) {
      var date = new Date();
      cookies.set("registered", "true", {
        path: "/",
        expires: new Date(date.setMonth(date.getMonth() + 6)),
        sameSite: "Lax"
      });
      setTimeout(() => {
        setIsOpen(true);
      }, 8000);
    }

    const itemsCount = images.length;
    const min = 1;
    const max = Math.floor(itemsCount);
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setImageNo(number);
  }, []);

  const RandomImage = ({ randomImage }) => {
    return (
      <Image
        src={images[randomImage].url}
        alt="8 free for profits beats"
        width="500"
        height="500"
        className="h-auto max-w-max object-cover object-right"
      />
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(false);
    //playerRef.current.scrollIntoView({ behavior: "smooth" });
    window.open(
      "https://mailchi.mp/3bc001c74959/8freebeats",
      "_blank"
    );
  };

  return (
    <>
      <div
        className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} overlay`}></div>
      <div
        className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} fixed left-2/4 top-2/4 z-[9999999] mx-[15px] box-border flex max-h-[500px] min-h-[500px] w-[calc(100%-30px)] max-w-[500px] translate-x-[calc(-50%-15px)] translate-y-[-50%] items-center justify-center opacity-0 transition-all md:max-w-full md:flex-row`}>
        <div className="hidden max-h-[500px] min-h-[500px] max-w-[500px] overflow-hidden border-2 border-r-0 border-white md:block md:w-6/12">
          {imageNo > 0 && <RandomImage randomImage={imageNo} />}
        </div>
        <div
          className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} mx-[15px] box-border flex min-h-[500px] min-h-[500px] w-[calc(100%-30px)] max-w-[500px] items-center justify-center border-2 border-white bg-rokefelaBlack bg-gradient-to-b from-brand to-rokefelaBlack px-4 py-10 text-center opacity-0 drop-shadow-lg transition-all md:mx-0`}>
          <button
            className="absolute right-5 top-2 box-border h-10 w-10 p-2 text-3xl text-white"
            onClick={handleClose}>
            <FiX />
          </button>

          <div>
            <h3 className="text-3xl text-white">
              8 FREE FOR PROFIT BEATS
            </h3>
            {/* <p className="drop-shadow-roke pt-4 text-4xl text-brand brightness-200">
              LAUNCH DEAL:
            </p> */}
            <p className="pt-4 text-3xl text-white">Get this deal!</p>
            <p className="pt-4 text-3xl text-white">
              Download them now!
            </p>
            {/* <p className="pt-4 text-3xl text-white">
              on all digital platforms like: SPOTIFY, APPLE MUSIC,
              iTUNES, YOUTUBE etc.
            </p> */}
            <div className="drop-shadow-roke flex justify-center pt-4 pt-6 text-3xl text-red-600">
              FOR FREE.
            </div>
            <button
              onClick={handleClick}
              className={`main-button mx-auto mb-8 mt-0 mt-5 w-full border-2 border-white px-10 py-4 font-button text-base tracking-widest text-white transition-all sm:w-fit sm:border-[3px] sm:text-lg md:mt-10 md:text-2xl 2xl:mt-16 2xl:text-3xl`}>
              <span className="drop-shadow-md">GET 8 BEATS 👇</span>
              <div className="transition"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
