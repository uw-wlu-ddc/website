import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Faces, DDCLogo } from "@/constants/assets";
import YasButton from "@/components/YasButton";
import TypeWriter from "@/components/Typewriter/Typewriter";

export default function CardLogo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-fit my-[8.5rem] flex bg-white bordered p-[3.5rem] gap-[3.125rem]">
        <Image
          src={DDCLogo.Yassified}
          width={476}
          height={478}
          alt=""
          priority
        />
        <div className="flex gap-y-16 flex-col">
          <p className="title text-black pr-[6.25rem]">
            Double <br /> Degree <br /> Club
          </p>
          <TypeWriter className="-mt-7" typedText="The best of both worlds" />
          <YasButton href="#card-intro" doubleShadow>
            <ArrowDown />
            <p>Who are we?</p>
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
