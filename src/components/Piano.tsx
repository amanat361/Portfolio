'use client'

import * as d3 from 'd3'
import React, { useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress'

type Note = {
  letter: string
  scheme: d3.ScaleSequential<string>
}

const notes = [
  { letter: 'a', scheme: d3.interpolateReds },
  { letter: 's', scheme: d3.interpolateOranges },
  { letter: 'd', scheme: d3.interpolateYlOrRd },
  { letter: 'f', scheme: d3.interpolateYlGn },
  { letter: 'g', scheme: d3.interpolateGreens },
  { letter: 'h', scheme: d3.interpolateBuGn },
  { letter: 'j', scheme: d3.interpolateBlues },
  { letter: 'k', scheme: d3.interpolateBuPu },
  { letter: 'l', scheme: d3.interpolatePurples },
] as Note[]

export default function Piano() {
  const [timer, setTimer] = useState(0)
  const [currentNote, setCurrentNote] = useState<Note>(notes[0])
  const [score, setScore] = useState(0)
  const started = score > 0

  const randomNote = (): Note => {
    const newNote = notes[Math.floor(Math.random() * notes.length)]
    if (newNote === currentNote) return randomNote()
    return newNote
  }

  useEffect(() => {
    if (!started) return
    const interval = setInterval(() => {
      setTimer((currentTimer) => Math.round((currentTimer + 0.1) * 10) / 10)
    }, 100)
    return () => {
      setTimer(0)
      clearInterval(interval)
    }
  }, [started])

  useKeypress(
    notes.map((note) => note.letter),
    (event: React.KeyboardEvent) => {
      const note = notes.find((note) => note.letter === event.key)
      if (note) handleNotePress(note)
    },
  )

  const handleNotePress = (note: Note) => {
    if (note === currentNote) {
      setCurrentNote(randomNote())
      setScore((currentScore) => currentScore + 1)
    } else {
      setScore(0)
    }
  }

  const keyColors = d3.scaleSequential(
    [notes.length, -(notes.length / 2)],
    currentNote.scheme,
  )

  const pianoWidth = 100
  const pianoHeight = 10
  const noteWidth = pianoWidth / notes.length
  const noteHeight = pianoHeight

  return (
    <React.Fragment>
      <div className="m-2 flex flex-row justify-end gap-4">
        <h1 className="text-xl text-zinc-900 dark:text-zinc-300">
          Score: {score}
        </h1>
        <h1 className="text-xl text-zinc-900 dark:text-zinc-300">
          Timer: {timer.toFixed(1)}
        </h1>
      </div>
      <svg
        viewBox={`-1 -1 ${pianoWidth + 1} ${pianoHeight + 2}`}
        className="w-full"
      >
        {notes.map((note, i) => (
          <g key={i}>
            <rect
              x={i * noteWidth}
              rx={10 / notes.length}
              y="0"
              width={noteWidth - 1}
              height={noteHeight}
              fill={keyColors(i)}
              className={
                note === currentNote
                  ? 'animate-pulse fill-black stroke-blue-500 stroke-[0.5] dark:stroke-white'
                  : ''
              }
              onClick={() => handleNotePress(note)}
            />
            <text
              x={i * noteWidth + (noteWidth - 1) / 2}
              y={noteHeight / 2 + 2}
              textAnchor="middle"
              fill="white"
              className="hidden sm:block"
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
