import Image from "next/image";
import ButtonBox from "@/components/ButtonBox";
import { Icons } from "@/components/Icons";
import { Faces } from "@/constants/assets";

export default function CardLogo() {
  return (
    <div className="relative container w-fit mt-[8.5rem] flex bg-white bordered p-[3.5rem] gap-[3.125rem]">
      <div className="items-start my-auto">
        <Image
          src="./assets/logos/ddc-logo-text-yasified.svg"
          width={476}
          height={478}
          alt=""
          priority
        />
      </div>
      <div className="space-y-16">
        <div className="pe-[0.7rem] space-y-[2.4rem] flex flex-col">
          <text className="title text-black">
            Double <br /> Degree <br /> Club
          </text>
          <text className="subtitle text-black typeWriter">
            THE BEST OF BOTH WORLDS
          </text>
        </div>
        <div className="relative h-[5.625rem]">
          <ButtonBox
            href="#card-intro"
            className="absolute left-0 top-0 z-40 w-[17.5rem] h-[3.875rem]"
          >
            <Icons.ArrowDown />
            <text className="subheader">Who are we?</text>
          </ButtonBox>
          <div className="absolute left-4 top-4 z-30 w-[17.5rem] h-[3.875rem] bg-black bordered" />
          <div className="absolute left-7 top-7 z-20 w-[17.5rem] h-[3.875rem] bg-yellow bordered" />
        </div>
      </div>
      <Image
        src={Faces.Wink}
        width={160}
        height={160}
        alt=""
        className="absolute left-[-5rem] top-[0.75rem]"
      />
    </div>
  );
}
