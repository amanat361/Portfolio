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
  XIcon,
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
        className="group flex text-sm font-medium text-foreground transition hover:text-primary"
      >
        <Icon className="h-6 w-6 flex-none fill-muted-foreground transition group-hover:fill-primary" />
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
              className="aspect-square rotate-3 rounded-2xl bg-muted object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            I'm Sam, a software engineer who loves building things that matter.
          </h1>
          <div className="mt-6 space-y-7 text-base text-muted-foreground">
            <p>
              I've been coding for over a decade now, and the passion still hits
              the same as when I was trying to build my{' '}
              <a
                href="https://github.com/amanat361/Reddit-Bot/commit/43817aa4160f18aff22c071af3f95f4ed20f0188"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                first
              </a>{' '}
              Reddit bot in Python. The code quality has definitely improved
              since then, but that excitement of seeing something work for the
              first time? That never gets old.
            </p>
            <p>
              Most recently, I was CTO at Novl, where I built an AI resourcing
              platform for architecture and engineering firms. What I loved most
              about the role was how it pushed me beyond just engineering. I got
              to shape product decisions, talk directly with customers, and
              figure out how to turn their problems into technical solutions.
              Those discovery calls taught me as much about business as they did
              about what users actually need.
            </p>
            <p>
              Before Novl, I was a founding frontend engineer at a YC24 startup,
              which was an incredible learning experience building from zero to
              one. And before that, I worked on an AI robotics platform at
              Formic, where I got to see how software could control real-world
              systems.
            </p>
            <p>
              These days, I'm working on{' '}
              <a
                className="underline"
                href="https://firewave.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firewave
              </a>
              , helping startups and small businesses build their ideas. I'm
              always curious about new tech and love the challenge of figuring
              out how to make things work.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/amanat361" icon={XIcon}>
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
              className="mt-8 border-t border-border pt-8"
            >
              contact@saminamanat.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
