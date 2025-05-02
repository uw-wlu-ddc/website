import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/constants/assets";
import { Links } from "@/constants/urls";
import { Routes } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="bg-white px-[9.25rem] py-16 flex items-center border-t-2 border-black">
      <div className="flex w-[71.5rem] gap-x-3 text-black">
        <div className="w-[18.75rem] flex flex-col gap-y-2">
          <p className="subheader">Double Degree Club</p>
          <ul className="body underline flex flex-col gap-y-2 w-fit">
            <Link href={Routes.Home}>Home</Link>
            <Link href={Routes.About}>About</Link>
            <Link href={Routes.Constitution}>Constitution</Link>
            <Link href={Routes.Execs}>Execs</Link>
            <Link href={Routes.Resources}>Resources</Link>
          </ul>
        </div>
        <div className="flex flex-col w-[18.75rem] gap-y-2">
          <p className="subheader">Connect</p>
          <div className="body flex flex-col gap-y-2 w-fit">
            <Link className="inline-flex w-fit" href={Links.Instagram}>
              <Image src={Logo.Instagram} width={24} height={24} alt="" className="pr-1" />
              @<p className="underline">doubledegreeclub</p>
            </Link>
            <div>
              <p className="font-bold">Events: </p>
              <Link href={Links.Luma} className="underline">
                lu.ma/ddclub
              </Link>
            </div>
            <div>
              <p className="font-bold">Office: </p>
              <p>M3 1001</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[18.75rem] gap-y-2">
          <p className="subheader">Resources</p>
          <div className="body underline flex flex-col gap-y-2 w-fit">
            <Link href={Links.CSBBAFAQ}>CS/BBA FAQ</Link>
            <Link href={Links.EasterEgg}>Easter egg!</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
