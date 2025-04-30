import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: any) => <h1 className="title text-black" {...props} />,
    h2: (props: any) => <h2 className="header text-black mt-16" {...props} />,
    h3: (props: any) => <h3 className="subheader text-black" {...props} />,
    h4: (props: any) => <h4 className="subtitle text-black" {...props} />,
    p:  (props: any) => <p  className="body text-black" {...props} />,
    ul: (props: any) => <ul  className="body text-black list-inside list-disc" {...props} />,
    ol: (props: any) => <ol  className="body text-black list-outside custom-counter" {...props} />,
    li: (props: any) => <li  className="" {...props} />,
    ...components,
  }
}