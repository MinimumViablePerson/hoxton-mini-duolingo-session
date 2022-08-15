import { useState } from 'react'
import './App.css'
import { CorrectResult } from './components/CorrectResult'
import { ExerciseScreen } from './components/ExerciseScreen'
import { IncorrectResult } from './components/IncorrectResult'
import { LostScreen } from './components/LostScreen'
import { getRandomExercise } from './helpers'
import { Exercise, Word } from './types'

function App () {
  const [exercise, setExercise] = useState(getRandomExercise())

  const [lives, setLives] = useState(3)
  const [streak, setStreak] = useState(0)

  // words that the user selected
  const [selectedWords, setSelectedWords] = useState<string[]>([])

  // check if the user has finished their answer or not
  const [userAnswered, setUserAnswered] = useState(false)
  const userAnsweredCorrectly = exercise.answer === selectedWords.join(' ')

  function deselectWord (word: string, index: number) {
    let selectedWordsCopy = structuredClone(selectedWords)
    selectedWordsCopy.splice(index, 1)

    let exerciseCopy: Exercise = structuredClone(exercise)
    let match = exerciseCopy.availableWords.find(
      target => target.value === word && target.selected === true
    )!
    match.selected = false

    setExercise(exerciseCopy)
    setSelectedWords(selectedWordsCopy)
  }

  function selectWord (word: Word) {
    // find the index of the item I want to change
    let index = exercise.availableWords.indexOf(word)

    // make a copy of the exercise
    let exerciseCopy: Exercise = structuredClone(exercise)
    // change the word to selected: true
    exerciseCopy.availableWords[index].selected = true

    // update state
    setExercise(exerciseCopy)
    setSelectedWords([...selectedWords, word.value])
  }

  function checkAnswer () {
    if (exercise.answer !== selectedWords.join(' ')) {
      setLives(lives - 1)
    } else {
      setStreak(streak + 1)
    }
    setUserAnswered(true)
  }

  return (
    <div className='App'>
      {lives === 0 ? (
        <LostScreen
          setLives={setLives}
          setStreak={setStreak}
          setSelectedWords={setSelectedWords}
          setExercise={setExercise}
          setUserAnswered={setUserAnswered}
        />
      ) : (
        <ExerciseScreen
          exercise={exercise}
          selectedWords={selectedWords}
          userAnswered={userAnswered}
          lives={lives}
          streak={streak}
          deselectWord={deselectWord}
          selectWord={selectWord}
          checkAnswer={checkAnswer}
        />
      )}

      <CorrectResult
        userAnswered={userAnswered}
        userAnsweredCorrectly={userAnsweredCorrectly}
        setExercise={setExercise}
        setSelectedWords={setSelectedWords}
        setUserAnswered={setUserAnswered}
      />

      <IncorrectResult
        userAnswered={userAnswered}
        userAnsweredCorrectly={userAnsweredCorrectly}
        exercise={exercise}
        lives={lives}
        setExercise={setExercise}
        setSelectedWords={setSelectedWords}
        setUserAnswered={setUserAnswered}
      />
    </div>
  )
}

export default App
