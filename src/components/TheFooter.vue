<template>
  <footer>
    <p>all rights reserved</p>
  </footer>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.875rem 0;
  background-color: getcolor('grey.lighten2');
  font-size: 0.813rem;
}
</style>