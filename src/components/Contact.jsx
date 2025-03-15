import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhcb9ho", // Replace with your EmailJS Service ID
        "template_q6buw8x", // Replace with your EmailJS Template ID
        form.current,
        "cOg6dcVgjeZ69dSUd" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8"
    >
      <h1 className="text-center text-6xl font-light text-teal-900">
        Get in Touch
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        method="post"
        className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="user_firstname" // Add this
            placeholder="Your FirstName"
            className="rounded-lg border-2 border-teal-900 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            name="user_surname" // Add this
            placeholder="Your Surname"
            className="rounded-lg border-2 border-teal-900 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            name="email" // Add this
            placeholder="Email"
            className="rounded-lg border-2 border-teal-900 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <textarea
          name="message" // Add this
          placeholder="Your Message"
          className="h-32 w-full resize-none rounded-lg border-2 border-teal-900 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
        ></textarea>
        <button className="rounded-lg border-2 border-teal-800 bg-teal-900 px-6 py-3 font-semibold text-white tran sition-all duration-200 hover:bg-teal-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
