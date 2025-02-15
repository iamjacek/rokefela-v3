"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function FreeBeats() {
  const [isOpen, setIsOpen] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [status, setStatus] = useState(null > null);
  const [message, setMessage] = useState("");

  const requiredSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    name: Yup.string().required("Name is required")
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
      <Container className="mx-auto mb-8 bg-rokefelaBlack">
        <div className="h-[92px]"></div>
        <article>
          <div>
            <div className="mb-16 bg-brand bg-opacity-[45%] px-4 py-8 md:px-8">
              <h1 className="z-0 w-full text-center font-serif text-3xl uppercase tracking-wider text-white lg:text-5xl 2xl:text-6xl">
                8 FREE FOR PROFIT BEATS
              </h1>
            </div>
            <div className="color-white mx-auto my-8 max-w-5xl px-4 text-base md:px-8">
              <p className="pb-8 font-bold">
                Perform, stream, sell, promote, drop album & EARN
                MONEY on all digital platforms like: SPOTIFY, APPLE
                MUSIC, iTUNES, YOUTUBE etc.
              </p>
              <p className="pb-16 font-bold">
                DO WHATEVER YOU WANT 😈 FOR FREE.
              </p>
              <p className="font-bold text-[18px]">
                DOWNLOAD THEM BELOW👇
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
                name: ""
              }}
              validationSchema={requiredSchema}
              onSubmit={handleSubmit}>
              <Form
                className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} mx-4 box-border flex w-[calc(100%-30px)] items-center justify-center bg-rokefelaBlack text-center opacity-0 drop-shadow-lg transition-all md:mx-0 md:h-[500px] md:w-6/12 md:max-w-[500px] md:px-6`}>
                <div>
                  <p>Email Address</p>

                  <Field
                    type="email"
                    name="email"
                    className="relative mt-4 w-full grow border-2 bg-transparent bg-white px-5 py-3 text-rokefelaBlack outline-none outline-none placeholder:text-gray-700 focus:ring-4 md:mt-8"
                    placeholder="E-mail address"
                    autoComplete="off"
                  />
                  <p>First Name</p>
                  <Field
                    type="text"
                    name="name"
                    className="relative mt-8 w-full grow border-2 bg-transparent bg-white px-5 py-3 text-rokefelaBlack outline-none outline-none placeholder:text-gray-700 focus:ring-4 md:mt-12"
                    placeholder="First Name"
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
        </article>
      </Container>
    </>
  );
}
