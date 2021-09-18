<template>
  <section>
    <v-row justify="center" align="center">
      <v-col v-for="(qa, index) in qas" :key="index" cols="12" sm="8" md="6">
        <List :qa="qa" :isExistButton="true" />
      </v-col>
    </v-row>
    <nuxt-link :to="`/groups/${this.$route.params['groupId']}/questions/new`">
      <v-btn class="toCreateQuestion">質問を誰かに送る！</v-btn>
    </nuxt-link>
  </section>
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

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.toCreateQuestion {
  margin: 24px 0 0;
}
</style>
