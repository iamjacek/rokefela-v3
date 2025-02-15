"use client";
import { FiX } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

const requiredSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  name: Yup.string().required("Name is required")
});

export default function Popup({ playerRef, settings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageNo, setImageNo] = useState(0);
  const [status, setStatus] = useState(null > null);
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [run, setRun] = useState(false);
  const [totalCounts, setTotalCounts] = useState(400);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

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

    const itemsCount = images.length - 1;
    const min = 1;
    const max = Math.floor(itemsCount);
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setImageNo(number);

    // form
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height
    });
  }, []);

  const RandomImage = ({ randomImage }) => {
    return (
      <Image
        src={images[randomImage].url}
        alt="8 free for profits beats"
        width="500"
        height="500"
        className="h-auto w-full object-cover object-right md:h-full"
      />
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (values, { resetForm }) => {
    setMessage("");
    setButtonDisabled(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: values?.email,
          full_name: values?.name
        })
      });
      const datas = await response.json();

      if (datas.status >= 400) {
        setStatus(datas.status);
        setMessage("Error joining the newsletter. Try again later.");
        setTimeout(() => {
          setButtonDisabled(false);
        }, 8000);
        return;
      }
      setStatus(201);
      setMessage("Check your email and download the beats🎲");
      setRun(true);
      setTimeout(() => {
        setTotalCounts(0);
        //setMessage("");
        resetForm();
        setButtonDisabled(false);
        //setIsOpen(false);
      }, 5000);
      setTotalCounts(400);
    } catch (error) {
      setStatus(500);
      setMessage("Error joining the newsletter. Try again later.");
      setTimeout(() => {
        setButtonDisabled(false);
      }, 8000);
    }
  };

  return (
    <>
      <div
        className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} overlay`}></div>
      <div
        className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} fixed left-2/4 top-2/4 z-[9999999] mx-[15px] box-border flex h-[calc(100%-30px)] w-full translate-x-[calc(-50%-15px)] translate-y-[-50%] flex-col items-center justify-center opacity-0 transition-all md:h-[500px] md:w-[calc(100%-30px)] md:flex-row`}>
        <div className="relative w-[calc(100%-30px)] overflow-hidden border-2 border-b-0 border-white md:h-[500px] md:w-6/12 md:max-w-[500px] md:border-b-2 md:border-r-0">
          {imageNo > 0 && <RandomImage randomImage={imageNo} />}
        </div>
        <Formik
          initialValues={{
            email: "",
            name: ""
          }}
          validationSchema={requiredSchema}
          onSubmit={handleSubmit}>
          <Form
            className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} mx-[15px] box-border flex w-[calc(100%-30px)] items-center justify-center border-2  border-white bg-rokefelaBlack bg-gradient-to-b from-brand to-rokefelaBlack px-4 py-10 text-center opacity-0 drop-shadow-lg transition-all md:mx-0 md:h-[500px] md:w-6/12 md:max-w-[500px] md:px-6`}>
            <button
              className="absolute right-2 top-2 box-border h-10 w-10 p-2 text-3xl text-white md:right-5"
              onClick={handleClose}>
              <FiX />
            </button>
            <div>
              <h3 className="text-xl text-white md:text-2xl">
                8 FREE BEATS WITH COMMERCIAL RIGHTS 👇
              </h3>
              <Field
                type="text"
                name="name"
                className="relative mt-8 w-full grow border-2 bg-transparent bg-white px-5 py-3 text-rokefelaBlack outline-none outline-none placeholder:text-gray-700 focus:ring-4 md:mt-12"
                placeholder="First Name"
                autoComplete="off"
              />
              <Field
                type="email"
                name="email"
                className="relative mt-4 w-full grow border-2 bg-transparent bg-white px-5 py-3 text-rokefelaBlack outline-none outline-none placeholder:text-gray-700 focus:ring-4 md:mt-8"
                placeholder="E-mail address"
                autoComplete="off"
              />
              <button
                className="main-button lg: mx-auto mb-8 mt-2 mt-4 w-full border-2 border-white px-4 py-4 font-button text-base tracking-widest text-white transition-all sm:border-[3px] lg:px-2"
                type="submit"
                disabled={buttonDisabled}>
                GET 8 FREE FOR PROFIT BEATS
              </button>
              {message && (
                <p
                  className={`${status !== 201 ? "text-red-500" : "text-green-500"} w-full pt-4 font-black`}>
                  {message}
                </p>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
