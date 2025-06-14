import CardDisplay from "@/app/home/CardDisplay";
import CardIntro from "@/app/home/CardIntro";
import CardMerch from "@/app/home/CardMerch";
import CardJoin from "@/app/home/CardJoin";

export default function Home() {
  return (
    <div className="flex flex-col divide-y-2 divide-black">
      <CardDisplay />
      <CardIntro />
      <CardMerch />
      <CardJoin />
      {
        // LUMA Embed reference
        /* <iframe
          src="https://lu.ma/embed/event/evt-lgj5l3mbcgrrnCB/simple"
          className="h-full w-[37.5rem] ddc-border"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe> */
      }
    </div>
  );
}
