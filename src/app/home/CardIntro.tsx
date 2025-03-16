import Image from "next/image";
import Link from "next/link";
import { Faces } from "@/constants/assets";
import { Links } from "@/constants/urls";

export default function CardIntro() {
  return (
    <div
      id="card-intro"
      className="flex bg-white/60 justify-center items-center"
    >
      <div className="flex gap-20 mt-24 mb-48">
        <div className="relative w-fit max-w-[47rem] pt-14 pb-20 pr-14 pl-28 flex flex-col gap-8 bordered bg-white">
          <div className="header label left-36">Who We Are</div>
          <text className="header text-black">
            The DDC is an official, UW and WLU registered, student-run
            organization that aims to enhance the Double Degree student
            experience.
          </text>
          <text className="body text-black">
            The club hosts several{" "}
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
            className="w-fit py-2 px-4 bg-black-100/50 text-black subtitle"
            href={Links.Instagram}
          >
            VIEW OUR EVENTS ON INSTAGRAM
            <br />@<text className="underline">DOUBLEDEGREECLUB</text>
          </Link>
          <Image
            src={Faces.Smile}
            width={212}
            height={212}
            alt=""
            className="absolute -right-6 bottom-0 translate-y-1/2"
          />
        </div>
        <div>Instagram embed placeholder</div>
      </div>
    </div>
  );
}
