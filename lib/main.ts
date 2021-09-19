import { Qa } from '~/types/main'

const baseURL = 'http://localhost:8000/api'

// グループを作成
export const createGroup = async (name: string) => {
  const data = {
    name: name,
  }
  const res = await fetch(`${baseURL}/group`, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  return res.json()
}

// タイムラインように全件取得
export const getTimeline = async (group_id: string) => {
  const res = await fetch(`${baseURL}/group/${group_id}/answers`, {
    method: 'GET',
  })

  const answers = await res.json()
  const qa: Qa[] = []
  if (answers.length > 1) {
    for (const answer of answers) {
      const res2 = await fetch(
        `${baseURL}/group/${group_id}/question/${answer.question_id}`
      )
      const question = await res2.json()
      qa.push({
        answer: {
          answerId: answer.id,
          content: answer.contents,
          user: answer.username,
          questionId: answer.question_id,
        },
        question: {
          questionId: question.id,
          user: question.username,
          content: question.contents,
        },
      })
    }

    return qa
  } else {
    return []
  }
}

// ある質問に対する回答を送る
export const postAnswer = async (
  contents: string,
  username: string,
  group_id: string,
  question_id: number
) => {
  const data = {
    contents,
    username,
    group_id,
    question_id,
  }
  const res = await fetch(`${baseURL}/answer`, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  return res.json()
}

// 質問を作成する
export const postQuestion = async (
  contents: string,
  group_id: string,
  username: string
) => {
  const data = {
    contents,
    group_id,
    username,
  }
  const res = await fetch(`${baseURL}/question`, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  return res.json()
}

// ランダムな質問を取得する
export const getRandomQuestion = async (group_id: string) => {
  const res = await fetch(`${baseURL}/group/${group_id}/question`)
  if (res.status === 404) {
    return null
  }
  return res.json()
}

export const getQuestions = async (group_id: string) => {
  const res = await fetch(`${baseURL}/group/${group_id}/questions`)
  return res.json()
}

// あるIDの質問を取得する
export const getAQuestion = async (group_id: string, question_id: string) => {
  const res = await fetch(
    `${baseURL}/group/${group_id}/question/${question_id}`
  )
  return res.json()
}

export const getComments = async (
  group_id: string,
  question_id: string,
  answer_id: string
) => {
  const data = {
    group_id,
    question_id,
    answer_id,
  }
}

// 詳細ページ / 質問を取得する
export const getQuestionAndComments = async (
  group_id: string,
  question_id: string,
  answer_id: string
) => {
  const res = await fetch(
    `${baseURL}/groups/${group_id}/questions/${question_id}`
  )
  const question = await res.json()

  const res2 = await fetch(
    `${baseURL}/groups/${group_id}/questions/${question_id}/answers/${answer_id}`
  )
  const answer = await res2.json()

  const res3 = await fetch(
    `${baseURL}/groups/${group_id}/questions/${question_id}/answers/${answer_id}/comments`
  )
  const comments = await res3.json()

  return {
    qa: {
      answer: {
        answerId: answer.id,
        content: answer.contents,
        user: answer.username,
        questionId: question.id,
      },
      question: {
        questionId: question.id,
        user: question.username,
        content: question.contents,
      },
    },
    comments,
  }
}
