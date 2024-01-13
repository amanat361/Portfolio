import * as d3 from 'd3'

const pianoWidth = 141
const pianoHeight = 42
const whiteKeyWidth = 9
const blackKeyWidth = 7

function BlackKey({ x }: { x: number }) {
  return (
    <rect
      x={x-2}
      y="0"
      rx={1}
      width={blackKeyWidth}
      height={pianoHeight / 1.7}
      className="fill-current text-zinc-900 hover:-translate-y-0.5 active:-translate-y-1 transition-transform"
    />
  )
}

function WhiteKey({ x }: { x: number }) {
  return (
    <rect
      x={x}
      y="1"
      rx={1}
      width={whiteKeyWidth}
      height={pianoHeight - 2}
      className="fill-current text-white hover:text-zinc-200 active:text-zinc-400 transition-colors"
    />
  )
}

export default function Octive() {
  return (
    <svg viewBox={`-1 0 ${pianoWidth} ${pianoHeight}`} className="w-full bg-zinc-900 rounded-lg p-1 shadow-lg">
      <WhiteKey x={0} />
      <WhiteKey x={10} />
      <WhiteKey x={20} />
      <WhiteKey x={30} />
      <WhiteKey x={40} />
      <WhiteKey x={50} />
      <WhiteKey x={60} />
      <WhiteKey x={70} />
      <WhiteKey x={80} />
      <WhiteKey x={90} />
      <WhiteKey x={100} />
      <WhiteKey x={110} />
      <WhiteKey x={120} />
      <WhiteKey x={130} />
      <BlackKey x={8} />
      <BlackKey x={18} />
      <BlackKey x={38} />
      <BlackKey x={48} />
      <BlackKey x={58} />
      <BlackKey x={78} />
      <BlackKey x={88} />
      <BlackKey x={108} />
      <BlackKey x={118} />
      <BlackKey x={128} />
    </svg>
  )
}

function Piano() {

}
