import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { ConstitutionPath } from "@/constants/markdown";
import ConstitutionText, {
  frontmatter,
} from "@/markdown/constitution/constitution.mdx";

export default function ConstitutionArticle({ slug }: { slug?: string[] }) {
  let article;
  const mdxComponents = useMDXComponents({});
  if (!slug) article = <ConstitutionText />;
  else {
    const filePath = path.join(process.cwd(), ConstitutionPath);
    const raw = fs.readFileSync(filePath, "utf8");
    const re = new RegExp(`<div id="${slug}">([\\s\\S]*?)<\\/div>`, "i");
    const match = raw.match(re);
    const section = match ? match[0] : "";
    article = <MDXRemote source={section} components={mdxComponents} />;
  }

  return (
    <div className="flex flex-col justify-start">
      <h4 className="my-2">
        Last amended: {frontmatter.revision}
      </h4>
      <div className="px-28 pb-16 w-[58rem] min-h-[28rem] flex flex-col items-start bg-white/60 ddc-border">
        {article}
      </div>
    </div>
  );
}
