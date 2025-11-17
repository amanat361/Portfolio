'use client'

import { type ReactNode, ReactElement, useState } from 'react'

function extractTextFromChildren(node: ReactNode): string {
  if (typeof node === 'string') {
    return node
  }
  if (typeof node === 'number') {
    return String(node)
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromChildren).join('')
  }
  if (node && typeof node === 'object' && 'props' in node) {
    const element = node as ReactElement<{ children?: ReactNode }>
    return extractTextFromChildren(element.props.children)
  }
  return ''
}

export function CodeBlock({
  children,
  filename,
  ...props
}: {
  children: ReactNode
  filename?: string
  [key: string]: any
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const code = extractTextFromChildren(children)
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="not-prose my-6">
      {/* Clean container matching Vercel's CodeBlock */}
      <div className="overflow-hidden rounded-xl border border-border bg-white dark:bg-black">
        {/* Header with filename and copy button */}
        <div className="flex items-center justify-between border-b border-border bg-zinc-100 px-4 py-2.5 dark:bg-zinc-950">
          <div className="flex items-center gap-2">
            {/* File icon */}
            <svg
              className="h-4 w-4 text-zinc-400 dark:text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {filename && (
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                {filename}
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="ml-auto flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>

        {/* Code content */}
        <div className="overflow-x-auto">
          <pre {...props} className="m-0 p-4 text-sm leading-relaxed">
            {children}
          </pre>
        </div>
      </div>
    </div>
  )
}
