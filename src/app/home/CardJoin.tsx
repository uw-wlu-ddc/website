import Image from "next/image";
import Link from "next/link";
import Label from "@/components/Label";

export default function CardJoin() {
  return (
    <div className="w-full h-fit py-24 flex justify-center items-center bg-white/60  bordered ">
      <div className="relative w-[47rem] p-14 gap-y-10 items-center bordered flex flex-col bg-white">
        <Label className="top-0 right-1/2 -translate-y-1/2 translate-x-1/2">
          Join DDC!
        </Label>
        <text className="header text-black">
          Joining the DDC exec team is the quickest way to get to know other
          community-oriented double degrees and get involved.
        </text>
        <div>Placeholder</div>
        <text className="body text-black text-center">
          Pay attention to your emails for DDC applications!
        </text>
      </div>
    </div>
  );
}
