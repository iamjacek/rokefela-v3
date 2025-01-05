"use client";
import { FiX } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function Popup({ playerRef }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //const cookies = new Cookies("registered");
    // if (!cookies.get("registered")) {
    //   var date = new Date();
    //   cookies.set("registered", "true", {
    //     path: "/",
    //     expires: new Date(date.setMonth(date.getMonth() + 6)),
    //     sameSite: "Lax"
    //   });
    //   setTimeout(() => {
    //     setIsOpen(true);
    //   }, 8000);
    // }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(false);
    playerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} overlay`}></div>
      <div
        className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} fixed left-2/4 top-2/4 z-[9999999] mx-[15px] box-border flex min-h-[500px] w-[calc(100%-30px)] max-w-[500px] translate-x-[calc(-50%-15px)] translate-y-[-50%] items-center justify-center border-2 border-white bg-rokefelaBlack bg-gradient-to-b from-brand to-rokefelaBlack px-4 py-10 text-center opacity-0 drop-shadow-lg transition-all`}>
        <button
          className="absolute right-5 top-2 box-border h-10 w-10 p-2 text-3xl text-white"
          onClick={handleClose}>
          <FiX />
        </button>

        <div>
          <h3 className="text-3xl text-white">NEW WEBSITE</h3>
          <p className="drop-shadow-roke pt-4 text-4xl text-brand brightness-200">
            LAUNCH DEAL:
          </p>
          <p className="pt-4 text-3xl text-white">GRAB 5 BEATS</p>
          <p className="pt-4 text-3xl text-white">PAY FOR 1 ONLY</p>
          <p className="pt-4 text-3xl text-white">ALL LICENCES</p>
          <div className="drop-shadow-roke flex justify-center pt-4 pt-6 text-3xl text-red-600">
            24 hours left
          </div>
          <button
      onClick={handleClick}
      className={`main-button mt-5 w-full border-2 border-white font-button text-base tracking-widest text-white transition-all sm:w-fit sm:border-[3px] sm:text-lg md:mt-10 md:text-2xl 2xl:mt-16 2xl:text-3xl mx-auto py-4 px-10 mb-8 mt-0`}>
      <span className="drop-shadow-md">ADD 5 BEATS 👇</span>
      <div className="transition"></div>
    </button>
        </div>
      </div>
    </>
  );
}
