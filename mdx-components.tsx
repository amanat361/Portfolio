import Image, { type ImageProps } from 'next/image'
import { type MDXComponents } from 'mdx/types'
import { CodeBlock } from '@/components/CodeBlock'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
    pre: (props: any) => {
      // With rehype-mdx-code-props, the title attribute is passed directly as a prop
      const filename = props.title

      return <CodeBlock {...props} filename={filename} />
    },
  }
}
