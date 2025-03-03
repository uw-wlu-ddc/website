import ButtonBox from "@/components/ButtonBox";
import { Icons } from "@/components/Icons";
import { TextStyle } from "@/components/Texts";

export default function CardLogo() {
  return (
    <div className="relative container w-fit mt-[8.5rem] flex bg-white bordered p-[3.5rem]">
      <div className="items-start my-auto">
        <Icons.DDCLogo.Yasified />
      </div>
      <div className="ps-[3.125rem] space-y-16">
        <div className="pe-[0.7rem] space-y-[2.4rem] flex flex-col">
          <text className={`text-black ${TextStyle.Title}`}>
            Double <br /> Degree <br /> Club
          </text>
          <text className={`text-black typeWriter ${TextStyle.Subtitle}`}>
            The best of both worlds
          </text>
        </div>
        <div className="relative">
          <ButtonBox
            href="#card-intro"
            className="absolute left-0 top-0 z-40 w-[17.5rem] h-[3.875rem]"
          >
            <Icons.ArrowDown />
            <text className={`${TextStyle.SubHeader}`}>Who are we?</text>
          </ButtonBox>
          <div className="absolute left-4 top-4 z-30 w-[17.5rem] h-[3.875rem] bg-black bordered" />
          <div className="absolute left-7 top-7 z-20 w-[17.5rem] h-[3.875rem] bg-yellow bordered" />
        </div>
      </div>
      <Icons.Face.Wink className="absolute left-0 top-[110px] -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
