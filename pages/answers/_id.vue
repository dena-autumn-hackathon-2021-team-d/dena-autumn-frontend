<template>
  <section class="detail-page">
    <div class="detail-container">
      <div class="detail-container__answer">
        <Anser />
      </div>
      <div class="detail-container__comments">
        <div v-for="comment in comments" :key="comment.id" class="detail-container__comments__comment" >
          <Comment :user="comment.user" :sentence="comment.sentence" />
        </div>
      </div>
    </div>
    <div class="new-question-container">
    
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      comments: [
        {
          'id': 1,
          'user': 'manattan',
          'sentence': 'わかる！'
        },
        {
          'id': 2,
          'user': 'takapiro99',
          'sentence': 'わからんな'
        }
      ],
      answers: []
    }
  }
})
</script>

<style scoped lang="scss">
.detail-page {
  .detail-container {
    &__comments {
      &__comment {
        margin: 12px 0;
      }
    }
  }
}
</style>