import Image from "next/image";
import Link from "next/link";
import { TextStyle } from "@/constants/texts";
import { Logo } from "@/constants/assets";
import { Links } from "@/constants/urls";
import { Routes } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="bg-white px-[9.25rem] py-16 flex items-center bordered">
      <div className="flex w-[71.5rem] gap-x-3 text-black">
        <div className="w-[18.75rem] flex flex-col gap-y-2">
          <text className={`${TextStyle.SubHeader}`}>Double Degree Club</text>
          <div
            className={`${TextStyle.Body} underline flex flex-col gap-y-2 w-fit`}
          >
            <Link href={Routes.Home}>Home</Link>
            <Link href={Routes.About}>About</Link>
            <Link href={Routes.Constitution}>Constitution</Link>
            <Link href={Routes.Execs}>Execs</Link>
            <Link href={Routes.Contact}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col w-[18.75rem] gap-y-2">
          <text className={`${TextStyle.SubHeader}`}>Connect</text>
          <div className={`${TextStyle.Body} flex flex-col gap-y-2 w-fit`}>
            <Link className="inline-flex w-fit gap-x-1" href={Links.Instagram}>
              <Image src={Logo.Instagram} width={24} height={24} alt="" />
              <text className="underline">@doubledegreeclub</text>
            </Link>
            <div>
              <text className="font-bold">Events: </text>
              <Link href={Links.Luma} className="underline">
                lu.ma/ddclub
              </Link>
            </div>
            <div>
              <text className="font-bold">Office: </text>
              <text>M3 1001</text>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[18.75rem] gap-y-2">
          <text className={`${TextStyle.SubHeader} text-black`}>Resources</text>
          <div
            className={`${TextStyle.Body} underline flex flex-col gap-y-2 w-fit`}
          >
            <Link href={Links.CSBBAFAQ}>CS/BBA FAQ</Link>
            <Link href={Links.EasterEgg}>Easter egg!</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
