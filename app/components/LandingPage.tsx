"use client";
import Image from "next/image";
import img from "../../public/ignite_logo.png";
import Footer from "./Footer";
import { Fragment } from "react";
import { useRouter } from "next/router";

function LandingPage() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between flex-col h-screen">
      <nav className="w-full h-20 flex items-center justify-between px-6 border-b border-red-500">
        <Image src={img} alt="ignite" width={100} height={100} />
        <button
          className="w-28 h-10 bg-red-500 text-white rounded-3xl"
          onClick={() => router.push("/views/auth")}
        >
          Get started
        </button>
      </nav>

      <section className=" ml-6  flex flex-col gap-10">
        <h1 className="text-7xl w-full">
          Human stories <div>& ideas</div>
        </h1>

        <p className="text-xl ">
          A place to read, write and deepen your understanding.
        </p>
        <button
          className="w-36 h-10 bg-red-500 text-white rounded-3xl"
          onClick={() => router.push("/views/auth")}
        >
          Get started
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
