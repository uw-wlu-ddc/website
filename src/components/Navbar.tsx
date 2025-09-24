import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/constants/routes";
import { DDCLogo } from "@/constants/assets";
import NavDropDownItem from "@/components/NavDropDownItem";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-2 bg-white flex justify-between border-b-2 border-black">
      <Link
        className="flex items-center gap-4 font-figtree text-header font-extrabold"
        href={Routes.Home}
      >
        <Image src={DDCLogo.NoText} width={54} height={56} alt="" />
        DDC
      </Link>
      <ul className="font-figtree text-subheader flex items-center gap-x-6">
        <Link href={Routes.Home}>Home</Link>
        <li className="relative group">
          <span className="cursor-pointer">About</span>
          <div className="p-4 gap-4 absolute left-0 top-full mt-8 bg-white ddc-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col">
            <NavDropDownItem title="About Execs" summary="About elections and execs" route={Routes.About}/>
            <NavDropDownItem title="Current Team" summary="The current executive team" route={Routes.Team}/>
          </div>
        </li>
        <Link href={Routes.Constitution}>Constitution</Link>
        <Link href={Routes.Resources}>Resources</Link>
      </ul>
    </nav>
  );
}
