<script setup lang="ts">
import { ref } from 'vue'
import InputCustom from '@/components/ui/InputCustom.vue';

const fields: InputEntity[] = [
  {
    id: 'name',
    label: 'имя',
    inputType: 'text',
    
  },
  {
    id: 'age',
    label: 'возраст',
    inputType: 'number',
  }
]

const user = ref<User>({
  name: '',
  age: null,
})


</script>

<template>
  <fieldset class="form-user">
    <legend>Персональные данные</legend>

    <ul>
      <li v-for="field in fields" :key="field.id">
        <InputCustom v-model:inputValue="user[field.id]" :input-fields="field" />
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
}
</style>