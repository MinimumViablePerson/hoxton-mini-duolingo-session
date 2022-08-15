import { Exercise, Word } from '../types'

type Props = {
  exercise: Exercise
  selectedWords: string[]
  userAnswered: boolean
  lives: number
  streak: number
  deselectWord: (word: string, index: number) => void
  selectWord: (word: Word) => void
  checkAnswer: () => void
}

export function ExerciseScreen ({
  exercise,
  selectedWords,
  userAnswered,
  lives,
  streak,
  deselectWord,
  selectWord,
  checkAnswer
}: Props) {
  return (
    <div className='exercise-screen'>
      <h1>Translate into {exercise.translateTo}</h1>
      <h2>{exercise.phrase}</h2>

      <section className='selected-words'>
        <ul>
          {selectedWords.map((word, index) => (
            <li>
              <button
                className='word'
                disabled={userAnswered}
                onClick={() => {
                  deselectWord(word, index)
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
          {exercise.availableWords.map(word => (
            <li>
              <button
                className={word.selected ? 'word selected' : 'word'}
                disabled={userAnswered || word.selected}
                onClick={() => {
                  selectWord(word)
                }}
              >
                {word.value}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className='check'>
        <button
          className='check-button'
          disabled={selectedWords.length === 0 || userAnswered}
          onClick={checkAnswer}
        >
          CHECK
        </button>
      </section>

      <section className='lives'>
        <h2>❤️ {lives}</h2>
      </section>

      <section className='streak'>
        <h2>🔥 {streak}</h2>
      </section>
    </div>
  )
}
