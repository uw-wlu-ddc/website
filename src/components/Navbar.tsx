import Link from 'next/link';
import Image from 'next/image'

export function Navbar() {
  return (
    <div className="w-full h-[72px] relative top-0 items-center pl-6 pr-9 font-family bg-white box-border flex font-figtree justify-between shadow border-b-2 border-solid border-accent">
        <Link className="my-2 justify-start items-center gap-1 inline-flex pr-12" href="/">
            <Image className="object-contain" src="/logo/ddc-logo-no-text.svg" width={54} height={56} priority alt=""/>
            <text className="p-2.5 font-extrabold text-[32px] text-black leading-9">DDC</text>
        </Link>
        <div className="h-full text-accent overflow-hidden flex-shrink">
            <ul className="h-full justify-start items-center inline-flex gap-6">
                <li className="h-full items-center justify-center flex"><a className="nav-text" href="/about">About</a></li>
                <li className="h-full items-center justify-center flex"><a className="nav-text" href="/constitution">Constitution</a></li>
                <li className="h-full items-center justify-center flex"><a className="nav-text" href="/execs">Execs</a></li>
                <li className="h-full items-center justify-center flex"><a className="nav-text" href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
  );
}
