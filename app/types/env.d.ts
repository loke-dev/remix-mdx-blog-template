/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="@cloudflare/workers-types" />
/// <reference types="vite/client" />

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export const frontmatter: any
  export default MDXComponent
}
