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
                <v-list-item-title v-html="comment.user"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="comment.sentence"
                ></v-list-item-subtitle>
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
      <v-btn class="sendButton" @click="consol()">コメントを送る</v-btn>
    </div>
    <!-- questionDialog -->
    <v-dialog v-model="dialogStatus.question" width="500">
      <v-card>
        <v-card-title class="text-h5 lighten-2">
          最近あった面白いことは？
        </v-card-title>

        <v-card-text>
          <v-textarea name="Anser" label="回答"></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="send"> 回答 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dialogStatus: {
        question: false,
      },
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
    send() {
      console.log('send')
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
