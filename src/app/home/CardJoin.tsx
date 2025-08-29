import { Photos } from "@/constants/assets";
import { Routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function CardJoin() {
  return (
    <div className="flex justify-center items-center bg-white/60">
      <div className="relative w-[47rem] my-24 p-14 gap-y-10 items-center ddc-border flex flex-col bg-white">
        <h2 className="ddc-label right-1/2 translate-x-1/2">
          Join DDC!
        </h2>
        <h2>
          Joining the DDC exec team is the quickest way to get to know other
          community-oriented double degrees and get involved.
        </h2>
        <Image
          src={Photos.Execs}
          width={409}
          height={273}
          alt=""
          className="self-center"
        />
        <Link
            className="grey-box"
            href={Routes.About}
          >
            <h4 className="underline text-center">
              LEARN WHAT EXECS
              <br />DO AND HOW TO JOIN
            </h4>
          </Link>
      </div>
    </div>
  );
}
