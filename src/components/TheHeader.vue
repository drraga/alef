<template>
  <div class="header">
    <img src="../assets/icons/LogoCo.svg" alt="">

    <nav>
      <ul class="header__nav-links">
        <li><RouterLink to="#">Форма</RouterLink></li>
        <li><RouterLink to="#">Превью</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_mixins';
@import '@/assets/styles/_variables';

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: getcolor('grey.lighten1') 1px solid;

  & > img {
    position: absolute;
    left:  5.5rem;
  }

  & nav {
    padding: 1.8rem 0;
  }

  &__nav-links {
      display: flex;
      font-size: 14px;
      gap: 1.5rem;

      & li a {
        // TODO активный цвет ссылки + transition hover active
        color: getcolor('black.base', 0.48);

        &:hover {
          border-bottom: 1px solid #000 ;
          color: #000;
        }
      }
    }
}
</style>
