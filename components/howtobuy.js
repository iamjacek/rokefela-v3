import Image from "next/image";

function HowToBuy() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-rokefelaBlack pb-24">
      <h1 className="z-0 w-full px-5 py-20 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
        SAFE, QUICK & EASY.
      </h1>
      <div className="flex w-full flex-row flex-wrap items-center justify-center bg-brand bg-opacity-[45%] px-5 pt-8">
        <div className="flex w-full flex-col items-center justify-center px-4 py-10 lg:w-3/12">
          <Image
            src="/img/search_icon.svg"
            alt="search"
            width={54}
            height={54}
          />
          <h2 className="mb-4 mt-10 text-center font-serif text-2xl tracking-wider text-white md:mb-8 md:text-4xl lg:min-h-[80px] xl:mb-2">
            BROWSE BEATS
          </h2>
          <p className="text-center font-sans text-base tracking-wide text-white md:text-xl lg:min-h-[115px]">
            Pick the beats and choose your license, then add them to
            cart.
          </p>
        </div>
        <Image
          src="/img/arrow-right_icon.svg"
          alt="arrow"
          width={48}
          height={48}
          className="hidden h-[48px] lg:block lg:w-1/12"
        />
        <div className="flex w-full flex-col items-center justify-center px-4 py-10 lg:w-3/12">
          <Image
            src="/img/credit-card_icon.svg"
            alt="search"
            width={54}
            height={54}
            className="min-h-[54px]"
          />
          <h2 className="mb-4 mt-10 text-center font-serif text-2xl tracking-wider text-white md:text-4xl lg:mb-8 lg:min-h-[80px] xl:mb-2">
            BUY BEATS
          </h2>
          <p className="text-center font-sans text-base tracking-wide text-white md:text-xl lg:min-h-[115px]">
            Proceed to checkout and make payment securely.
          </p>
        </div>
        <Image
          src="/img/arrow-right_icon.svg"
          alt="arrow"
          width={48}
          height={48}
          className="hidden h-[48px] lg:block lg:w-1/12"
        />
        <div className="flex w-full flex-col items-center justify-center px-4 py-10 lg:w-3/12">
          <Image
            src="/img/download_icon.svg"
            alt="search"
            width={54}
            height={54}
          />
          <h2 className="mb-4 mt-10 text-center font-serif text-2xl tracking-wider text-white md:text-4xl lg:mb-8 lg:min-h-[80px] xl:mb-2">
            GET BEATS
          </h2>
          <p className="text-center font-sans text-base tracking-wide text-white md:text-xl lg:min-h-[115px]">
            Your beats and contract will be ready to download right
            away.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
