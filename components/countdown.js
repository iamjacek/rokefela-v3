import React from "react";
import { useCountdown } from "@/components/hooks/useCountdown";

const ExpiredNotice = ({ endMsg, playerRef }) => {
  const handleClick = e => {
    e.preventDefault();
    playerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      onClick={handleClick}
      className={`from-1% relative z-[999999] m-0 flex h-20 w-full cursor-pointer items-center justify-center gap-2.5 border-b-2 bg-gradient-to-r from-brand to-rokefelaBlack px-4 text-center transition-all sm:gap-5 md:gap-6 lg:gap-8`}>
      <div className="expired-notice">
        <p className="text-xs leading-3 text-white sm:text-base md:text-xl lg:text-2xl">
          {endMsg
            ? endMsg
            : "Deal has expired! Check out my socials to be up to date!"}
        </p>
      </div>
    </div>
  );
};

const DateTimeDisplay = ({ value, type, isDanger, size }) => {
  return (
    <div className="flex w-12 flex-col items-center justify-center gap-x-5 text-center md:w-16">
      <p
        className={`${size ? "text-center text-base leading-6 text-red-600 md:text-2xl" : "text-xs leading-3 text-red-600 sm:text-base sm:leading-4 md:text-xl md:leading-5 lg:text-2xl lg:leading-6"}`}>
        {value}
      </p>
      <span
        className={`${size ? "text-center text-base leading-3 text-red-600 md:text-2xl" : "text-xs leading-3 text-red-600 sm:text-base sm:leading-4 md:text-xl md:leading-5 lg:text-2xl lg:leading-6"}`}>
        {type}
      </span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds, size }) => {
  return (
    <div className="show-counter text-white">
      <div className="countdown-link">
        {days > 0 && (
          <>
            <DateTimeDisplay
              value={days}
              type={"Days"}
              isDanger={days <= 3}
              size={size}
            />
            <p className="text-red-600">:</p>
          </>
        )}
        {hours > 0 && (
          <>
            <DateTimeDisplay
              value={hours}
              type={"Hours"}
              isDanger={false}
              size={size}
            />
            <p className="text-red-600">:</p>
          </>
        )}
        <DateTimeDisplay
          value={minutes}
          type={"Mins"}
          isDanger={false}
          size={size}
        />
        <p className="text-red-600">:</p>
        <DateTimeDisplay
          value={seconds}
          type={"Sec"}
          isDanger={false}
          size={size}
        />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate, size, endMsg, text, playerRef }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const handleClick = e => {
    e.preventDefault();
    playerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice endMsg={endMsg} playerRef={playerRef} />;
  } else {
    return (
      <>
        <div
        onClick={handleClick}
          className={`from-1% relative z-[999999] m-0 flex h-20 w-full cursor-pointer items-center justify-center gap-2.5 border-b-2 bg-gradient-to-r from-brand to-rokefelaBlack px-4 text-center transition-all sm:gap-5 md:gap-6 lg:gap-8`}>
          <p className="text-xs text-white sm:text-base md:text-xl lg:text-2xl">
            {text}
          </p>
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            size={size}
          />
        </div>
      </>
    );
  }
};

export default CountdownTimer;
