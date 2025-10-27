import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/constants/assets";
import { Links } from "@/constants/urls";
import { Routes } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="bg-white px-[9.25rem] py-16 flex items-center border-t-2 border-black">
      <div className="grid grid-cols-3 w-[71.5rem] gap-x-3">
        <div className="w-[18.75rem] flex flex-col gap-y-2">
          <h3>Double Degree Club</h3>
          <ul className="underline flex flex-col w-fit">
            <Link href={Routes.Home}>Home</Link>
            <Link href={Routes.About}>About execs</Link>
            <Link href={Routes.Team}>Current team</Link>
            <Link href={Routes.Constitution}>Constitution</Link>
            <Link href={Routes.Resources}>Resources</Link>
          </ul>
        </div>
        <div className="w-[18.75rem] flex flex-col gap-y-2">
          <h3>Connect</h3>
          <ul className="w-fit flex flex-col">
            <Link className="flex" href={Links.Instagram}>
              <Image
                src={Logo.Instagram}
                width={24}
                height={24}
                alt=""
                className="pr-1"
              />
              @<span className="underline">doubledegreeclub</span>
            </Link>
            <li>
              <span className="font-bold">Events: </span>
              <Link href={Links.Luma} className="underline">
                lu.ma/ddclub
              </Link>
            </li>
            <li>
              <span className="font-bold">Office:</span> M3 1001
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-[18.75rem] gap-y-2">
          <h3>Resources</h3>
          <ul className="underline flex flex-col w-fit">
            <Link href={Links.CSBBAFAQ}>CS/BBA FAQ</Link>
            <Link href={Links.OldWebsite}>Old website</Link>
            <Link href={Links.EasterEgg}>Easter egg!</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
