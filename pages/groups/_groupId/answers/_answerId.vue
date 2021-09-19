<template>
  <section class="detail-page">
    <div class="detail-container">
      <div v-if="true" class="detail-container__answer">
        <v-card>
          <v-card-title class="headline">
            <v-avatar size="28">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              />
            </v-avatar>
            <h5 class="ml-2">{{ answer.user }}</h5>
          </v-card-title>
          <v-card-text>
            <h2 class="mb-2">
              {{ answer.content }}
            </h2>
            <p>{{ question.content }}</p>
          </v-card-text>
        </v-card>
      </div>
      <div class="detail-container__comments">
        <v-list three-line>
          <template v-for="(comment, index) in comments">
            <v-list-item :key="index">
              <v-list-item-avatar class="person"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ comment.username }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  comment.contents
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="comment.id"></v-divider>
          </template>
        </v-list>
      </div>
    </div>
    <div class="new-question-container">
      <v-text-field
        v-model="new_comment"
        label="コメントを入力しよう！"
        placeholder="いいね！"
        outlined
      ></v-text-field>
      <v-btn class="sendButton" @click="sendComment">コメントを送る</v-btn>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { getQuestionAndComments, postComment } from '~/lib/main'
// import { Qa } from '~/types/main'

export default Vue.extend({
  data() {
    return {
      new_comment: '',
      comments: [],
      qa: {},
      answer: {},
      question: {},
    }
  },

  async created() {
    if (!this.$route.query.questionId) {
      console.error('questionIdが存在しません')
    }
    const question = await getQuestionAndComments(
      this.$route.params.groupId,
      this.$route.query.questionId,
      this.$route.params.answerId
    )
    this.qa = question.qa
    this.answer = question.qa.answer
    this.question = question.qa.question
    this.comments = question.comments
  },

  methods: {
    async sendComment() {
      const user = localStorage.getItem(this.$route.params.groupId)
      this.comments.push({
        id: this.comments.length + 1 + '',
        username: user,
        contents: this.new_comment,
      })
      await postComment(
        this.new_comment,
        user,
        this.$route.params.groupId,
        this.$route.query.questionId,
        this.$route.params.answerId
      )
    },
  },
})
</script>

<style scoped lang="scss">
.person {
  background-color: #f5f5f5;
}
.detail-page {
  .new-question-container {
    width: 100%;
    .sendButton {
      float: right;
    }
  }
}
</style>
