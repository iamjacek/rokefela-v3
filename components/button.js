"use client";

export default function Button({ children, extraStyle, form }) {
  const handleClick = e => {
    e.preventDefault();
    playerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`main-button mt-5 w-full border-2 border-white font-button text-base tracking-widest text-white transition-all sm:w-fit sm:border-[3px] sm:text-lg md:mt-10 md:text-2xl 2xl:mt-16 2xl:text-3xl ${extraStyle}`}>
      <span className="drop-shadow-md">{children}</span>
      <div className="transition"></div>
    </button>
  );
}
