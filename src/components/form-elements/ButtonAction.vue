<script setup lang="ts">
const props = defineProps<{
  isBlue?: boolean;
}>()
</script>

<template>
  <button class="button-action" :class="{ 'is-blue' : props.isBlue }">
    <slot></slot>
  </button>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.button-action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.385rem;
  border: 2px solid getcolor('blue.base');
  border-radius: 100px;
  background-color: transparent;
  color: getcolor('blue.base');
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  transition: background-color 0.25s ease-in, border 0.25s ease-in, color 0.25s ease-in;

  &:hover {
    border: 2px solid getcolor('blue.darken1');
    color: getcolor('blue.darken1');
  }
}

.is-blue {
  background-color: getcolor('blue.base');
  color: #fff;

  &:hover {
    border: 2px solid getcolor('blue.darken1');
    background-color: getcolor('blue.darken1');
    color: #fff;
  }
}
</style>