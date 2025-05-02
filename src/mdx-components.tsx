import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: JSX.IntrinsicElements['h1']) => <h1 className="ddc-title text-black" {...props} />,
    h2: (props: JSX.IntrinsicElements['h2']) => <h2 className="ddc-header text-black mt-16" {...props} />,
    h3: (props: JSX.IntrinsicElements['h3']) => <h3 className="ddc-subheader text-black" {...props} />,
    h4: (props: JSX.IntrinsicElements['h4']) => <h4 className="ddc-subtitle text-black" {...props} />,
    p:  (props: JSX.IntrinsicElements['p']) => <p className="ddc-body text-black" {...props} />,
    ul: (props: JSX.IntrinsicElements['ul']) => <ul  className="ddc-body text-black list-inside list-disc" {...props} />,
    ol: (props: JSX.IntrinsicElements['ol']) => <ol  className="ddc-body text-black list-outside ddc-md-ol" {...props} />,
    li: (props: JSX.IntrinsicElements['li']) => <li  className="" {...props} />,
    strong: (props: JSX.IntrinsicElements['strong']) => <span className="font-bold" {...props} />,
    ...components,
  }
}