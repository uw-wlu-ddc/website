import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="w-full h-[862px] bg-background border-b-2 border-b-black px-[14.375rem] pb-[8.5rem] pt-[4.625rem] justify-center align-middle">
                <div className="w-full min-w-fit h-full relative mx-auto bg-white aspect-auto box-border bordered flex p-14">
                    <div className="min-w-[476px] w-6/12 min-h-[478px] mx-auto flex justify-center items-center">
                        <Image src="/logo/logo-filled.svg" alt="Double Degree Club logo" width={476} height={478} className="object-contain"/>
                    </div>
                    <div
                        className="w-full min-w-9 px-[3.5rem] pt-[10px] flex-col justify-center items-start flex float-right text-black font-figtree">
                        <div
                            className="p-2.5 gap-2.5 items-center font-figtree font-extrabold text-7xl leading-[79px] float-left">
                            Double<br/>Degree<br/>Club
                        </div>
                        <div
                            className="h-full w-full px-2.5 pb-16 pt-6 text-xl font-medium leading-snug tracking-widest items-center gap-10 font-mono">
                            THE BEST OF BOTH WORLDS
                        </div>
                        <div className="pt-[64px] pb-16 pr-2 pl-2 flex flex-col items-start relative">
                            <div
                                className="absolute left-[28px] top-[28px] w-[280px] h-[62px] bg-primary flex-shrink-0 bordered"/>
                            <div
                                className="absolute left-[16px] top-[16px] w-[280px] h-[62px] bg-accent flex-shrink-0 bordered"/>
                            <div
                                className="absolute left-0 top-0 w-[280px] h-[62px] bg-white flex-shrink-0 bordered inline-flex items-center gap-2.5">
                                <div
                                    className="w-full h-full px-8 py-4 flex gap-2.5 justify-center items-center align-middle box-border">
                                    <Image src="./small/down-arrow.svg" alt="" width={16} height={21}/>
                                    <div className="font-figtree font-normal text-2xl">Who are we?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-0 top-[110px] translate-x-[-50%] translate-y-[-50%]">
                        <span className="w-[165px] h-[165px] absolute top-[15px] left-[22px] bg-accent rounded-full"/>
                        <Image className="relative left-0 top-0" src="/small/faces/home-face-1.svg" width={160}
                               height={160} alt=""/>
                    </div>
                </div>
            </div>
            <div className="w-full h-[768px] pr-[106px] pt-[60px] pb-9 bg flex bg-white bordered justify-start items-center">
            <div className="justify-start items-start inline-flex pt-9 pb-32 pr-[26px] gap-[70px]">
                <div className="relative w-6/12 min-w-[753px] h-[501px] pt-14 pb-[88px] pr-14 pl-[112px] grid bordered gap-8 float-left">
                    <div className="text-3xl text-accent font-semibold leading-9">
                        The DDC is an official, UW and WLU registered, student-run organization that aims to enhance
                        the Double Degree student experience.
                    </div>
                    <div className="text-accent text-base font-normal leading-loose font-['Libre Baskerville']">
                        The club hosts several <b>social events, networking/mentorships opportunities</b>, and <b>academic
                        resources. Our goal is to provide</b> double degrees opportunities to find their community
                        and support.
                    </div>
                    <Link
                        className="w-fit inline-block items-center gap-10 py-2 px-4 bg-[#dddcde]/50 text-black text-xl font-medium font-mono uppercase leading-snug tracking-widest"
                        href="https://www.instagram.com/doubledegreeclub/">
                        VIEW OUR EVENTS ON INSTAGRAM <br/>@<u>DOUBLEDEGREECLUB</u>
                    </Link>
                    <div
                        className="absolute top-0 left-[112px] translate-y-[-50%] py-[18px] px-[32px] justify-center align-middle flex bg-accent">
                        <a className="text-[32px] font-semibold leading-9 flex text-white">Intro</a>
                    </div>
                    <div className="absolute right-[-22px] bottom-[-10px] translate-y-[50%]">
                        <Image className="relative left-0 top-0" src="/small/faces/home-face-2.svg" width={212}
                               height={212} alt=""/>
                    </div>
                </div>
                <div
                    className="w-auto bordered items-center justify-center float-right whitespace-nowrap flex-grow">
                    Testing
                </div>
            </div>
            </div>
            <div className="w-full h-[1222px] bg-background pl-[148px] pr-[98px] py-[60px] bordered">

            </div>
            <div className="w-full h-[695px] px-[344px] pt-[60px] pb-[96px] bordered bg-white">

            </div>
        </>
    );
}
