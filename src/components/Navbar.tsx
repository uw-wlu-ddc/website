import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/constants/routes";
import { DDCLogo } from "@/constants/assets";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 h-20 px-6 py-2 bg-white bordered shadow flex justify-between">
      <Link className="h-fit items-center inline-flex" href={Routes.Home}>
        <Image src={DDCLogo.NoText} width={54} height={56} priority alt="" />
        <p className="px-4 font-figtree text-header text-black font-extrabold">
          DDC
        </p>
      </Link>
      <div
        className="subheader text-black items-center inline-flex gap-x-6"
      >
        <Link href={Routes.Home}>Home</Link>
        <Link href={Routes.About}>About</Link>
        <Link href={Routes.Constitution}>Constitution</Link>
        <Link href={Routes.Execs}>Execs</Link>
        <Link href={Routes.Resources}>Contact</Link>
      </div>
    </nav>
  );
}
