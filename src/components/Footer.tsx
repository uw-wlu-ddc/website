import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white pl-[36px] pt-[36px] pb-[65px] flex flex-col">
      <text className="font-figtree text-header font-extrabold py-4">
        Double Degree Club
      </text>
      <Link
        className="pl-4 gap-1 inline-flex w-fit"
        href="https://www.instagram.com/doubledegreeclub"
      >
        <Image src="./assets/icons/instagram-icon.svg" width={24} height={24} alt="" />
        <text className="font-baskerville text-body">@doubledegreeclub</text>
      </Link>
      <text className="pl-4 font-baskerville text-body">
        <u>easter egg!</u>
      </text>
    </footer>
  );
}
