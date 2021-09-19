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
}

export interface Qa {
  answer: Answer
  question: Question
}
