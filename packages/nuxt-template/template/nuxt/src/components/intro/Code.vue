<template>
  <code class="code"><slot /></code>
</template>

<style lang="scss" scoped>
@import '~assets/styles/config';

.code {
  background-color: $white;
  font-family:
    Consolas,
    Menlo,
    Monaco,
    Lucida Console,
    Liberation Mono,
    DejaVu Sans Mono,
    Bitstream Vera Sans Mono,
    Courier New,
    monospace,
    sans-serif;
  font-size: 14px;
  padding: 1px 5px;
}
</style>
