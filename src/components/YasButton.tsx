import { ReactNode } from "react";
import Link from "next/link";

const noShadowClasses = "translate-x-6 translate-y-6 shadow-none";
const singleShadowClasses = "shadow-singleShadow transition-all hover:!translate-x-3 hover:!translate-y-3 hover:!shadow-none";
const doubleShadowClasses = "shadow-doubleShadow transition-all hover:!translate-x-6 hover:!translate-y-6 hover:!shadow-none";

export default function YasButton({
  className,
  href,
  children,
  doubleShadow = false,
  disabled = false,
}: {
  className?: string;
  href: string;
  children?: ReactNode;
  doubleShadow?: boolean;
  disabled?: boolean;
}) {

  const shadowClasses = disabled ? noShadowClasses : doubleShadow ? doubleShadowClasses : singleShadowClasses;
  const disabledClasses = disabled ? "pointer-events-none !translate-x-6 !translate-y-6  !bg-black-50" : "bg-white";
  return (
    <Link
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      href={href}
      className={`gap-2.5 w-fit px-[3.125rem] py-4 ddc-border ${shadowClasses} ${disabledClasses} ${className} ${disabled}`}
    >
      {disabled ? "Restocking soon..." : children}
    </Link>
  );
}
