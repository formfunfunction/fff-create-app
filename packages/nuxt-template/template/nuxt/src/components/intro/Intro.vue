<template>
  <div class="intro">
    <div class="intro__row">
      <div class="intro__column"><slot /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/styles/config';

.intro {
  @include container();
  padding-top: 3rem;
}

.intro__row {
  @include grid();
}

.intro__column {
  @include grid-col(5);
  @include tablet {
    @include grid-col(100%);
  }
}
</style>
