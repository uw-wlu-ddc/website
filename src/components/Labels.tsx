import { ReactNode } from "react";
import Link from "next/link";

export function DoubleSlotButton({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`gap-2.5 w-fit subheader px-[3.125rem] py-4 bg-white flex justify-center items-center bordered shadow-double-shadow double-button-transition ${className}`}
    >
      {children}
    </Link>
  );
}
