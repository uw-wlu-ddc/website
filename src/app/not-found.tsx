import YasButton from "@/components/YasButton";
import { ArrowLeft } from "lucide-react";
import { Routes } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="relative flex flex-col gap-6 w-fit px-12 pt-8 pb-16 ddc-border bg-white text-black">
        <p className="ddc-title">404.</p>
        <p className="ddc-subtitle">
          This is not the page you are looking for
        </p>
        <YasButton
          className="absolute right-[5.25rem] bottom-[-1.5rem] flex ddc-subheader text-black"
          href={Routes.Home}
        >
          <ArrowLeft />Back to home
        </YasButton>
      </div>
    </div>
  );
}
