import Image from 'next/image'
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white pr-[855px] pl-[36px] pt-[36px] pb-[65px] flex-col font-figree text-accent">
        <div className="text-4xl font-extrabold leading-[64px]">
            Double Degree Club
        </div>
        <Link className="pl-4 gap-4 font-mono inline-flex" href="https://www.instagram.com/doubledegreeclub">
            <Image src="/insta-icon.png" width={24} height={24} alt=""/>
            <text className="text-base">@doubledegreeclub</text>
        </Link>
        <div className="px-4">
            <u>easter egg</u>
        </div>
    </footer>
  );
}
