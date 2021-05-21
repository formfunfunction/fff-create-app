<template>
  <h2 class="heading">
    {{ content }}
  </h2>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    content: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~assets/styles/config';

.heading {
  @include type(30px, 36px);

  display: block;
  font-weight: 500;
  margin-bottom: 2rem;
  margin-top: 0;
}
</style>
