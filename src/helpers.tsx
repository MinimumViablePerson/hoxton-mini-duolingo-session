import { exercises } from "./data/exercises"
import { Exercise } from "./types"

export function randomise (array: any[]) {
  return [...array].sort(() => Math.random() - 0.5)
}

export function getRandomExercise () {
  let randomExercise = exercises[Math.floor(Math.random() * exercises.length)]
  let randomExerciseCopy: Exercise = structuredClone(randomExercise)
  randomExerciseCopy.availableWords = randomise(
    randomExerciseCopy.availableWords
  )
  return randomExerciseCopy
}
