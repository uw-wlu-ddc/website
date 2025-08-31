import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { ResourcesPath } from "@/constants/markdown";
import remarkGfm from 'remark-gfm';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export default function ResourcesArticle({ slug }: { slug?: string[] }) {
  let article;
  const mdxComponents = useMDXComponents({});
  if (!slug) article = <></>;
  else {
    const filePath = path.join(process.cwd(), ResourcesPath);
    const raw = fs.readFileSync(filePath, "utf8");
    const re = new RegExp(`<div id="${slug}">([\\s\\S]*?)<\\/div>`, "i");
    const match = raw.match(re);
    const section = match ? match[0] : "";
    article = <div className="px-28 pb-16 w-[58rem] min-h-[28rem] flex flex-col items-start bg-white/60 ddc-border">
                <MDXRemote source={section} components={mdxComponents} options={options}/>
              </div>;
  }

  return (
    <div>
      {article}
    </div>
  );
}
