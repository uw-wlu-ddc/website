import Image from "next/image";
import { ArrowRight } from "lucide-react";
import YasButton from "@/components/YasButton";
import { Merch } from "@/constants/assets";
import { Links } from "@/constants/urls";

export default function CardMerch() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[75rem] h-[69rem] flex flex-col my-20">
        <div className="relative w-[42.5rem] h-[13.5rem] z-10 p-[3.5rem] bg-white ddc-border">
          <h2>
            Rep our program! We&apos;re proud to announce our latest{" "}
            <span className="underline">double degree merch</span>.
          </h2>
          <YasButton
            href={Links.Quarterzips}
            disabled={true}
            className="absolute right-[8.25rem] bottom-[-1.5rem] flex font-figtree text-subheader"
          >
            Purchase <ArrowRight />
          </YasButton>
        </div>
        <Image
          src={Merch.Quarterzips}
          width={854}
          height={900}
          alt=""
          className="self-center"
        />
      </div>
    </div>
  );
}
