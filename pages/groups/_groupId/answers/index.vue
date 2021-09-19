<template>
  <section>
    <!-- タイトル -->
    <h1 class="mt-4 mb-4 headline">みんなの回答</h1>
    <!-- グループのリンク -->
    <div class="d-flex mb-2">
      <v-btn class="ml-auto" @click="linkCopy"
        ><v-icon class="mr-1">mdi-attachment</v-icon
        >このグループのリンクをコピーする</v-btn
      >
    </div>
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
    <v-row v-else justify="center" align="center">
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
  methods: {
    // クリップボードにリンクをコピー
    linkCopy() {
      // テキストコピー用の一時要素を作成
      const pre = document.createElement('pre')

      // テキストを選択可能にしてテキストセット
      pre.style.userSelect = 'auto'
      pre.textContent = location.href

      // 要素を追加、選択してクリップボードにコピー
      document.body.appendChild(pre)
      document.getSelection()?.selectAllChildren(pre)
      document.execCommand('copy')

      // 要素を削除
      document.body.removeChild(pre)

      alert('リンクをコピーしました')
    },
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
