<template>
  <v-row justify="center" align="center">
    <v-col v-for="(qa, index) in qas" :key="index" cols="12" sm="8" md="6">
      <List :qa="qa" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import List from '~/components/List.vue'
import { Qa } from '~/types/main'

export default Vue.extend({
  components: { List },
  data() {
    return {
      qas: [
        {
          answer: {
            answerId: 4,
            content: '干し芋！',
            user: 'manattan',
          },
          question: {
            questionId: 1,
            user: 'たかぴろ',
            content: '好きな食べ物は？',
          },
        },
        {
          answer: {
            answerId: 4,
            content: '干し芋！',
            user: 'manattan',
          },
          question: {
            questionId: 1,
            user: 'たかぴろ',
            content: '好きな食べ物は？',
          },
        },
      ] as Qa[],
    }
  },
})
</script>
