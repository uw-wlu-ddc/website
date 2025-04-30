import ConstitutionText, { frontmatter } from "@/markdown/constitution.mdx";

export default function Constitution() {
  return (
    <div className="flex items-center justify-center">
      <div className="page-header headerbox bordered">
        Constitution
      </div>
      <div className="px-32 py-16 w-[60rem] flex flex-col items-start bg-white/60 bordered">
        <ConstitutionText />
      </div>
    </div>
  );
}
