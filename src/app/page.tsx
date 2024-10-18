import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container w-fit mt-[8.5rem] flex bg-white bordered p-[3.5rem]">
        <div className="items-start">
          <Image
            src="./assets/logo/ddc-logo-text-yasified.svg"
            alt=""
            width={476}
            height={478}
          />
        </div>
        <div className="ps-[3.125rem] space-y-16">
          <div className="pe-[0.7rem] space-y-[2.4rem] flex flex-col">
            <text className="font-figtree text-title text-black">
              Double
              <br />
              Degree
              <br />
              Club
            </text>
            <text className="font-dm uppercase text-subtitle text-black">
              The best of both worlds
            </text>
          </div>
          <div className="relative">
            <div className="absolute left-7 top-7 w-[17.5rem] h-[3.875rem] bg-yellow bordered" />
            <div className="absolute left-4 top-4 w-[17.5rem] h-[3.875rem] bg-black bordered" />
            <div className="absolute left-0 top-0 w-[17.5rem] h-[3.875rem] bg-white bordered inline-flex justify-center items-center gap-2.5">
              <Image
                src="./assets/small/down-arrow.svg"
                alt=""
                width={16}
                height={21}
              />
              <text className="font-figtree text-subheader">Who are we?</text>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[110px] translate-x-[-50%] translate-y-[-50%]">
        <span className="w-[165px] h-[165px] absolute top-[15px] left-[22px] bg-accent rounded-full" />
        <Image
          className="relative left-0 top-0"
          src="/small/faces/home-face-1.svg"
          width={160}
          height={160}
          alt=""
        />
      </div>
      <div className="w-full h-[768px] pr-[106px] pt-[60px] pb-9 bg flex bg-white bordered justify-start items-center">
        <div className="justify-start items-start inline-flex pt-9 pb-32 pr-[26px] gap-[70px]">
          <div className="relative w-6/12 min-w-[753px] h-[501px] pt-14 pb-[88px] pr-14 pl-[112px] grid bordered gap-8 float-left">
            <div className="text-3xl text-accent font-semibold leading-9">
              The DDC is an official, UW and WLU registered, student-run
              organization that aims to enhance the Double Degree student
              experience.
            </div>
            <div className="text-accent text-base font-normal leading-loose font-['Libre Baskerville']">
              The club hosts several{" "}
              <b>social events, networking/mentorships opportunities</b>, and{" "}
              <b>academic resources. Our goal is to provide</b> double degrees
              opportunities to find their community and support.
            </div>
            <Link
              className="w-fit inline-block items-center gap-10 py-2 px-4 bg-[#dddcde]/50 text-black text-xl font-medium font-mono uppercase leading-snug tracking-widest"
              href="https://www.instagram.com/doubledegreeclub/"
            >
              VIEW OUR EVENTS ON INSTAGRAM <br />@<u>DOUBLEDEGREECLUB</u>
            </Link>
            <div className="absolute top-0 left-[112px] translate-y-[-50%] py-[18px] px-[32px] justify-center align-middle flex bg-accent">
              <a className="text-[32px] font-semibold leading-9 flex text-white">
                Intro
              </a>
            </div>
            <div className="absolute right-[-22px] bottom-[-10px] translate-y-[50%]">
              <Image
                className="relative left-0 top-0"
                src="/small/faces/home-face-2.svg"
                width={212}
                height={212}
                alt=""
              />
            </div>
          </div>
          <div className="w-auto bordered items-center justify-center float-right whitespace-nowrap flex-grow">
            Testing
          </div>
        </div>
      </div>
      <div className="w-full h-[1222px] bg-background pl-[148px] pr-[98px] py-[60px] bordered"></div>
      <div className="w-full h-[695px] px-[344px] pt-[60px] pb-[96px] bordered bg-white"></div>
    </>
  );
}
