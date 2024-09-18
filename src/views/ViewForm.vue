<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import FormUser from '@/components/form-user/FormUser.vue'


</script>

<template>
  <TheHeader />

  <main>
    <form>
      <FormUser />

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

}

form {
  padding: 1.875rem 0 0;
}
</style>
