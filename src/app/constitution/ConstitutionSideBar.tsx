import { ConstitutionRoutes } from "@/constants/routes";

export default function ConstitutionSideBar() {
  return (
    <div className="relative flex flex-col w-fit h-fit px-8 py-10 items-start mt-24 bg-white/60 bordered">
      <h3 className="subheader label right-1/2 translate-x-1/2">Contents</h3>
      <ul className="subheader flex flex-col justify-start gap-3">
        <a href={ConstitutionRoutes.Root} className="hover:underline">
          See All
        </a>
        <a href={ConstitutionRoutes.Principles} className="hover:underline">
          Article I: Principles
        </a>
        <a
          href={ConstitutionRoutes.GeneralMembership}
          className="hover:underline"
        >
          Article II: General Membership
        </a>
        <a href={ConstitutionRoutes.Executive} className="hover:underline">
          Article III: Executive
        </a>
        <a
          href={ConstitutionRoutes.ElectionsAndReferenda}
          className="hover:underline"
        >
          Article IV: Elections and Referenda
        </a>
        <a href={ConstitutionRoutes.Amendments} className="hover:underline">
          Article V: Amendments
        </a>
        <a href={ConstitutionRoutes.Dissolution} className="hover:underline">
          Article VI: Dissolution
        </a>
      </ul>
    </div>
  );
}
