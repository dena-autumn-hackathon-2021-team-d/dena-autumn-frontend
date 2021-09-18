<template>
  <section class="detail-page">
    <div class="detail-container">
      <div class="detail-container__answer">
        <Anser />
      </div>
      <div class="detail-container__comments">
        <v-list three-line>
          <template v-for="(comment, index) in comments">
            <v-list-item :key="index">
              <v-list-item-avatar class="person"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ comment.user }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  comment.sentence
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider :key="index"></v-divider>
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
