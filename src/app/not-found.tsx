import Image from "next/image";
import ButtonBox from "@/components/ButtonBox";

export default function NotFound() {
  return (
    <div className="container h-screen w-fit content-center">
      <div className="relative">
        <div className="grid gap-6 px-12 pt-8 pb-16 bordered bg-white">
          <text className="font-figtree text-title text-black ">404.</text>
          <text className="font-dm text-subtitle text-black uppercase">
            This is not the page you are looking for
          </text>
        </div>
        <div className="absolute right-[4.3rem] bottom-[-2.3rem] w-[17.5rem] h-[3.875rem] bordered z-11 bg-black" />
        <ButtonBox
          className="absolute right-[5.25rem] bottom-[-1.5rem] w-[17.5rem] h-[3.875rem] z-12 gap-2"
          href="/"
        >
          <text className="font-figtree text-subheader">Back to home</text>
          <Image
            src="assets/small/right-arrow.svg"
            alt=""
            width={16}
            height={12}
          ></Image>
        </ButtonBox>
      </div>
    </div>
  );
}
