'use client'

import * as d3 from 'd3'
import { useState } from 'react'
import useKeypress from 'react-use-keypress'

export default function Piano() {
  const [pressedKey, setPressedKey] = useState<string | null>(null)
  
  const notes = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const keyColors = d3.scaleSequential([0,notes.length], d3.interpolateCool)
  const pianoWidth = 100
  const pianoHeight = 30
  const noteWidth = pianoWidth / notes.length
  const noteHeight = pianoHeight


  useKeypress(notes, (event: React.KeyboardEvent) => {
    setPressedKey(event.key)
  })

  return (
    <svg
      viewBox={`-1 -1 ${pianoWidth + 1} ${pianoHeight + 2}`}
      className="w-full rounded-2xl bg-zinc-900 shadow-lg dark:bg-black"
    >
      {notes.map((note, i) => (
        <>
          <rect key={i} x={i * noteWidth} rx="1" y="0" width={noteWidth - 1} height={noteHeight} fill={note === pressedKey ? "white" : keyColors(i)} />
          <text x={i * noteWidth + ((noteWidth-1) / 2)} y={noteHeight * 0.9} textAnchor="middle" fill={note === pressedKey ? "black" : "white"} fontSize={noteWidth / 2}>
            {note.toUpperCase()}
          </text>
        </>
      ))}
    </svg>
  )
}
