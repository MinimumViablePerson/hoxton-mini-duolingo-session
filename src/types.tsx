export type Word = { value: string; selected: boolean }

export type Exercise = {
  id: number
  phrase: string
  availableWords: Word[]
  answer: string
  translateTo: 'Albanian' | 'English'
}
