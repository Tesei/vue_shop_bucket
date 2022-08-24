<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__content _container">
        <div class="header__row">
          <div class="header__column">
            <div class="header__bucket-info info-bucket">
              <div class="info-bucket__row">
                <div class="info-bucket__image-wrap">
                  <img src="@/images/icons/bucket3.svg" alt="корзина товаров" class="info-bucket__image">
                </div>
                <div class="info-bucket__text">
                  <h5 class="info-bucket__title">Ваша корзина</h5>
                  <h6 class="info-bucket__amount-of-goods">3 товара</h6>
                  <h6 class="info-bucket__summ-of-goods">50576 ₽</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="main__content _container">
        <myBucket />
      </div>
    </main>
    <footer class="footer">
      <div class="footer__content _container">
        <div class="footer__top">
          <h2 class="footer__title">Просмотренные товары</h2>
          <div class="footer__part-of-slider"></div>
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

export default {
  components: {
    myBucket,
    mySlider
  }
}
</script>


<style lang="scss">
@import '@/styles/index.scss';

#app {}

.wrapper {}

.header {
  margin-bottom: 20px;

  // .header__content
  &__content {}

  // .header__row
  &__row {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  // .header__column
  &__column {}

  // .header__bucket-info
  &__bucket-info {
    margin: 19px 0 25px;
    cursor: pointer;
  }
}

.info-bucket {

  // .info-bucket__row
  &__row {
    display: flex;
    height: 100%;
    margin-right: 2px;
  }

  // .info-bucket__image-wrap
  &__image-wrap {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // .info-bucket__image
  &__image {
    margin: 10px;
    width: 32px;
    height: 32px;
  }

  // .info-bucket__text
  &__text {}

  // .info-bucket__title
  &__title {
    display: block;
    line-height: 1.2;
  }

  // .info-bucket__amount-of-goods
  &__amount-of-goods {
    color: $gray-txt;
    display: block;
    line-height: 1.2;
  }

  // .info-bucket__summ-of-goods
  &__summ-of-goods {
    display: block;
  }
}

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
