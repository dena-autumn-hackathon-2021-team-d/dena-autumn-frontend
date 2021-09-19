<template>
  <section>
    <!-- タイトル -->
    <h1 class="mt-4 mb-4 headline">みんなの回答</h1>
    <v-alert
      v-if="qas.length === 0"
      border="bottom"
      colored-border
      type="warning"
      elevation="2"
    >
      回答がないですね〜。回答していきましょう！
    </v-alert>
    <!-- 回答一覧 -->
    <v-row justify="center" align="center">
      <v-col v-for="(qa, index) in qas" :key="index" cols="12" sm="8" md="6">
        <List :qa="qa" :is-exist-button="true" />
      </v-col>
    </v-row>
    <nuxt-link :to="`/groups/${$route.params['groupId']}/questions/new`">
      <v-btn class="toCreateQuestion">新しい質問を送る</v-btn>
    </nuxt-link>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import List from '~/components/List.vue'
import { getTimeline } from '~/lib/main'
import { Qa } from '~/types/main'

export default Vue.extend({
  components: { List },
  data() {
    return {
      qas: [] as Qa[],
    }
  },

  async created() {
    const res = await getTimeline(this.$route.params.groupId)
    this.qas = res
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
