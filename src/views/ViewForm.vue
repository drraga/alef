<script setup lang="ts">
// import { storeToRefs } from 'pinia'
// import { useUsersStore } from '@/stores/users'

// const usersStore = useUsersStore()
// const { getUser } = storeToRefs(usersStore)

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import FormUser from '@/components/form-user/FormUser.vue'
import FormChild from '@/components/form-child/FormChild.vue';
import ButtonAction from '@/components/form-elements/ButtonAction.vue';

</script>

<template>
  <TheHeader />

  <main>
    <form>
      <FormUser />

      <FormChild />

      <div>
        <ButtonAction :is-blue="true">
          Сохранить
        </ButtonAction>
      </div>
    </form>
  </main>

  <TheFooter />
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

main{
  display: flex;
  justify-content: center;
  padding: 1.875rem;
}

form {
  display: grid;
  flex: auto;
  gap: 1.875rem;
  max-inline-size: 38.5rem;
}
</style>
