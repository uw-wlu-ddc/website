import { ReactNode } from "react";

export default function Label({ className, children }: Readonly<{ className?: string, children: ReactNode }>) {
    return (
        <div className={`absolute bg-black py-[1rem] px-[2rem] ${className}`}>
            <text className="font-figtree text-header font-normal text-white">{children}</text>
        </div>
    );
}
