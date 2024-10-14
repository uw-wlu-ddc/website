import Image from 'next/image'

export default function Home() {
  return (
      <div className="w-full h-[862px] relative bg-background border-b-2 border-b-black px-[230px] pb-[136px] pt-[74px] justify-center align-middle">
          <div className="bg-white h-full box-border bordered border-purple-950 p-[56px]">
              <div className="w-6/12 justify-center items-start flex float-left text-black">
                  <Image src="./logo/ddc-logo-text.svg" alt="" width={444} height={449}/>
              </div>
              <div className="w-6/12 px-[50px] pt-[10px] flex-col justify-center items-start flex float-right text-black font-figtree">
                  <div className="p-2.5 gap-2.5 items-center font-figtree font-extrabold text-7xl leading-[79px] float-left">
                      Double<br/>Degree<br/>Club
                  </div>
                  <div className="px-2.5 pb-16 pt-6 text-xl font-medium leading-snug tracking-widest items-center gap-10 font-['DM Mono']">
                      THE BEST OF BOTH WORLDS
                  </div>
                  <div className="pt-[64px] pb-16 pr-2 pl-2 flex flex-col items-start relative">
                      <div className="absolute left-[28px] top-[28px] w-[280px] h-[62px] bg-primary flex-shrink-0 bordered"/>
                      <div className="absolute left-[16px] top-[16px] w-[280px] h-[62px] bg-accent flex-shrink-0 bordered"/>
                      <div className="absolute left-0 top-0 w-[280px] h-[62px] bg-white flex-shrink-0 bordered inline-flex items-center gap-2.5">
                          <div className="w-full h-full px-8 py-4 flex gap-2.5 justify-center items-center align-middle box-border">
                              <Image src="./small/down-arrow.svg" alt="" width={16} height={21}/>
                              <div className="font-figtree font-normal text-2xl">Who are we?</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
