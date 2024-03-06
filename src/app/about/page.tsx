import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// @ts-ignore
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Sam, a software engineer and entrepreneur from Walnut Creek, California. I’m currently building Firewave, a software development agency that helps startups and small businesses build their ideas.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I like writing code and sometimes something cool comes out of it.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've been coding for over a decade now but the passion for it has
              never died down. I still laugh looking at the commits of my{' '}
              <a
                href="https://github.com/amanat361/Reddit-Bot/commit/43817aa4160f18aff22c071af3f95f4ed20f0188"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                first
              </a>{' '}
              GitHub repo, trying to make a Reddit bot in Python. Things
              haven&apos;t changed much.
            </p>
            <p>
              My biggest passion is to build and to learn. Every day is a new
              rabbit hole of trying some niche framework or arguing about
              Tailwind on Twitter. But when I'm not doing that, I'm usually
              working on{' '}
              <a
                className="underline"
                href="https://firewave.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firewave
              </a>
              , a software development agency that helps startups and small
              businesses build their ideas.
            </p>
            <p>
              Recently me and my colleague put out{' '}
              <a
                className="underline"
                href="https://www.virtualstaging.art/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VirtualStaging AI
              </a>
              , a tool for real estate professionals to stage a photo with
              furniture in seconds. Now I'm set to build HT Part Picker, a tool
              you can read my article about{' '}
              <Link
                className="underline"
                href="/articles/home-theater-part-picker"
              >
                here
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/amanat361" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/amanat361"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/samin-amanat/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact@saminamanat.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@saminamanat.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
