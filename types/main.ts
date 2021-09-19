export interface Answer {
  answerId: string
  content: string
  user: string
  questionId: string
}

export interface Question {
  questionId: string
  user: string
  content: string
  num_answers: number
}

export interface Qa {
  answer: Answer
  question: Question
}
