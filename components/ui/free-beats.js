"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const requiredSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  name: Yup.string().required("Name is required")
});

export default function FreeBeats() {
  const [isOpen, setIsOpen] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [status, setStatus] = useState(null > null);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [run, setRun] = useState(false);
  const [totalCounts, setTotalCounts] = useState(400);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

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
        setMessage("");
        resetForm();
        setButtonDisabled(false);
        setIsOpen(false);
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
      <Container className="relative mx-auto bg-rokefelaBlack">
        <article className="imageOverlayFreeBeats relative bg-[url(/img/rapper.jpeg)] bg-cover bg-[20%] bg-no-repeat sm:bg-left-top">
          <div className="z-1 relative pb-72">
            <div className="mb-16 bg-brand bg-opacity-[45%] px-4 py-8 sm:px-8 xl:py-10">
              <h1 className="z-0 w-full pt-[80px] text-center font-serif text-3xl uppercase tracking-wider text-white md:text-6xl lg:pt-0 xl:text-7xl">
                8 FREE FOR PROFIT BEATS
              </h1>
            </div>
            <div className="mx-auto my-8 max-w-5xl px-4 text-base text-white sm:px-8 lg:max-w-xl">
              <p className="pb-8 text-xl">
                Perform, stream, sell, promote, drop album & EARN
                MONEY on all digital platforms like: SPOTIFY, APPLE
                MUSIC, iTUNES, YOUTUBE etc.
              </p>
              <p className="pb-16 text-xl">
                DO WHATEVER YOU WANT 😈 FOR FREE.
              </p>
              <p className="text-2xl">DOWNLOAD THEM BELOW👇</p>
            </div>
            <Formik
              initialValues={{
                email: "",
                name: ""
              }}
              validationSchema={requiredSchema}
              onSubmit={handleSubmit}>
              <Form
                className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} mx-4 box-border flex w-[calc(100%-32px)] items-center justify-center text-center opacity-0 drop-shadow-lg transition-all sm:mx-8 sm:w-[calc(100%-64px)] lg:mx-auto lg:max-w-xl lg:px-8`}>
                <div className="w-full">
                  <p className="text-left text-white">First Name</p>
                  <Field
                    type="text"
                    name="name"
                    className="relative mb-4 mt-1 w-full grow border-2 bg-transparent bg-white px-4 py-4 text-[18px] text-rokefelaBlack outline-none outline-none placeholder:text-gray-700 focus:ring-4"
                    placeholder=""
                    autoComplete="off"
                  />
                  <p className="text-left text-white">
                    Email Address
                  </p>

                  <Field
                    type="email"
                    name="email"
                    className="relative mb-4 mt-1 w-full grow border-2 bg-transparent bg-white px-4 py-4 text-[18px] text-rokefelaBlack outline-none outline-none placeholder:text-gray-700 focus:ring-4"
                    placeholder=""
                    autoComplete="off"
                  />

                  <button
                    className="main-button mx-auto mb-16 mt-0 w-full border-2 border-white px-4 py-4 font-button text-base tracking-widest text-white transition-all sm:border-[3px] lg:px-2"
                    type="submit"
                    disabled={buttonDisabled}>
                    GET YOUR BEATS🎧
                  </button>
                  {message && (
                    <p
                      className={`${status !== 201 ? "bg-red-500" : "bg-green-500"} mb-4 w-full px-4 py-2 text-left text-white`}>
                      {message}
                    </p>
                  )}
                  <p className="text-left text-sm text-white">
                    One-click unsubscribe option guaranteed.
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
        </article>
      </Container>
    </>
  );
}
