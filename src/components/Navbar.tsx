import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/constants/routes";
import { DDCLogo } from "@/constants/assets";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-2 bg-white flex justify-between border-b-2 border-black">
      <Link
        className="flex items-center gap-4 header text-black font-extrabold"
        href={Routes.Home}
      >
        <Image src={DDCLogo.NoText} width={54} height={56} alt="" />
        DDC
      </Link>
      <ul className="subheader text-black flex items-center gap-x-6">
        <Link href={Routes.Home}>Home</Link>
        <Link href={Routes.About}>About</Link>
        <Link href={Routes.Constitution}>Constitution</Link>
        <Link href={Routes.Execs}>Execs</Link>
        <Link href={Routes.Resources}>Resources</Link>
      </ul>
    </nav>
  );
}
