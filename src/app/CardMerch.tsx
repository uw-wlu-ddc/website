import Image from "next/image";

export default function CardMerch() {
  return (
    <div className="container w-[75rem] h-[69rem] flex relative">
      <div className="bg-white bordered w-[42.5rem] h-fit z-10 p-[3.5rem] relative">
        <text className="font-figtree text-header text-black">
          Rep our program! We&#39;re proud to announce our latest{" "}
          <text className="underline">double degree merch</text>.
        </text>
        <div className="absolute right-[7.125rem] bottom-[-2.188rem] h-[3.625rem] w-[12rem] bordered z-11 bg-black"></div>
        <a
          href="https://wusa.ca/product/ddc-quarter-zips-2/"
          target="_blank"
          className="absolute right-[8.25rem] bottom-[-1.438rem] h-[3.625rem] w-[12rem] bordered z-12 bg-white inline-flex justify-center items-center gap-2 duration-500 hover:bg-purple-100"
        >
          <text className="font-figtree text-subheader">Purchase</text>
          <Image
            src="assets/small/right-arrow.svg"
            alt=""
            width={16}
            height={12}
          ></Image>
        </a>
      </div>
      <Image
        className="absolute right-0 bottom-0"
        src="./assets/merch-graphic.svg"
        alt=""
        width={1046}
        height={1102}
      />
    </div>
  );
}
