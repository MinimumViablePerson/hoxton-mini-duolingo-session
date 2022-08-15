import { Exercise } from '../types'

export const exercises: Exercise[] = [
  {
    id: 1,
    phrase: 'Kjo eshte nje fjali ne shqip.',
    answer: 'This is a sentence in Albanian',
    translateTo: 'English',
    availableWords: [
      { value: 'sentence', selected: false },
      { value: 'in', selected: false },
      { value: 'love', selected: false },
      { value: 'This', selected: false },
      { value: 'is', selected: false },
      { value: 'is', selected: false },
      { value: 'is', selected: false },
      { value: 'is', selected: false },
      { value: 'Russian', selected: false },
      { value: 'Albanian', selected: false },
      { value: 'a', selected: false },
      { value: 'potato', selected: false }
    ]
  },
  {
    id: 2,
    phrase: 'This is a sentence in Albanian',
    answer: 'Kjo eshte nje fjali ne shqip.',
    translateTo: 'Albanian',
    availableWords: [
      { value: 'Kjo', selected: false },
      { value: 'eshte', selected: false },
      { value: 'nje', selected: false },
      { value: 'fjali', selected: false },
      { value: 'ne', selected: false },
      { value: 'shqip', selected: false },
      { value: 'mirë', selected: false },
      { value: 'ha', selected: false },
      { value: 'të', selected: false }
    ]
  },
  {
    id: 3,
    phrase: 'Përshëndetje unë jam Nicolas',
    answer: 'Hello I am Nicolas',
    translateTo: 'English',
    availableWords: [
      { value: 'Hello', selected: false },
      { value: 'I', selected: false },
      { value: 'am', selected: false },
      { value: 'Nicolas', selected: false },
      { value: 'How', selected: false },
      { value: 'are', selected: false },
      { value: 'biscuit', selected: false }
    ]
  },
  {
    id: 4,
    phrase: 'Hello I am Nicolas',
    answer: 'Përshëndetje unë jam Nicolas',
    translateTo: 'Albanian',
    availableWords: [
      { value: 'Përshëndetje', selected: false },
      { value: 'unë', selected: false },
      { value: 'jam', selected: false },
      { value: 'Nicolas', selected: false },
      { value: 'mirë', selected: false },
      { value: 'ha', selected: false },
      { value: 'të', selected: false }
    ]
  },
  {
    id: 5,
    phrase: 'Unë jam mbret',
    answer: 'I am king',
    translateTo: 'English',
    availableWords: [
      { value: 'I', selected: false },
      { value: 'am', selected: false },
      { value: 'king', selected: false },
      { value: 'queen', selected: false },
      { value: 'are', selected: false },
      { value: 'be', selected: false },
      { value: 'Russian', selected: false }
    ]
  },
  {
    id: 6,
    phrase: 'I am king',
    answer: 'Unë jam mbret',
    translateTo: 'Albanian',
    availableWords: [
      { value: 'Unë', selected: false },
      { value: 'jam', selected: false },
      { value: 'mbret', selected: false },
      { value: 'mirë', selected: false },
      { value: 'ha', selected: false },
      { value: 'të', selected: false }
    ]
  },
  {
    id: 7,
    phrase: 'Mua më pëlqen të ha patate',
    answer: 'I enjoy eating potatoes',
    translateTo: 'English',
    availableWords: [
      { value: 'I', selected: false },
      { value: 'enjoy', selected: false },
      { value: 'eating', selected: false },
      { value: 'potatoes', selected: false },
      { value: 'strawberries', selected: false },
      { value: 'You', selected: false },
      { value: "don't", selected: false }
    ]
  },
  {
    id: 8,
    phrase: 'I enjoy eating potatoes',
    translateTo: 'Albanian',
    answer: 'Mua më pëlqen të ha patate',
    availableWords: [
      { value: 'Mua', selected: false },
      { value: 'më', selected: false },
      { value: 'pëlqen', selected: false },
      { value: 'të', selected: false },
      { value: 'ha', selected: false },
      { value: 'patate', selected: false },
      { value: 'mirë', selected: false },
      { value: 'jo', selected: false },
      { value: 'po', selected: false }
    ]
  }
]
