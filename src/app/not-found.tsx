import ButtonBox from "@/components/ButtonBox";
import { Icons } from "@/components/Icons";
import { Routes } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="relative flex flex-col gap-6 w-fit px-12 pt-8 pb-16 bordered bg-white text-black">
        <text className="title">404.</text>
        <text className="subtitle">
          This is not the page you are looking for
        </text>
        <ButtonBox
          className="absolute right-[5.25rem] bottom-[-1.5rem] w-[17.5rem] h-[3.875rem] z-20 gap-2"
          href={Routes.Home}
        >
          <Icons.ArrowLeft />
          <text className="subheader">Back to home</text>
        </ButtonBox>
        <div className="absolute right-[4.3rem] bottom-[-2.3rem] w-[17.5rem] h-[3.875rem] bordered z-10 bg-black" />
      </div>
    </div>
  );
}
