<template>
  <v-card>
    <v-card-title class="headline">
      <v-avatar size="28">
        <img
          alt="user"
          src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
        />
      </v-avatar>
      <h5 class="ml-2">{{ qa.answer.user }}</h5>
    </v-card-title>
    <v-card-text>
      <h2 class="mb-2">{{ qa.answer.content }}</h2>
      <p>{{ qa.question.content }}</p>
    </v-card-text>
    <v-card-actions v-if="isExistButton">
      <v-spacer />
      <v-btn color="primary" nuxt @click="toDetail"> コメントを見る </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Qa } from '~/types/main'
export default Vue.extend({
  props: {
    qa: {
      type: Object as Vue.PropType<Qa>,
      required: true,
    },
    isExistButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    toDetail() {
      this.$router.push(
        `/groups/${this.$route.params.groupId}/answers/${this.qa.answer.answerId}?questionId=${this.qa.question.questionId}`
      )
    },
  },
})
</script>
