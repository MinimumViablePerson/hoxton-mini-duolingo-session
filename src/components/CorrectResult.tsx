import { getRandomExercise } from '../helpers'

export function CorrectResult ({
  userAnswered,
  userAnsweredCorrectly,
  setExercise,
  setSelectedWords,
  setUserAnswered
}: any) {
  return userAnswered && userAnsweredCorrectly ? (
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
  ) : null
}
