import Image from "next/image";
import img from "../../public/ignite_logo.png";
import Link from "next/link";
function Footer() {
  return (
    <footer className="absolute bottom-0 bg-red-500 w-full p-2 pb-6 h-38 flex items-start justify-around flex-col ">
      <Image src={img} alt="ignite" width={100} height={100} />
      <div className="text-white w-2/3 flex gap-4 ">
        <Link href="#">About</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Help</Link>
      </div>
    </footer>
  );
}

export default Footer;
