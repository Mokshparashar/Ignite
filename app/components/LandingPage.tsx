import Image from "next/image";
import img from "../../public/ignite_logo.png";
import Footer from "./Footer";
function LandingPage() {
  return (
    <>
      <nav className="w-full h-20 flex items-center justify-between px-6 border-b border-red-500">
        <Image src={img} alt="ignite" width={100} height={100} />
        <button className="w-28 h-10 bg-red-500 text-white rounded-3xl">
          Get started
        </button>
      </nav>

      <section className="mt-48 ml-6 h-1/2 flex flex-col gap-8 ">
        <h1 className="text-7xl w-3/4">Human stories & ideas</h1>

        <p className="text-xl ">
          A place to read, write and deepen your understanding.
        </p>
        <button className="w-36 h-10 bg-red-500 text-white rounded-3xl">
          Get started
        </button>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
