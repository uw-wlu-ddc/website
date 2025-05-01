declare module "*.mdx" {
  import * as React from "react";
  const MDXComponent: React.FC<React.PropsWithChildren<unknown>>;
  export default MDXComponent;
  export const frontmatter: Record<string, any>;
}
