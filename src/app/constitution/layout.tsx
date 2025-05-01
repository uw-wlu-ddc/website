import { ReactNode } from "react";
import { frontmatter } from "@/markdown/constitution/constitution.mdx";
import ConstitutionSideBar from "./ConstitutionSideBar";

export default function ConstitutionLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-col items-center justify-center mb-28">
      <h1 className="mt-32 mb-16 page-header headerbox bordered">
        Constitution
      </h1>
      <div className="flex item-start gap-7">
        <ConstitutionSideBar />
        <div className="flex flex-col justify-start">
          <h4 className="subtitle my-2">Last amended: {frontmatter.date}</h4>
          <div className="px-28 pb-16 w-[58rem] min-h-[28rem] flex flex-col items-start bg-white/60 bordered">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
