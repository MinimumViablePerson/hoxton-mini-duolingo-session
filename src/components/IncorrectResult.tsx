import { getRandomExercise } from '../helpers'

export function IncorrectResult ({
  userAnswered,
  userAnsweredCorrectly,
  exercise,
  lives,
  setExercise,
  setSelectedWords,
  setUserAnswered
}: any) {
  return userAnswered && !userAnsweredCorrectly ? (
    <div className='result incorrect'>
      <h3>Sorry, that is incorrect. 🙈</h3>
      <p>The correct answer is: "{exercise.answer}"</p>
      {lives > 0 ? (
        <button
          onClick={() => {
            setExercise(getRandomExercise())
            setSelectedWords([])
            setUserAnswered(false)
          }}
        >
          Continue
        </button>
      ) : null}
    </div>
  ) : null
}
