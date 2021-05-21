<template>
  <div class="intro">
    <div class="intro--row">
      <div class="intro--column">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/styles/config';

.intro {
  @include container();

  padding-top: 3rem;
}

.intro--row {
  @include grid();
}

.intro--column {
  @include grid-col(5);

  @include tablet {
    @include grid-col(100%);
  }
}
</style>
