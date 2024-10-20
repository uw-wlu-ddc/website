import Image from "next/image";
import Link from "next/link";

export default function CardIntro() {
  return (
    <div id="card-intro" className="w-full h-[48rem] pr-[106px] pt-[60px] pb-9 bg flex bg-white bordered justify-start items-center">
      <div className="justify-start items-start inline-flex pt-9 pb-32 pr-[26px] gap-[70px]">
        <div className="relative w-6/12 min-w-[47rem] h-[31rem] pt-14 pb-[88px] pr-14 pl-[112px] grid bordered gap-8 float-left">
          <text className="font-figtree text-header text-black">
            The DDC is an official, UW and WLU registered, student-run
            organization that aims to enhance the Double Degree student
            experience.
          </text>
          <text className="font-baskerville text-body text-black">
            The club hosts several
            <b> social events, networking/mentorships opportunities</b>, and
            <b> academic resources</b>.<b> Our goal </b>
            is to provide double degrees opportunities to find their community
            and support.
          </text>
          <Link
            className="w-fit inline-block items-center gap-10 py-2 px-4 bg-black-100/50 text-black text-xl font-dm text-subtitle uppercase"
            href="https://www.instagram.com/doubledegreeclub/"
          >
            view our events on instagram <br />@<u>doubledegreeclub</u>
          </Link>
          <div className="absolute top-0 left-[7rem] translate-y-[-50%] py-[1rem] px-[2rem] bg-black">
            <text className="font-figtree text-header text-white">
              Intro
            </text>
          </div>
          <div className="absolute right-[-22px] bottom-[-10px] translate-y-[50%]">
            <Image
              className="relative left-0 top-0"
              src="./assets/small/faces/home-face-2.svg"
              width={212}
              height={212}
              alt=""
            />
          </div>
        </div>
        <div className="w-auto bordered items-center justify-center float-right whitespace-nowrap flex-grow">
          Instagram embed placeholder
        </div>
      </div>
    </div>
  );
}
