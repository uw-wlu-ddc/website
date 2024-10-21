import CardLogo from "./CardLogo";
import CardIntro from "./CardIntro";
import CardMerch from "./CardMerch";
import CardJoin from "@/app/CardJoin";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[8.5rem]">
      <CardLogo />
      <CardIntro />
      <CardMerch />
        <CardJoin/>
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
  );
}
