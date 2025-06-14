import Image from "next/image";
import Link from "next/link";
import { Faces } from "@/constants/assets";
import { Links } from "@/constants/urls";

export default function CardIntro() {
  return (
    <div
      id="introduction"
      className="flex bg-white/60 justify-center items-center"
    >
      <div className="flex gap-20 mt-24 mb-48">
        <div className="relative w-fit max-w-[47rem] pt-14 pb-20 pr-14 pl-28 flex flex-col gap-8 ddc-border bg-white">
          <h2 className="ddc-label left-36">Who we are</h2>
          <h2>
            The DDC is an official, UW and WLU registered, student-run
            organization that aims to enhance the Double Degree student
            experience.
          </h2>
          <p>
            The club hosts several{" "}
            <span className="font-bold">
              {" "}
              social events, networking & mentorship opportunities
            </span>
            , and
            <span className="font-bold"> academic resources</span>.
            <span className="font-bold"> Our goal</span> is to provide double
            degrees opportunities to find their community and support.
          </p>
          <Link
            className="w-fit py-2 px-4 bg-black-100/50"
            href={Links.Instagram}
          >
            <h4>
              GET TO KNOW OUR COMMUNITY
              <br />@<span className="underline">DOUBLEDEGREECLUB</span>
            </h4>
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
