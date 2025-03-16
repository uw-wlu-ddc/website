import YasButton from "@/components/YasButton";
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
        <YasButton
          className="absolute right-[5.25rem] bottom-[-1.5rem]"
          href={Routes.Home}
        >
          <Icons.ArrowLeft />
          <text>Back to home</text>
        </YasButton>
      </div>
    </div>
  );
}
