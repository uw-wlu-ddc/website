import Image from "next/image";
import ButtonBox from "@/components/ButtonBox";
import { Icons } from "@/components/Icons";
import { Merch } from "@/constants/assets";
import { Links } from "@/constants/urls";

export default function CardMerch() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[75rem] h-[69rem] relative">
        <div className="relative w-[42.5rem] h-[13.5rem] z-10 p-[3.5rem] bg-white bordered">
          <text className="header text-black">
            Rep our program! We're proud to announce our latest{" "}
            <text className="underline">double degree merch</text>.
          </text>
          <ButtonBox
            replaceTab={true}
            href={Links.Quarterzips}
            className="absolute right-[8.25rem] bottom-[-1.438rem] h-[3.625rem] w-[12rem] z-30"
          >
            <text className="subheader text-black">Purchase</text>
            <Icons.ArrowRight />
          </ButtonBox>
          <div className="absolute right-[7.125rem] bottom-[-2.188rem] h-[3.625rem] w-[12rem] bordered z-20 bg-black" />
        </div>
        <Image
          src={Merch.Quarterzips}
          width={854}
          height={900}
          alt=""
          className="absolute left-[10.625rem] bottom-0"
        />
      </div>
    </div>
  );
}
