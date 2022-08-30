<template>
  <div class="wrapper">
    <header-bucket />

    <main class="main">
      <div class="main__content _container">
        <finally-bucket />
      </div>
    </main>
    <footer class="footer">
      <div class="footer__content _container">
        <div class="footer__top">
          <h2 class="footer__title">Просмотренные товары</h2>
        </div>
        <div class="footer__bottom">
          <slider-bottom />
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import FinallyBucket from "@/components/FinallyBucket.vue";
import SliderBottom from "@/components/SliderBottom.vue";
import HeaderBucket from "@/components/HeaderBucket.vue";

export default {
  components: {
    FinallyBucket,
    SliderBottom,
    HeaderBucket
  }
}
</script>


<style lang="scss">
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
