import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";

export async function generateStaticParams() {
  const articles = fs.readdirSync(
    path.join(process.cwd(), "src/markdown/constitution")
  );
  return articles
    .filter((f) => f.endsWith(".mdx") && f !== "constitution.mdx")
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function ConstitutionArticle({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
  const ArticleMarkdown = dynamic(
    () => import(`@/markdown/constitution/${slug}.mdx`)
  );
  return <ArticleMarkdown />;
}

export const dynamicParams = false;
