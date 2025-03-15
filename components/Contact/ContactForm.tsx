"use client";

import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto  ">
      <div className="mb-4">
        <label htmlFor="email" className="block uppercase font-semibold mb-3">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary  border-[#3D3D3D]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block uppercase font-semibold mb-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 border-[#3D3D3D]  focus:outline-none focus:ring-2 focus:ring-primary bg-transparent h-48 resize-none"
        ></textarea>
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
