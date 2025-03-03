import Image from "next/image";
import Link from "next/link";
import Label from "@/components/Label";
import { Icons } from "@/components/Icons";

export default function CardIntro() {
  return (
    <div
      id="card-intro"
      className="w-full h-fit pr-[6.625rem] pt-[3.75rem] pb-9 bg flex bg-white bordered justify-center items-center"
    >
      <div className="justify-start items-start inline-flex pt-9 pb-32 pr-[26px] gap-[70px]">
        <div className="relative w-[47rem] h-[31rem] pt-14 pb-[5rem] pr-14 pl-[7rem] grid bordered gap-8">
          <text className="font-figtree text-header text-black">
            The DDC is an official, UW and WLU registered, student-run
            organization that aims to enhance the Double Degree student
            experience.
          </text>
          <text className="font-baskerville text-body text-black">
            The club hosts several
            <text className="font-bold">
              {" "}
              social events, networking & mentorships opportunities
            </text>
            , and
            <text className="font-bold"> academic resources</text>.
            <text className="font-bold"> Our goal</text> is to provide double
            degrees opportunities to find their community and support.
          </text>
          <Link
            className="w-fit inline-block items-center gap-10 py-2 px-4 bg-black-100/50 text-black text-xl font-dm text-subtitle uppercase"
            href="https://www.instagram.com/doubledegreeclub/"
          >
            view our events on instagram <br />@
            <text className="underline">doubledegreeclub</text>
          </Link>
          <Label className="top-0 left-[7rem] translate-y-[-50%]">Intro</Label>
          <Icons.Face.Smile className="absolute right-[-22px] bottom-[-10px] translate-y-1/2" />
        </div>
        <div className="w-auto bordered items-center justify-center float-right whitespace-nowrap flex-grow">
          Instagram embed placeholder
        </div>
      </div>
    </div>
  );
}
