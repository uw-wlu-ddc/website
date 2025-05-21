import Image from "next/image";
import { ArrowDown } from "lucide-react";
import DisplayTypewriter from "@/app/home/DisplayTypewriter";
import { Faces, DDCLogo } from "@/constants/assets";
import YasButton from "@/components/YasButton";

export default function CardDisplay() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-fit my-[8.5rem] flex bg-white ddc-border p-[3.5rem] gap-[3.125rem]">
        <Image
          src={DDCLogo.Yassified}
          width={476}
          height={478}
          alt=""
          priority
        />
        <div className="flex gap-y-16 flex-col">
          <p className="ddc-display text-black pr-[6.25rem]">
            Double <br /> Degree <br /> Club
          </p>
          <DisplayTypewriter className="ddc-subtitle text-black -mt-7" />
          <YasButton
            href="#introduction"
            doubleShadow
            className="ddc-subheader flex text-black"
          >
            <ArrowDown />
            Who are we?
          </YasButton>
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


