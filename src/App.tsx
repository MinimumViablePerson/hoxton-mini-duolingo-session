import { useState } from 'react'
import './App.css'

// MVP
// - build 1 exercise
// - A phrase
// - A bunch of words to choose from
// - Check if the answer is correct

// Original: Kjo eshte nje fjali ne shqip.
// Translation: This is a sentence in Albanian.

// Original: Përshëndetje, unë jam Nicolas!
// Translation: Hello, I'm Nicolas!

type Exercise = {
  id: number
  phrase: string
  availableWords: string[]
  answer: string
}

const exercises: Exercise[] = [
  {
    id: 1,
    phrase: 'Kjo eshte nje fjali ne shqip.',
    answer: 'This is a sentence in Albanian',
    availableWords: [
      'sentence',
      'in',
      'love',
      'This',
      'is',
      'Russian',
      'Albanian',
      'a',
      'potato'
    ]
  },
  {
    id: 2,
    phrase: 'Përshëndetje unë jam Nicolas',
    answer: 'Hello I am Nicolas',
    availableWords: ['Hello', 'I', 'am', 'Nicolas', 'How', 'are', 'biscuit']
  },
  {
    id: 3,
    phrase: 'Unë jam mbret',
    answer: 'I am king',
    availableWords: ['I', 'am', 'king', 'queen', 'are', 'be', 'Russian']
  },
  {
    id: 4,
    phrase: 'Mua më pëlqen të ha patate',
    answer: 'I enjoy eating potatoes',
    availableWords: [
      'I',
      'enjoy',
      'eating',
      'potatoes',
      'strawberries',
      'You',
      "don't"
    ]
  }
]

function randomise (array: any[]) {
  return [...array].sort(() => Math.random() - 0.5)
}

function getRandomExercise () {
  let randomExercise = exercises[Math.floor(Math.random() * exercises.length)]
  let randomExerciseCopy: Exercise = structuredClone(randomExercise)
  randomExerciseCopy.availableWords = randomise(
    randomExerciseCopy.availableWords
  )
  return randomExerciseCopy
}

function App () {
  const [exercise, setExercise] = useState(getRandomExercise())

  // words that the user selected
  const [selectedWords, setSelectedWords] = useState<string[]>([])

  // derived state
  const availableWordsThatHaveNotBeenSelected = exercise.availableWords.filter(
    word => !selectedWords.includes(word)
  )

  // check if the user has finished their answer or not
  const [userAnswered, setUserAnswered] = useState(false)
  const userAnsweredCorrectly = exercise.answer === selectedWords.join(' ')

  return (
    <div className='App'>
      <h1>Translate into English</h1>
      <h2>{exercise.phrase}</h2>

      <section className='selected-words'>
        <ul>
          {selectedWords.map(word => (
            <li>
              <button
                className='word'
                disabled={userAnswered}
                onClick={() => {
                  const updatedSelectedWords = selectedWords.filter(
                    target => target !== word
                  )
                  setSelectedWords(updatedSelectedWords)
                }}
              >
                {word}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className='unselected-words'>
        <ul>
          {availableWordsThatHaveNotBeenSelected.map(word => (
            <li>
              <button
                className='word'
                disabled={userAnswered}
                onClick={() => {
                  setSelectedWords([...selectedWords, word])
                }}
              >
                {word}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className='check'>
        <button
          className='check-button'
          disabled={selectedWords.length === 0}
          onClick={() => {
            setUserAnswered(true)
          }}
        >
          CHECK
        </button>
      </section>

      {userAnswered && userAnsweredCorrectly ? (
        <div className='result correct'>
          <h3>You got it right! 🎉</h3>
          <button
            onClick={() => {
              setExercise(getRandomExercise())
              setSelectedWords([])
              setUserAnswered(false)
            }}
          >
            Continue
          </button>
        </div>
      ) : null}
      {userAnswered && !userAnsweredCorrectly ? (
        <div className='result incorrect'>
          <h3>Sorry, that is incorrect. 🙈</h3>
          <p>The correct answer is: "{exercise.answer}"</p>
          <button
            onClick={() => {
              setExercise(getRandomExercise())
              setSelectedWords([])
              setUserAnswered(false)
            }}
          >
            Continue
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default App
