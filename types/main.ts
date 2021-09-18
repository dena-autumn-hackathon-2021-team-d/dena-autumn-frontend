export interface Answer {
  answerId: number
  content: string
  user: string
  questionId: number
}

export interface Question {
  questionId: number
  user: string
  content: string
}

export interface Qa {
  answer: Answer
  question: Question
}
