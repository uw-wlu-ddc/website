import Link from "next/link";
import { ResourcesRoutes } from "@/constants/routes";

export default function ResourcesDirectory() {
  return (
    <nav className="flex flex-col w-[58rem] h-fit px-8 py-10 bg-white/60 ddc-border">
      <h3 className="absolute bg-black py-[0.4em] px-[0.7em] text-white right-1/2 translate-x-1/2 -mt-16">Contents</h3>
      <ul className="font-figtree text-subheader flex flex-col justify-start gap-3">
        <Link href={ResourcesRoutes.ProgramRequirements} className="hover:underline">
          Program Requirements
        </Link>
        <Link href={ResourcesRoutes.GradeConversions} className="hover:underline">
          Grade Conversions
        </Link>
        <Link
          href={ResourcesRoutes.Mentorship}
          className="hover:underline"
        >
          Mentorship
        </Link>
      </ul>
    </nav>
  );
}
