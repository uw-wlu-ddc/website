import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <Image
      src="./assets/icons/instagram-icon.svg"
      width={24}
      height={24}
      alt=""
      className={className}
    />
  );
}

function DDCLogoNoText({ className }: { className?: string }) {
  return (
    <Image
      src="./assets/logos/ddc-logo-no-text.svg"
      width={54}
      height={56}
      priority
      alt=""
      className={className}
    />
  );
}

function DDCLogoYasified({ className }: { className?: string }) {
  return (
    <Image
      src="./assets/logos/ddc-logo-text-yasified.svg"
      alt=""
      width={476}
      height={478}
      priority
      className={className}
    />
  );
}

function Quarterzips({ className }: { className?: string }) {
  return (
    <Image
      src="./assets/images/merch-quarterzips.svg"
      alt=""
      width={1046}
      height={1102}
      className={className}
    />
  );
}

function WinkFace({ className }: { className?: string }) {
  return (
    <Image
      src="./assets/faces/face-wink.svg"
      width={160}
      height={160}
      alt=""
      className={className}
    />
  );
}

function SmileFace({ className }: { className?: string }) {
  return (
    <Image
      src="./assets/faces/face-smile.svg"
      width={212}
      height={212}
      alt=""
      className={className}
    />
  );
}

export const Icons = {
  ArrowDown: ArrowDown,
  ArrowRight: ArrowRight,
  ArrowLeft: ArrowLeft,
  Instagram: InstagramIcon,
  DDCLogo: {
    NoText: DDCLogoNoText,
    Yasified: DDCLogoYasified,
  },
  Merch: {
    Quarterzips: Quarterzips,
  },
  Face: {
    Wink: WinkFace,
    Smile: SmileFace,
  },
};
