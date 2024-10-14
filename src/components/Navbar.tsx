import Link from 'next/link';
import Image from 'next/image'

export function Navbar() {
  return (
    <div className="relative top-0 items-center h-20 px-6 py-2 font-family bg-white box-border flex font-figtree justify-between shadow border-2 border-purple-950">
        <Link className="justify-start items-center gap-1 inline-flex pr-12 hover:bg-amber-200" href="/public">
            <Image className="auto max-w-full" src="./logo/ddc-logo-no-text.svg" width={54} height={56} priority alt=""/>
            <text className="p-2.5 font-extrabold text-[32px] text-black leading-9">DDC</text>
        </Link>
        <div className="h-full text-purple-950 overflow-hidden flex-shrink">
            <ul className="h-full justify-start items-center inline-flex space-x-6">
                <li><a className="nav-text" href="/about">About</a></li>
                <li><a className="nav-text" href="/resources">Resources</a></li>
                <li><a className="nav-text" href="/constitution">Constitution</a></li>
                <li><a className="nav-text" href="/execs">Execs</a></li>
                <li><a className="nav-text" href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
  );
}
