import fs from "fs";
import path from "path";
import { ConstitutionPath } from "@/constants/markdown";
import ConstitutionSideBar from "@/app/constitution/ConstitutionSideBar";
import ConstitutionArticle from "@/app/constitution/ConstitutionArticle";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), ConstitutionPath);
  const raw = fs.readFileSync(filePath, "utf8");
  const re = new RegExp('<div id="([^"]+)">', "g");
  const ids = Array.from(raw.matchAll(re)).map((m) => m[1]);
  const articleSlugs = ids.map((id) => ({ slug: [id] }));
  const rootSlug = { slug: [] };
  return [rootSlug, ...articleSlugs];
}

export default async function ConstitutionPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col items-center mb-28">
      <h1 className="mt-32 mb-16 ddc-header ddc-headerbox ddc-border">
        Constitution
      </h1>
      <div className="flex item-start gap-7">
        <ConstitutionSideBar />
        <ConstitutionArticle slug={slug} />
      </div>
    </div>
  );
}

export const dynamicParams = false;
