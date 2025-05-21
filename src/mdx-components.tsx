import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: JSX.IntrinsicElements['h1']) => <h1 {...props} />,
    h2: (props: JSX.IntrinsicElements['h2']) => <h2 className="mt-16" {...props} />,
    h3: (props: JSX.IntrinsicElements['h3']) => <h3 {...props} />,
    h4: (props: JSX.IntrinsicElements['h4']) => <h4 {...props} />,
    p:  (props: JSX.IntrinsicElements['p']) => <p {...props} />,
    ol: (props: JSX.IntrinsicElements['ol']) => <ol className="list-outside ddc-md-ol" {...props} />,
    li: (props: JSX.IntrinsicElements['li']) => <li {...props} />,
    strong: (props: JSX.IntrinsicElements['strong']) => <span className="font-bold" {...props} />,
    ...components,
  }
}