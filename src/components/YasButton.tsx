import { ReactNode } from "react";
import Link from "next/link";

export default function YasButton({
  className,
  href,
  children,
  doubleShadow = false,
}: {
  className?: string;
  href: string;
  children?: ReactNode;
  doubleShadow?: boolean;
}) {

  const shadowClass = doubleShadow ? "shadow-double-shadow double-button-transition" : "shadow-single-shadow single-button-transition";

  return (
    <Link
      href={href}
      className={`gap-2.5 w-fit subheader px-[3.125rem] py-4 bg-white flex justify-center items-center bordered ${shadowClass} ${className}`}
    >
      {children}
    </Link>
  );
}
