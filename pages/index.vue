<template>
  <div>
    <h1>質問でコミニケーションを引き起こそう！</h1>
    <v-text-field v-model="groupName" label="グループ名"></v-text-field>
    <v-btn color="primary" elevation="2" @click="create"
      >グループを作成する</v-btn
    >
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'landing',
  data() {
    return {
      groupName: '',
    }
  },
  methods: {
    create() {
      console.log('create')
      this.$router.push('/groups/groupId/answers')
    },
  },
})
</script>
