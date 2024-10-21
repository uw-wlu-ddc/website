import Image from "next/image";
import Link from "next/link";
import Label from "@/components/Label";

export default function CardJoin() {
    return (
        <div
            className="w-full h-fit px-[21.5rem] py-[3.75rem] bg flex bg-white bordered justify-center items-center"
        >
            <div className="relative bordered items-start flex-col container text-center p-[3.5rem]">
                <text className="text-black text-header">
                    Joining the DDC exec team is the quickest way to get to know other community-oriented double degrees
                    and get involved.
                </text>
                <div className="my-10">
                    Placeholder
                </div>
                <div className="text-black text-body font-baskerville">
                    Pay attention to your emails for ddc applications!
                </div>
                <Label className="top-0 right-1/2 -translate-y-1/2 translate-x-1/2">
                    Join DDC!
                </Label>
            </div>
        </div>
    );
}
