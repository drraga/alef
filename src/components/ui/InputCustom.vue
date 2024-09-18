<script setup lang="ts">
const props = defineProps<{
  inputFields: InputEntity
}>()

const inputVal = defineModel('inputValue')
</script>

<template>
  <div class="input-custom">
    <label>{{ props.inputFields.label }}</label>
  
    <input :type="props.inputFields.inputType" :name="props.inputFields.label" v-model="inputVal" />
  
    <span></span>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.input-custom {
  position: relative;

  & label {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    color: getcolor('grey.base', 0.48);
    font-size: 0.813rem;
    text-transform: capitalize
  }

  & input {
    padding: 1.625rem 1rem 0.375rem;
    border: 1px solid getcolor('grey.lighten1');
    border-radius: 0.25rem;
    font-size: 0.875rem;
    inline-size: 100%;
    line-height: 1.5;
    transition: border-color 0.25s ease-in-out;

    &:focus-visible {
      border-color: getcolor('blue.base');
    }
  }
}
</style>