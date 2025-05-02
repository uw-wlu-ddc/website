import { ReactNode } from "react";
import Link from "next/link";

const singleShadowClasses = "shadow-single-shadow transition-all hover:!translate-x-3 hover:!translate-y-3 hover:!shadow-none";
const doubleShadowClasses = "shadow-double-shadow transition-all hover:!translate-x-6 hover:!translate-y-6 hover:!shadow-none";

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

  const shadowClasses = doubleShadow ? doubleShadowClasses : singleShadowClasses;

  return (
    <Link
      href={href}
      className={`gap-2.5 w-fit px-[3.125rem] py-4 bg-white ddc-border ${shadowClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
