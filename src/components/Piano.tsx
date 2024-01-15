'use client'

import * as d3 from 'd3'
import React, { useState } from 'react'
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
  const [currentNote, setCurrentNote] = useState<Note>(notes[0])
  const [score, setScore] = useState(0)

  useKeypress(notes.map(note => note.letter), (event: React.KeyboardEvent) => {
    const note = notes.find(note => note.letter === event.key)
    if (note) handleNotePress(note)
  })

  const handleNotePress = (note: Note) => {
    if (note === currentNote) {
      setCurrentNote(randomNote())
      setScore(currentScore => currentScore + 1)
    } else {
      setScore(0)
    }
  }
  
  const keyColors = d3.scaleSequential([0,notes.length], currentNote.scheme)
  
  const pianoWidth = 100
  const pianoHeight = 10
  const noteWidth = pianoWidth / notes.length
  const noteHeight = pianoHeight

  return (
    <React.Fragment>
    <div className="flex flex-row justify-end m-2">
      <h1 className="text-xl text-zinc-900 dark:text-zinc-300">Score: {score}</h1>
    </div>
    <svg
      viewBox={`-1 -1 ${pianoWidth + 1} ${pianoHeight + 2}`}
      className="w-full rounded-2xl bg-zinc-900 shadow-lg dark:bg-black"
    >
      {notes.map((note, i) => (
        <g key={i}>
          <rect
            x={i * noteWidth}
            rx={10 / notes.length}
            y="0"
            width={noteWidth - 1}
            height={noteHeight}
            fill={note === currentNote ? 'white' : keyColors(i)}
            className={note === currentNote ? 'animate-pulse' : ''}
            onClick={() => handleNotePress(note)}
          />
          <text
            className='hidden sm:block'
            x={i * noteWidth + (noteWidth - 1) / 2}
            y={noteHeight / 2 + 2}
            textAnchor="middle"
            fill={note === currentNote ? 'black' : 'white'}
            fontSize={noteWidth / 2}
          >
            {note.letter.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
    </React.Fragment>
  )
}
