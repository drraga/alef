<script setup lang="ts">
import { nanoid } from 'nanoid'

const props = defineProps<{
  inputFields: InputEntity
}>()

const inputVal = defineModel('inputValue')

const generateId = nanoid();
</script>

<template>
  <div class="input-custom">
    <label :for="generateId">{{ props.inputFields.label }}</label>
  
    <input :id="generateId" :type="props.inputFields.inputType" :name="`${props.inputFields.entityType}-${props.inputFields.type}`" v-model="inputVal" />
  
    <span></span>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.input-custom {
  position: relative;
  flex: auto;

  & label {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    color: getcolor('grey.base', 0.48);
    font-size: 0.813rem;
    text-transform: capitalize
  }

  & input {
    overflow: hidden;
    padding: 1.625rem 1rem 0.375rem;
    border: 1px solid getcolor('grey.lighten1');
    border-radius: 0.25rem;
    font-size: 0.875rem;
    inline-size: 100%;
    line-height: 1.5;
    text-overflow: ellipsis;
    text-wrap: nowrap;
    transition: border-color 0.25s ease-in-out;

    &:focus-visible {
      border-color: getcolor('blue.base');
    }
  }
}
</style>