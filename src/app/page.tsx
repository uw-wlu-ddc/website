import CardLogo from "./CardLogo";
import CardIntro from "./CardIntro";
import CardMerch from "./CardMerch";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[8.5rem]">
      <CardLogo />
      <CardIntro />
      <CardMerch />
      <div className="w-full h-[695px] pt-[60px] pb-[96px] flex justify-center bordered bg-white">
        {
          // LUMA Embed reference
          /* <iframe
          src="https://lu.ma/embed/event/evt-lgj5l3mbcgrrnCB/simple"
          className="h-full w-[37.5rem] bordered"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe> */
        }
      </div>
    </div>
  );
}
