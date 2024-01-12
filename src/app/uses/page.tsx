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
          <Tool title="Custom Built PC">
            Blood, sweat, and tears went into building this thing. It started
            around{' '}
            {new Date().getFullYear() -
              new Date('2018-09-01T00:00:00.000Z').getFullYear()}{' '}
            years ago when I built the cheapest PC I could to play games on.
            Over the years I’ve upgraded it piece by piece until it’s become the
            beast it is today. I’m not going to list out all of the parts
            because it’s a lot but I will say that the CPU is an AMD Ryzen 9
            5950X and the GPU is an NVIDIA GeForce RTX 3080. I use an ultrawide
            monitor to see more errors, I mean code, at once.
          </Tool>
          <Tool title="Surface Book 2">
            This little feller overtime has turned into my daily driver. In fact, my PC is mostly just a gaming machine now and I couldn't tell you the last time I booted up an old favorite. The Surface lets me draft ideas quickly which is vital for designing web apps and API architectures. It's also a great way to get away from my desk and work from a local coffee shop. It's a niche device and I happen to fit that niche perfectly.
          </Tool>
          <Tool title="Custom Keyboard">
            If you are not yet a mechanical keyboard snob, I highly recommend not going down this rabbit hole. It’s a deep one. I’ve built a few keyboards over the years but my current daily driver is a 60% keyboard with lubed Sunflower tactile switches and a brass plate. GMK keycaps too of course. They say the better the keyboard sounds the better the code you write. I’m not sure if that’s true but I do know that I love the sound of this thing.
          </Tool>
          <Tool title="Stack of Schiit">
            Modius, Magnius, Lokius. The Schiit stack. I’m not an audiophile but I do like to listen to music while I work and this stack is a great way to do that. I’m using a pair of Sundaras with it. As for albums, Mint Jams by Casiopea is my go to for quality. For personal taste though, MUSE wins every time. Anything is better than the voices in my head.
          </Tool>
          <Tool title="Costco Folding Chair">
            No joke, this is the most comfortable chair I’ve ever owned. I've tried a Herman Miller and a Steelcase and I still prefer this one. Best ten bucks I ever spent.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Sublime Text 4">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
