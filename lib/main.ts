const baseURL = 'http://localhost:8000/api'

// グループを作成
export const createGroup = async (name: string) => {
  const data = {
    name: name,
  }
  const res = await fetch(`${baseURL}/group`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).catch((err) => {
    console.error(err)
  })

  return res.json()
}

// タイムラインように全件取得
export const getTimeline = async (group_id: string) => {
  const res = await fetch(`${baseURL}/group/${group_id}/answers`, {
    method: 'GET',
  })
  return res.json()
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
  console.log(data)
  const res = await fetch(`${baseURL}/question`, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  return res.json()
}

// ランダムな質問を取得する
export const getRandomQuestion = async (group_id: string) => {
  const res = await fetch(`${baseURL}/group/${group_id}/question`)
  return res.json()
}

// あるIDの質問を取得する
export const getAQuestion = async (group_id: string, question_id: string) => {
  const res = await fetch(
    `${baseURL}/group/${group_id}/question/${question_id}`
  )
  return res.json()
}
