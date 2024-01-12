import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sam Amanat',
    default:
      'Sam Amanat - Software engineer, founder, and amateur pianist.',
  },
  description:
    'I’m Sam, a software engineer and entrepreneur based in the sunny California city Walnut Creek. I’m the founder of Firewave, where we tend to build some cool stuff here and there. I love trying to beat my monkeytype score daily, tinkering with my DIY home theater, and taking my dog on walks.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
