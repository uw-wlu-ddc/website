import CardLogo from "./CardLogo";
import CardIntro from "./CardIntro"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[8.5rem]">
      <CardLogo />
      <CardIntro />
      <div className="w-full h-[1222px] bg-background pl-[148px] pr-[98px] py-[60px]"></div>
      <div className="w-full h-[695px] px-[344px] pt-[60px] pb-[96px] bordered bg-white"></div>
    </div>
  );
}
