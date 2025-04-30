import Image from "next/image";
import YasButton from "@/components/YasButton";
import { Icons } from "@/components/Icons";
import { Merch } from "@/constants/assets";
import { Links } from "@/constants/urls";

export default function CardMerch() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[75rem] h-[69rem] relative my-20">
        <div className="relative w-[42.5rem] h-[13.5rem] z-10 p-[3.5rem] bg-white bordered">
          <p className="header text-black">
            Rep our program! We&apos;re proud to announce our latest{" "}
            <span className="underline">double degree merch</span>.
          </p>
          <YasButton
            href={Links.Quarterzips}
            className="absolute right-[8.25rem] bottom-[-1.5rem]"
          >
            <p className="subheader text-black">Purchase</p>
            <Icons.ArrowRight />
          </YasButton>
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
