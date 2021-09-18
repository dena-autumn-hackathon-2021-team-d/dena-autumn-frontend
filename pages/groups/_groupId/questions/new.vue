<template>
  <div class="post-question-page">
    質問をしよう！
    <v-text-field
      v-model="question"
      label="最近好きな人できた？"
      single-line
      outlined
      required
    ></v-text-field>
    <v-btn @click="post">質問を誰かに送る！</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      question: '' as String,
    }
  },

  methods: {
    post() {
      if (this.question) console.log(this.question)
    },
  },
})
</script>
