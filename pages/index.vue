<template>
  <div>
    <h1>質問でコミニケーションを引き起こそう！</h1>
    <v-text-field v-model="groupName" label="グループ名"></v-text-field>
    <v-btn color="primary" elevation="2" @click="create"
      >グループを作成する</v-btn
    >
    <p class="mt-4">
      オンラインのではコミニケーションが希薄になりがちです。<br />このサービスで互いの質問を通してコミュニケーションを活発させましょう。
    </p>
    <v-img class="mt-2" src="undraw_Partying_re_at7f.svg" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { createGroup } from '~/lib/main'
export default Vue.extend({
  layout: 'landing',
  data() {
    return {
      groupName: '',
    }
  },
  methods: {
    async create() {
      if (this.groupName) {
        const res = await createGroup(this.groupName)
        const groupId = res.id
        console.log('created, group id: ', groupId)
        this.$router.push(`/groups/${groupId}/answers`)
      } else {
        alert('名前を入力してください')
      }
    },
  },
})
</script>
