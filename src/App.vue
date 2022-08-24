<template>
  <div class="wrapper">
    <myHeader />

    <main class="main">
      <div class="main__content _container">
        <myBucket />
      </div>
    </main>
    <footer class="footer">
      <div class="footer__content _container">
        <div class="footer__top">
          <h2 class="footer__title">Просмотренные товары</h2>
        </div>
        <div class="footer__bottom">
          <mySlider />

        </div>
      </div>
    </footer>

  </div>




  <h1>{{ $store.state.likes }}</h1>
  <h1>{{ $store.getters.doubleLikes }}</h1>
  <div>
    <!-- Вызываем мутаци для изменения поля state командой .commit('название мутации')-->
    <my-button @click="$store.commit('incrementLikes')">Лайк</my-button>
    <my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button>
    <!-- Если несколько модулей и названия мутаций схожи, то хорош будет использовать в названии мутации её модуль -->
    <!-- <my-button @click="$store.commit('post/decrementLikes')">Дизлайк</my-button> -->
  </div>
</template>

<script>
import myBucket from "@/components/MyBucket.vue";
import mySlider from "@/components/mySlider.vue";
import myHeader from "@/components/myHeader.vue";

export default {
  components: {
    myBucket,
    mySlider,
    myHeader
  }
}
</script>


<style lang="scss">
@import '@/styles/index.scss';

#app {}

.wrapper {}

.main {
  margin-bottom: 95px;

  // .main__content
  &__content {}
}

.footer {

  // .footer__content
  &__content {
    margin-bottom: 100px;
  }

  // .footer__top
  &__top {
    margin-bottom: 60px;
  }

  // .footer__title
  &__title {
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
  }

  // .footer__part-of-slider
  &__part-of-slider {}

  // .footer__bottom
  &__bottom {}
}
</style>
