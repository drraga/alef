<script setup lang="ts">
const fields = {
  name: {
    id: 'name',
    label: 'имя',
    inputType: 'text',
    
  },
  age: {
    id: 'age',
    label: 'возраст',
    inputType: 'number',
  }
}
</script>

<template>
  <fieldset class="form-user">
    <legend>Персональные данные</legend>

    <ul>
      <li v-for="field in fields" :key="field.id">
        <label>{{ field.label }}</label>

        <input :type="field.inputType" :name="field.label"/>

        <span></span>
      </li>
    </ul>
  </fieldset>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.form-user {
  padding: 20px;

  & legend {
    margin: 0 0 1.25rem;
    font-weight: 500;
  }

  &  ul {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    inline-size: 616px;
  }

  & ul li {
    position: relative;
  }

  & ul li label {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    color: getcolor('grey.base', 0.48);
    font-size: 0.813rem;
    text-transform: capitalize
  }

  & ul li input {
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