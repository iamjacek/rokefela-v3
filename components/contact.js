"use client";

import { useState, forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
const Contact = forwardRef((props, ref) => {
  const { settings } = props;
  const styles = {
    width: "530px"
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "ROKEFELA WEBSITE",
      subject: "New Form Message"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center justify-center bg-rokefelaBlack px-5 pb-24 md:pt-20">
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOnce
        duration={0.7}
        offset={50}>
        <h1 className="w-full px-5 py-10 text-center font-serif text-4xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
          Contact
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOnce
        style={styles}
        duration={0.7}
        offset={50}>
        <div className="w-full md:max-w-[520px]">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="my-10">
              <input
                type="checkbox"
                id=""
                className="hidden w-full px-5 py-3"
                style={{ display: "none" }}
                {...register("botcheck")}></input>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  autoComplete="false"
                  className={`w-full border-2 bg-white px-5 py-3 text-rokefelaBlack outline-none placeholder:text-gray-700 focus:ring-4 ${
                    errors.name
                      ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                      : ""
                  }`}
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 80
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="false"
                  className={`w-full border-2 bg-white px-5 py-3 text-rokefelaBlack outline-none placeholder:text-gray-700 focus:ring-4 ${
                    errors.email
                      ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                      : ""
                  }`}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email"
                    }
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`w-full border-2 border-rokefelaBlack bg-white px-5 py-3 text-rokefelaBlack outline-none placeholder:text-gray-700 focus:ring-4 ${
                    errors.message
                      ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                      : ""
                  }`}
                  {...register("message", {
                    required: "Enter your Message"
                  })}
                />
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    {" "}
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={`mt-16 w-full border-2 border-white bg-transparent px-5 py-3 font-button text-base tracking-widest text-white transition-all hover:bg-white hover:text-rokefelaBlack sm:border-[3px] sm:py-4 sm:text-xl md:mt-28 md:py-6 md:text-2xl`}>
                {isSubmitting ? (
                  <svg
                    className="mx-auto h-5 w-5 animate-spin text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-center text-sm text-green-500">
                {message || "Success. Message sent successfully"}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-center text-sm text-red-500">
                {message || "Something went wrong. Please try later."}
              </div>
            )}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
});
export default Contact;
