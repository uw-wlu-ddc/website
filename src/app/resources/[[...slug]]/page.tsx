import fs from "fs";
import path from "path";
import { ResourcesPath } from "@/constants/markdown";
import ResourcesDirectory from "@/app/resources/ResourcesDirectory";
import ResourcesArticle from "@/app/resources/ResourcesArticle";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), ResourcesPath);
  const raw = fs.readFileSync(filePath, "utf8");
  const re = new RegExp('<div id="([^"]+)">', "g");
  const ids = Array.from(raw.matchAll(re)).map((m) => m[1]);
  const articleSlugs = ids.map((id) => ({ slug: [id] }));
  const rootSlug = { slug: [] };
  return [rootSlug, ...articleSlugs];
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col items-center mb-28">
      <h2 className="mt-32 mb-16 ddc-headerbox ddc-border">
        Resources
      </h2>
      <div className="flex flex-col item-start gap-7">
        <ResourcesDirectory />
        <ResourcesArticle slug={slug} />
      </div>
    </div>
  );
}

export const dynamicParams = false;
