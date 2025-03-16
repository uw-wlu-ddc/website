import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { Faces } from "@/constants/assets";
import { DShadowLabel } from "@/components/Labels";

export default function CardLogo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-fit mt-[8.5rem] flex bg-white bordered p-[3.5rem] gap-[3.125rem]">
        <Image
          src="./assets/logos/ddc-logo-text-yasified.svg"
          width={476}
          height={478}
          alt=""
          priority
        />
        <div className="flex gap-y-16 flex-col">
          <text className="title text-black">
            Double <br /> Degree <br /> Club
          </text>
          <text className="subtitle text-black typeWriter -mt-7">
            THE BEST OF BOTH WORLDS
          </text>
          <Link href="#card-intro" className="h-[5.625rem]">
            <DShadowLabel className="gap-2.5" defaultWidth={265} defaultHeight={62}>
              <Icons.ArrowDown />
              <text className="subheader">Who are we?</text>
            </DShadowLabel>
          </Link>
        </div>
        <Image
          src={Faces.Wink}
          width={160}
          height={160}
          alt=""
          className="absolute left-0 -translate-x-[50%] top-[0.75rem]"
        />
      </div>
    </div>
  );
}
