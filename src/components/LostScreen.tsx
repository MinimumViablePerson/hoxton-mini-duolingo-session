import { getRandomExercise } from '../helpers'

export function LostScreen ({
  setLives,
  setStreak,
  setSelectedWords,
  setExercise,
  setUserAnswered
}: any) {
  return (
    <div className='lost-screen'>
      <h1>Oof 💔</h1>
      <h2>You ran out of lives.</h2>
      <h3>Would you like to try again?</h3>
      <button
        onClick={() => {
          setLives(3)
          setStreak(0)
          setSelectedWords([])
          setExercise(getRandomExercise())
          setUserAnswered(false)
        }}
      >
        ABSOLUTELY!
      </button>
    </div>
  )
}
