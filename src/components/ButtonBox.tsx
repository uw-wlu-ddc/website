import Link from "next/link";
import { ReactNode } from "react";

export default function ButtonBox({ href, replaceTab=false, className, children }: Readonly<{ href: string, replaceTab?: boolean, className?: string, children?: ReactNode }>) {
    return (
        <Link
            href={href}
            target={replaceTab? "_blank" : "_self"}
            className={`bg-white inline-flex justify-center items-center gap-2.5 bordered duration-500 hover:bg-purple-200 ${className}`}>
            {children}
        </Link>
        )
}