'use client'

import * as d3 from 'd3'
import { useState } from 'react'
import useKeypress from 'react-use-keypress'

type Note = {
  letter: string
  scheme: d3.ScaleSequential<string>
}

const notes = [
  { letter: 'a', scheme: d3.interpolateCool },
  { letter: 's', scheme: d3.interpolateWarm },
  { letter: 'd', scheme: d3.interpolateRainbow },
  { letter: 'f', scheme: d3.interpolateSinebow },
  { letter: 'g', scheme: d3.interpolateTurbo },
  { letter: 'h', scheme: d3.interpolateViridis },
  { letter: 'j', scheme: d3.interpolateInferno },
  { letter: 'k', scheme: d3.interpolateMagma },
  { letter: 'l', scheme: d3.interpolatePlasma },
] as Note[]

const randomNote = () => notes[Math.floor(Math.random() * notes.length)]

export default function Piano() {
  const [currentNote, setCurrentNote] = useState<Note>(randomNote())
  
  const keyColors = d3.scaleSequential([0,notes.length], currentNote.scheme)
  
  const pianoWidth = 100
  const pianoHeight = 30
  const noteWidth = pianoWidth / notes.length
  const noteHeight = pianoHeight

  useKeypress(notes.map(note => note.letter), (event: React.KeyboardEvent) => {
    const note = notes.find(note => note.letter === event.key)
    if (note) handleNotePress(note)
  })

  const handleNotePress = (note: Note) => {
    if (note === currentNote) setCurrentNote(randomNote())
  }

  return (
    <svg
      viewBox={`-1 -1 ${pianoWidth + 1} ${pianoHeight + 2}`}
      className="w-full rounded-2xl bg-zinc-900 shadow-lg dark:bg-black"
    >
      {notes.map((note, i) => (
        <>
          <rect
            key={i}
            x={i * noteWidth}
            rx={10 / notes.length}
            y="0"
            width={noteWidth - 1}
            height={noteHeight}
            fill={note === currentNote ? 'white' : keyColors(i)}
            onClick={() => handleNotePress(note)}
          />
          <text
            x={i * noteWidth + (noteWidth - 1) / 2}
            y={noteHeight * 0.9}
            textAnchor="middle"
            fill={note === currentNote ? 'black' : 'white'}
            fontSize={noteWidth / 2}
          >
            {note.letter.toUpperCase()}
          </text>
        </>
      ))}
    </svg>
  )
}
