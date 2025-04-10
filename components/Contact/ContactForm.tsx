"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xovenvzr");
  if (state.succeeded) {
    return (
      <div className="h-full w-full text-center items-center flex flex-col mt-12 text-lg">
        Your message have be sent successfully
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto  ">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block uppercase font-semibold mb-3 jura-font"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 border-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary  border-[#3D3D3D]"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block uppercase font-semibold mb-3 jura-font"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full p-2 border-2 border-[#3D3D3D]  focus:outline-none focus:ring-2 focus:ring-primary bg-transparent h-48 resize-none"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <button
        type="submit"
        className="border-primary text-primary py-2.5 px-4 border-2  uppercase text-sm inline-block tracking-[0.2rem]"
      >
        Let’s Get Started
      </button>
    </form>
  );
};
