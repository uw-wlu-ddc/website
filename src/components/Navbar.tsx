import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 h-20 px-6 py-2 bg-white bordered shadow flex justify-between">
      <Link className="gap-1 items-center inline-flex" href="/">
        <Image
          src="./assets/logo/ddc-logo-no-text.svg"
          width={54}
          height={56}
          priority
          alt=""
        />
        <text className="px-2.5 font-figtree text-header text-black font-extrabold">
          DDC
        </text>
      </Link>
      <div className="font-figtree text-subheader text-black items-center inline-flex space-x-6">
        <Link href="/about">About</Link>
        <Link href="/constitution">Constitution</Link>
        <Link href="/execs">Execs</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
