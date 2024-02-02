"use client";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FormEvent, useContext, useRef, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import emailjs from "@emailjs/browser";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { toggleMode, mode } = themeContext;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current === null) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_pcn4p1x",
        "template_g2fjuph",
        form.current,
        "3j0zijYHIt7_296uh"
      )
      .then(
        (result) => {
          if (result.status === 200 || result.text === "OK") {
            toast.success("Success Send Message 🚀");
            form.current?.reset();
            setIsSubmitting(false);
          }
        },
        (error) => {
          toast.error(`${error.text}😭`);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="flex flex-col gap-6 mx-5 md:flex-row md:justify-center md:items-center lg:items-start md:gap-10">
      <div className="flex flex-col gap-4 md:flex-1 lg:gap-6">
        <h1 className="font-bold text-2xl lg:text-4xl">{`Let's Talk`}</h1>
        <p className="font-medium text-justify text-base leading-8 md:leading-6 lg:leading-8 md:text-start">
          Mari jalin koneksi lebih dekat! Saya sangat antusias untuk mendengar
          lebih banyak tentang ide-ide Anda dan berbagi pengetahuan dalam dunia
          pengembangan web. Mengisi formulir atau langsung menghubungi saya
          melalui kontak yang tertera adalah langkah pertama untuk memulai
          kolaborasi seru bersama. Ayo, mari terhubung dan ciptakan sesuatu yang
          luar biasa bersama-sama! 🚀📩✨
        </p>
        <h2 className="font-bold text-xl lg:text-2xl">Email</h2>
        <p className="flex items-center gap-2">
          <CgMail /> cecepmiftah73@gmail.com
        </p>

        <h2 className="font-bold text-xl lg:text-2xl">Socials</h2>
        <section className="flex flex-col gap-3 lg:gap-6">
          <Link
            href={"https://www.instagram.com/cecepm999/"}
            className="flex gap-2 items-center underline"
          >
            <RiInstagramFill /> cecepm999
          </Link>
          <Link
            href={"https://github.com/cecepmiftah"}
            className="flex gap-2 items-center underline"
          >
            <FaSquareGithub /> cecepmiftah
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/cecep-miftah-solahudin-28b812275/"
            }
            className="flex gap-2 items-center underline"
          >
            <FaLinkedin /> cecep-miftah-solahudin
          </Link>
        </section>
      </div>
      <div className="flex items-center gap-1 justify-center md:hidden">
        <div
          className={`border-b-2 ${
            mode === "dark" ? "border-white" : "border-slate-700"
          }  w-[40%]`}
        />
        <p className="text-lg font-bold">OR</p>
        <div
          className={`border-b-2 ${
            mode === "dark" ? "border-white" : "border-slate-700"
          }  w-[40%]`}
        />
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 md:flex-1"
      >
        <h1 className="font-bold text-2xl">{`Form`}</h1>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Jhon Doe"
          className="py-2 bg-transparent border-b-2 outline-none"
        />
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="jhondoe@email.com"
          className="py-2 bg-transparent border-b-2 outline-none"
        />
        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          placeholder="message"
          cols={30}
          rows={7}
          className="bg-transparent border-b-2 outline-white focus:outline"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="py-2 px-6 bg-black disabled:cursor-not-allowed disabled:bg-gray-700 text-white mt-4"
        >
          Submit
        </button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        transition={Bounce}
        theme="dark"
      />
    </div>
  );
};
