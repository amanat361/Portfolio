import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoVirtualStaging from '@/images/logos/virtualStaging.webp'
import logoChromeGuide from '@/images/logos/chrome.png'
import logoTheCoderSchool from '@/images/logos/theCoderSchool.png'
import logoApollo from '@/images/logos/apollo.webp'
import logoAssembly from '@/images/logos/assembly.png'
import logoMrBubbles from '@/images/logos/mrBubbles.webp'
import logoHTPartPicker from '@/images/logos/htpartpicker.webp'
import logoRedditBot from '@/images/logos/reddit.png'
import logoUnity from '@/images/logos/unity.jpg'
import logoNovl from '@/images/logos/novl.png'
import logoClarum from '@/images/logos/clarum_ai_logo.jpg'
import logoFormic from '@/images/logos/formic.jpg'
import logoVercel from '@/images/logos/vercel.png'
import logoSamantics from '@/images/logos/samantics.png'

const projects = [
  {
    name: 'Novl',
    description:
      'AI-powered resourcing platform for architecture and engineering firms. As CTO, I built the platform from the ground up, handling everything from technical architecture to customer discovery. Helped firms optimize their project staffing through intelligent matching algorithms.',
    link: {
      href: 'https://www.trynovl.com/',
      label: 'trynovl.com',
    },
    logo: logoNovl,
  },
  {
    name: 'Clarum',
    description:
      'YC24 startup focused on AI-powered business intelligence. As a founding frontend engineer, I helped build the core product experience from zero to one. Worked closely with the founding team to shape product direction and user experience.',
    link: {
      href: 'https://clarum.ai/',
      label: 'clarum.ai',
    },
    logo: logoClarum,
  },
  {
    name: 'Formic Configurator',
    description:
      'AI robotics platform that helps manufacturers configure and deploy robotic automation solutions. Built intuitive interfaces for complex robotic systems, making industrial automation accessible to non-technical users.',
    link: {
      href: 'https://configurator.formic.co/',
      label: 'configurator.formic.co',
    },
    logo: logoFormic,
  },
  {
    name: 'Samantics',
    description:
      'A similarity-based daily word guessing game that uses vector embeddings to determine how close your guesses are to the target word. Built with Bun and self-hosted for optimal performance. Challenge your vocabulary and semantic understanding.',
    link: {
      href: 'https://play.qwertea.dev/',
      label: 'play.qwertea.dev',
    },
    logo: logoSamantics,
  },
  {
    name: 'VS Code Grep Extension',
    description:
      'Instantly search through 500,000+ GitHub repositories using grep.app directly from your VS Code editor. Find examples, check if code exists, or discover similar implementations with just a few clicks. Published on the VS Code Marketplace.',
    link: {
      href: 'https://marketplace.visualstudio.com/items?itemName=SaminAmanat.grep-search',
      label: 'VS Code Marketplace',
    },
    logo: logoVercel,
  },
  {
    name: 'Better Contact Sales',
    description:
      'A takehome assignment from Vercel to rebuild their Contact Sales pipeline. Features AI research agents and email integration to streamline the sales process. Demonstrates modern sales automation and AI-powered customer interaction.',
    link: {
      href: 'https://www.bettercontactsales.com/',
      label: 'bettercontactsales.com',
    },
    logo: logoVercel,
  },
  {
    name: 'HT Part Picker',
    description:
      "The world's only one stop shop for all your Home Theater needs. This website is a passion project currently in development. We are working hard to bring you the best experience possible.",
    link: {
      href: 'https://www.htpartpicker.com/',
      label: 'htpartpicker.com',
    },
    logo: logoHTPartPicker,
  },
  {
    name: 'AI Virtual Staging',
    description:
      'SaaS tool for virtually staging real estate photos in seconds at only a fraction of the cost of traditional staging methods. Over 30 monthly active (and happy) users. Built with React, Next.js, and Tailwind CSS, and deployed on Vercel.',
    link: {
      href: 'https://www.virtualstaging.art/',
      label: 'virtualstaging.art',
    },
    logo: logoVirtualStaging,
  },
  {
    name: 'TCS Tracker Ultra',
    description:
      'A feature-rich admin dashboard for instructors at theCoderSchool. It syncs with any Pike13 account to provide a real-time view of all students, and uses LLM technology to write progress reports in seconds.',
    link: {
      href: 'https://tcstracker.netlify.app/',
      label: 'tcstracker.netlify.app',
    },
    logo: logoTheCoderSchool,
  },
  {
    name: 'Apollo Exterior Care',
    description:
      'Gorgeous landing page for a local power washing business. Mobile-first UI/UX components provide a quick way for customers to find what they need right away. Vercel image optimization keeps things snappy on the go.',
    link: {
      href: 'https://www.apolloexteriorcare.com/',
      label: 'apolloexteriorcare.com',
    },
    logo: logoApollo,
  },
  {
    name: 'Mr. Bubbles Auto Detailing',
    description:
      'Full stack booking system for a local auto detailing business. Customers can book appointments, pay for services, and view detailed package information. Reviews are pulled from Google and Yelp and displayed on the site.',
    link: {
      href: 'https://mr-bubbles.vercel.app/',
      label: 'mr-bubbles.vercel.app',
    },
    logo: logoMrBubbles,
  },
  {
    name: 'Chrome Extension Guide',
    description:
      'I taught one of my students how to make a chrome extension, that later turned into this interactive web guide where anyone can build it. Markdoc turns MDX into stunning documentation with a built-in code display.',
    link: {
      href: 'https://text-changer-guide.vercel.app/',
      label: 'text-changer-guide.vercel.app',
    },
    logo: logoChromeGuide,
  },
  {
    name: 'FredBot',
    description:
      'The best Discord bot in history. He is able to access Canvas LMS and send notifications to students in real-time for CS265 (Assembly Language). He is also the only Discord bot to emulate an x86 CPU and run MASM natively.',
    link: {
      href: 'https://replit.com/@SaminAmanat/fredBot',
      label: 'FredBot on Replit',
    },
    logo: logoAssembly,
  },
  {
    name: 'Hex Immunitea',
    description:
      'A strategic attack and board game similar to Chess that uses a hexagonal board. Built in Unity and C#, it is a fun and challenging game that is easy to learn and hard to master.',
    link: {
      href: 'https://amanat361.github.io/game.html',
      label: 'Play Hex Immunitea',
    },
    logo: logoUnity,
  },
  {
    name: 'Game Recommender',
    description:
      'A reddit bot written in Python for recommending Steam Games. This is my first GitHub repo ever and shows my development journey being almost a decade long!',
    link: {
      href: 'https://github.com/amanat361/Reddit-Bot',
      label: 'Reddit Bot GitHub',
    },
    logo: logoRedditBot,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are for Firewave clients, so if you see something that piques your interest, please reach out to hear more about it! Let's put your dream idea on the list next."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-md ring-1 ring-border dark:border dark:border-border">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-foreground">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-muted-foreground transition group-hover:text-primary">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
