<script setup lang="ts">
import { ref } from 'vue'
import InputCustom from '@/components/ui/InputCustom.vue';


const fields: InputEntity[] = [
  {
    type: 'name',
    label: 'имя',
    entityType: 'user',
    inputType: 'text',
  },
  {
    type: 'age',
    label: 'возраст', 
    entityType: 'user',
    inputType: 'number',
  }
]

const user = ref<User>({
  id: '',
  name: '',
  age: null,
})
</script>

<template>
  <fieldset class="form-user">
    <legend>Персональные данные</legend>

    <ul>
      <li v-for="field in fields" :key="field.type">
        <InputCustom v-model:inputValue="user[field.type]" :input-fields="field" />
      </li>
    </ul>
  </fieldset>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.form-user {
  & legend {
    margin: 0 0 1.25rem;
    font-weight: 500;
  }

  &  ul {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
}
</style>