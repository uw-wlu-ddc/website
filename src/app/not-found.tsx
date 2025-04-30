import YasButton from "@/components/YasButton";
import { Icons } from "@/components/Icons";
import { Routes } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="relative flex flex-col gap-6 w-fit px-12 pt-8 pb-16 bordered bg-white text-black">
        <p className="title">404.</p>
        <p className="subtitle">
          This is not the page you are looking for
        </p>
        <YasButton
          className="absolute right-[5.25rem] bottom-[-1.5rem]"
          href={Routes.Home}
        >
          <Icons.ArrowLeft />
          <p>Back to home</p>
        </YasButton>
      </div>
    </div>
  );
}
