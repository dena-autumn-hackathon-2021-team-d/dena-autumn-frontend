<template>
  <section class="detail-page">
    <div class="detail-container">
      <div class="detail-container__answer">
        <Anser />
      </div>
      <div class="detail-container__comments">
        <div
          v-for="comment in comments"
          :key="comment.id"
          class="detail-container__comments__comment"
        >
          <Comment :user="comment.user" :sentence="comment.sentence" />
        </div>
      </div>
    </div>
    <div class="new-question-container">
      <v-text-field
        v-model="new_comment"
        label="コメントを入力しよう！"
        placeholder="いいね！"
        outlined
      ></v-text-field>
      <v-btn @click="consol()" class="sendButton">コメントを送る</v-btn>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      new_comment: '',
      comments: [
        {
          id: 1,
          user: 'manattan',
          sentence: 'わかる！',
        },
        {
          id: 2,
          user: 'takapiro99',
          sentence: 'わからんな',
        },
      ],
      answers: [],
    }
  },

  methods: {
    consol() {
      this.comments.push({
        id: this.comments.length + 1,
        user: 'manattan',
        sentence: this.new_comment,
      })
    },
  },
})
</script>

<style scoped lang="scss">
.detail-page {
  .detail-container {
    &__comments {
      &__comment {
        margin: 12px 0;
      }
    }
  }
  .new-question-container {
    width: 100%;
    .sendButton {
      float: right;
    }
  }
}
</style>
