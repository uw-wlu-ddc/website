import Link from "next/link";
import { ConstitutionRoutes } from "@/constants/routes";

export default function ConstitutionSideBar() {
  return (
    <nav className="sticky flex flex-col bottom-0 w-fit h-fit top-40 mt-24 self-start px-8 py-10 bg-white/60 ddc-border">
      <h3 className="ddc-label top-0 right-1/2 translate-x-1/2">Contents</h3>
      <ul className="font-figtree text-subheader flex flex-col justify-start gap-3">
        <Link href={ConstitutionRoutes.Root} className="hover:underline">
          See All
        </Link>
        <Link href={ConstitutionRoutes.Principles} className="hover:underline">
          Article I: Principles
        </Link>
        <Link
          href={ConstitutionRoutes.GeneralMembership}
          className="hover:underline"
        >
          Article II: General Membership
        </Link>
        <Link href={ConstitutionRoutes.Executive} className="hover:underline">
          Article III: Executive
        </Link>
        <Link
          href={ConstitutionRoutes.ElectionsAndReferenda}
          className="hover:underline"
        >
          Article IV: Elections and Referenda
        </Link>
        <Link href={ConstitutionRoutes.Amendments} className="hover:underline">
          Article V: Amendments
        </Link>
        <Link href={ConstitutionRoutes.Dissolution} className="hover:underline">
          Article VI: Dissolution
        </Link>
      </ul>
    </nav>
  );
}
