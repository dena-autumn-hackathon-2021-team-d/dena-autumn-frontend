<template>
  <div class="comment-container">
    <div class="comment-container__icon">
    </div>
    <div class="comment-container__detail">
      <div class="comment-container__detail__user">
        {{user}}
      </div>
      <div class="comment-container__detail__sentence">{{sentence}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    user: {
      type: String,
      required: true
    },
    sentence: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.comment-container {
  display: flex;
  width: 100%;

  &__icon {
    background-color: red;
    border-radius: 50%;
    height: 68px;
    width: 68px;
  }

  &__detail {
    padding: 0 0 0 12px;
    width: auto;
    flex: 1;
  }
}
</style>