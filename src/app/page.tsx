import CardLogo from "./CardLogo";
import CardIntro from "./CardIntro"
import CardMerch from "./CardMerch"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[8.5rem]">
      <CardLogo />
      <CardIntro />
      <CardMerch />
      <div className="w-full h-[695px] px-[344px] pt-[60px] pb-[96px] bordered bg-white"></div>
    </div>
  );
}
