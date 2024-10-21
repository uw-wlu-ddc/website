import Image from "next/image";
import ButtonBox from "@/components/ButtonBox";

function ScrollButton() {
  return (
    <ButtonBox
      href="#card-intro"
      className="absolute left-0 top-0 w-[17.5rem] h-[3.875rem]"
    >
      <Image
        src="./assets/small/down-arrow.svg"
        alt=""
        width={16}
        height={21}
      />
      <text className="font-figtree text-subheader">Who are we?</text>
    </ButtonBox>
  );
}

export default function CardLogo() {
  return (
    <div className="relative container w-fit mt-[8.5rem] flex bg-white bordered p-[3.5rem]">
      <div className="items-start my-auto">
        <Image
          src="./assets/logo/ddc-logo-text-yasified.svg"
          alt=""
          width={476}
          height={478}
        />
      </div>
      <div className="ps-[3.125rem] space-y-16">
        <div className="pe-[0.7rem] space-y-[2.4rem] flex flex-col">
          <text className="font-figtree text-title text-black">
            Double
            <br />
            Degree
            <br />
            Club
          </text>
          {
          // May Make this into a component later
          }
          <div className="relative">
            <text className="font-dm uppercase text-subtitle text-black typeWriter">
              The best of both worlds
            </text>
          </div>
        </div>
        <div className="relative">
          <div className="relative left-7 top-7 w-[17.5rem] h-[3.875rem] bg-yellow bordered" />
          <div className="absolute left-4 top-4 w-[17.5rem] h-[3.875rem] bg-black bordered" />
          <ScrollButton />
        </div>
      </div>
      <div className="absolute left-0 top-[110px] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/assets/small/faces/home-face-1.svg"
          width={160}
          height={160}
          alt=""
        />
      </div>
    </div>
  );
}
