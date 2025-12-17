"use client";

import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import toast from "react-hot-toast";

export default function ContactUs() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [values, setValues] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const isFormValid =
    values.firstName.trim().length >= 2 &&
    emailRegex.test(values.email) &&
    values.message.trim().length >= 20 &&
    !errors.firstName &&
    !errors.email &&
    !errors.message;

  useEffect(() => {
    const timer = setTimeout(() => {
      // FIRST NAME
      if ("firstName" in values) {
        if (values.firstName.trim().length === 0) {
          setErrors((p) => ({ ...p, firstName: "" }));
        } else if (values.firstName.trim().length < 2) {
          setErrors((p) => ({
            ...p,
            firstName: "Name must be at least 2 characters",
          }));
        } else {
          setErrors((p) => ({ ...p, firstName: "" }));
        }
      }

      // EMAIL
      if ("email" in values) {
        if (values.email.trim().length === 0) {
          setErrors((p) => ({ ...p, email: "" }));
        } else if (!emailRegex.test(values.email)) {
          setErrors((p) => ({
            ...p,
            email: "Enter a valid email address",
          }));
        } else {
          setErrors((p) => ({ ...p, email: "" }));
        }
      }

      // MESSAGE
      if ("message" in values) {
        if (values.message.trim().length === 0) {
          setErrors((p) => ({ ...p, message: "" }));
        } else if (values.message.trim().length < 20) {
          setErrors((p) => ({
            ...p,
            message: "Message must be at least 20 characters",
          }));
        } else {
          setErrors((p) => ({ ...p, message: "" }));
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [values]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setValues({
      firstName: "",
      email: "",
      message: "",
    });
    toast.success("Thank you! Your message has been sent 🎉");
    console.log("Form submitted:", values);
  };

  return (
    <section className="contact-us-section px-4 mx-auto max-w-screen-xl">
      <div className="bg-gradient-to-l from-[#0066A9] to-[#003C65] px-6 w-full pt-10 md:pt-20 pb-6 md:pb-12 rounded-[20px]">
        <h2 className="mb-4 md:mb-16 font-marcellus text-white text-center">
          {"Let's Work Together To Shape A Brighter Future!"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-5xl space-y-4 md:space-y-6"
        >
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <div>
              <input
                id="firstName"
                type="text"
                placeholder="Name"
                value={values.firstName}
                onChange={handleChange}
                className={`${
                  errors.firstName ? " border-red-600 border-2" : "border-none"
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs md:text-sm text-red-400">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Mail"
                value={values.email}
                onChange={handleChange}
                className={`${
                  errors.email ? " border-red-600 border-2" : "border-none"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs md:text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="col-span-2">
              <textarea
                id="message"
                rows={5}
                placeholder="Your message"
                value={values.message}
                onChange={handleChange}
                className={`${
                  errors.message ? " border-red-600 border-2" : "border-none"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs md:text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center pt-4 md:pt-7">
            <button
              type="submit"
              disabled={!isFormValid}
              className=" bg-primary-background disabled:opacity-60 disabled:cursor-not-allowed rounded-full text-base px-12 py-2 hover:brightness-110 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
