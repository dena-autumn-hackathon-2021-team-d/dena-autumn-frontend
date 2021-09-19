<template>
  <div class="post-question-page">
    <h1 class="mt-4 mb-4 headline">新しい質問を送る</h1>
    質問をしよう！
    <div class="mt-4">
      <v-text-field
        v-model="question"
        label="最近好きな人できた？"
        single-line
        outlined
        required
        hide-details
        class="mb-2"
      ></v-text-field>
      <v-btn color="primary" @click="post">質問を誰かに送る！</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { postQuestion } from '~/lib/main'
export default Vue.extend({
  data() {
    return {
      question: '' as string,
    }
  },

  methods: {
    async post() {
      const user = localStorage.getItem(this.$route.params.groupId)
      const groupId = this.$route.params.groupId
      if (!user) {
        return
      }
      if (this.question && user) {
        await postQuestion(this.question, groupId, user)
      } else {
        alert('空欄だよ！')
      }

      alert('質問を送信しました！')
      this.$router.push(`/groups/${this.$route.params.groupId}/answers`)
    },
  },
})
</script>
