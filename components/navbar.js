"use client";
import { useState, useRef } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";

function Header({
  playerRef,
  aboutRef,
  faqRef,
  contactRef,
  menuItems
}) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  const delay = 300;

  function toggleMenu() {
    if (!showMenu) {
      ref.current.style.display = "flex";
      setTimeout(() => {
        setShowMenu(true);
      });
    } else {
      setShowMenu(false);
      setTimeout(() => {
        ref.current.style.display = "none";
      }, delay);
    }
  }

  const handleClick = customRef => {
    if (customRef) {
      customRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileClick = customRef => {
    customRef.current.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };
  return (
    <header
      className={
        showMenu
          ? "fixed z-[999999] block w-full"
          : "absolute block w-full"
      }>
      {/* Small screen hamburger menu */}
      <div className="relative z-[999999] md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="px-6 py-5 focus:outline-none"
          aria-label="Hamburger Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-white text-white">
            {showMenu ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </svg>
        </button>
      </div>
      {/* desktop menu */}

      <div className="absolute inset-x-0 top-0 z-10 flex hidden justify-center bg-gradient-to-b from-rokefelaBlack from-[-100%] py-6 font-mono md:block">
        <AnimationOnScroll
          animateIn="fadeInUp"
          animateOnce
          duration={0.7}
          offset={150}>
          <ul className="flex flex-row justify-center gap-4">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer px-4 py-2 text-center text-lg tracking-widest text-white drop-shadow-md lg:text-xl 2xl:text-2xl">
                <Link
                  href={`${item.href ? item.href : "#"}`}
                  target={item.target}
                  rel="noopener"
                  onClick={() => handleClick(item.ref)}
                  className="menuItem relative">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </AnimationOnScroll>
      </div>

      {/* mobile menu */}
      <div
        ref={ref}
        style={{ display: "none" }}
        className={`absolute top-0 z-[99999] flex h-screen w-full items-center justify-center bg-rokefelaBlack pb-20 pt-20 font-mono text-white transition-[opacity] duration-300 ease-in-out ${
          showMenu ? "opacity-100" : "opacity-0"
        }`}>
        <ul className="flex flex-col items-center justify-center justify-between">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="block cursor-pointer p-2 text-left text-2xl tracking-widest">
              <Link
                href="#"
                onClick={() => handleMobileClick(item.ref)}
                aria-label={item.name}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
