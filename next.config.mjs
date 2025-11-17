import rehypePrismPlus from 'rehype-prism-plus'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },
  // Suppress searchParams warning in dev mode (Next.js 15 internal debugging)
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [rehypeKatex, { strict: false, throwOnError: false }],
      rehypePrismPlus,
      rehypeMdxCodeProps,
    ],
  },
})

export default withMDX(nextConfig)
