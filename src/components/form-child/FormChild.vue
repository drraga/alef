<script setup lang="ts">
import { ref } from 'vue'
import InputCustom from '@/components/ui/InputCustom.vue';
import ButtonAction from '@/components/form-elements/ButtonAction.vue';
import IconPlus from '@/assets/icons/IconPlus.vue';

// const children = [
//   {
//     id: '',
//     name: 'Петр',
//     age: 12
//   },
//   {
//     id: '',
//     name: 'Денис',
//     age: 11
//   }
// ]

const fields: InputEntity[] = [
  {
    type: 'name',
    label: 'имя',
    entityType: 'child',
    inputType: 'text',
  },
  {
    type: 'age',
    label: 'возраст', 
    entityType: 'child',
    inputType: 'number',
  }
]

const children = ref([{
  id: '',
  name: '',
  age: null,
},
{
  id: '',
  name: '',
  age: null,
}])
</script>

<template>
  <fieldset class="form-children">

    <div class="form-children__header">
      <legend>Дети (макс. 5)</legend>

      <div class="form-children__add-child">
        <ButtonAction>
          <IconPlus />
          Добавить ребенка
        </ButtonAction>  
      </div>
    </div>


    <ul>
      <li v-for="(child, index) in children" :key="index">
        <template v-for="(field, i) in fields" :key="i">
          <InputCustom :input-fields="field" v-model:inputValue="child[field.type]" />
        </template>

        <div class="form-children__delete-child">
          <ButtonAction>
            Удалить
          </ButtonAction>
        </div>
      </li>
    </ul>
  </fieldset>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.form-children {
  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;  
    justify-content: space-between;
    margin: 0 0 0.75rem;
    gap: 0.5rem;
  }

  &__add-child {
    margin-left: auto;
    
    &:hover {
      & .icon-plus {
        transform: rotate(45deg);
        
        & path {
          fill: getcolor('blue.darken1')
        }
      }
    }

    & .button-action {
      gap: 1.12rem;
    }
  }

  & li {
    display: flex;
    flex-wrap: wrap;
    gap: 1.125rem;

    @include mq(576) {
      flex-direction: column;
    }

    &:not(:last-child) {
      margin: 0 0 0.625rem;
    }

    & .form-children__delete-child {
      & button {
        padding: 0.625rem 0;
        border: none;
        border-radius: unset;
      }
    }
  }
}

</style>