import Image from "next/image";
import Link from "next/link";
import Label from "@/components/Label";
import { Faces } from "@/constants/assets";
import { TextStyle } from "@/constants/texts";
import { Links } from "@/constants/urls";

export default function CardIntro() {
  return (
    <div
      id="card-intro"
      className="w-full h-fit pr-[6.625rem] pt-[3.75rem] pb-9 flex bg-white/60 bordered justify-center items-center"
    >
      <div className="justify-start items-start inline-flex pt-9 pb-32 pr-[26px] gap-[70px]">
        <div className="relative w-[47rem] h-[31rem] pt-14 pb-[5rem] pr-14 pl-[7rem] grid gap-8 bordered bg-white">
          <text className={`${TextStyle.Header} text-black`}>
            The DDC is an official, UW and WLU registered, student-run
            organization that aims to enhance the Double Degree student
            experience.
          </text>
          <text className={`${TextStyle.Body} text-black`}>
            The club hosts several
            <text className="font-bold">
              {" "}
              social events, networking & mentorship opportunities
            </text>
            , and
            <text className="font-bold"> academic resources</text>.
            <text className="font-bold"> Our goal</text> is to provide double
            degrees opportunities to find their community and support.
          </text>
          <Link
            className={`w-fit inline-block items-center gap-10 py-2 px-4 bg-black-100/50 text-black text-xl ${TextStyle.Subtitle}`}
            href={Links.Instagram}
          >
            view our events on instagram
            <br />@<text className="underline">doubledegreeclub</text>
          </Link>
          <Label className="top-[-2.25rem] left-[7rem]">Intro</Label>
          <Image
            src={Faces.Smile}
            width={212}
            height={212}
            alt=""
            className="absolute right-[-1.375rem] bottom-[-7.25rem]"
          />
        </div>
        <div className="w-auto bordered items-center justify-center">
          Instagram embed placeholder
        </div>
      </div>
    </div>
  );
}
