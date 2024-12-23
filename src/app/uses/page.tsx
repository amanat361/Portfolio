import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Homelab PC">
            It started
            around{' '}
            {new Date().getFullYear() -
              new Date('2018-09-01T00:00:00.000Z').getFullYear()}{' '}
            years ago when I built the cheapest PC I could to play games on.
            Over the years I’ve upgraded it piece by piece until it’s become what it is today. CPU is an R9
            5900X and the GPU is an RTX 3080. Using Cloudflare tunnels and WSL, it doubles as a linux server to SSH into and run my homelab. It runs some projects and microservices via Coolify, and lets me compile and run code from my laptop anywhere in the world.
          </Tool>
          <Tool title="Zenbook Duo">
              Unfortunately about 99% of the code I write is not from home. This laptop lets me have a dual screen setup at the local cafe which is great. Also running WSL, I ditched the Mac world long ago and have the best of both worlds.
          </Tool>
          <Tool title="60% Keyboard">
            If you are not yet a mechanical keyboard snob, I highly recommend not going down this rabbit hole. It’s a deep one. I’ve built a few keyboards over the years but my current daily driver is a 60% keyboard with lubed Sunflower tactile switches and a brass plate. GMK keycaps too of course.
          </Tool>
          <Tool title="Stack of Schiit">
            Modius, Magnius, Lokius. The Schiit stack. I’m not an audiophile but I do like to listen to music while I work and this stack is a great way to do that. I’m using a pair of Sundaras with it. As for albums, Mint Jams by Casiopea is my go to for quality. For personal taste though, MUSE wins every time. Anything is better than the voices in my head.
          </Tool>
          <Tool title="Costco Folding Chair">
            No joke, this is the most comfortable chair I’ve ever owned. I've tried a Herman Miller and a Steelcase and I still prefer this one. Best ten bucks I ever spent.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Are you a Vim user reading this that think's you're better than me? Well, you're probably right. But I'm not going to let that stop me. Vim keybinds work just fine in VS Code. Plus, I can have an extension for just about everything I need! For example, hiding the sacreligiously long lines of tailwind classes.
          </Tool>
          <Tool title="Windows Subsystem for Linux">
            It's actually unbelievable people still prefer MacOS for development because it is "Unix" based. I'm able to run every program I want on Windows, but have a native Ubuntu terminal for everything else. SSH into the homelab and run whatever you want. Nothing beats that.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Whiteboard">
            Can't beat a good old fashioned whiteboard. If you're reading this far by the way, I'm impressed! Here's a fun joke as a reward: What do you call a cow with no legs? Ground beef.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Obsidian">
            Markdown based note taking app that I use for everything. Either this or I just hope that I remember it. I’m not sure which is better. I mainly chose Obsidian because other programmers use it and I want to be cool like them. Markdown also happens to be my preference for writing everything so it works out.
          </Tool>
          <Tool title="iCal">
            Good old fashioned calendar app. If something is on my calendar it’s going to get done. I don’t know why but it’s just how my brain works. I use it for everything from meetings to reminders to when I need to take out the trash.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
