<template>
    <div class="slider-footer slider">

        <div class="slider__slide">
            <!-- <swiper :pagination="{ type: 'fraction', }" :navigation="true" :slides-per-view="1" :space-between="30"
                :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange" :preload-images="false"> -->
            <swiper class="vertical-swiper" :modules="modules" :slides-per-view="1" :space-between="18"
                :mousewheel="true" @swiper="setVSwiperRef" @slide-change="updateVSwiperIndex">
                <swiper-slide>
                    <ul class="slider__items">
                        <li class="slider__item item-slide">
                            <div class="item-slide__image-wrap _ibg">
                                <img src="@/images/bxc.png" alt="BXC" class="item-slide__image">
                            </div>
                            <div class="item-slide__text">
                                <div class="item-slide__title">BXC</div>
                                <h5 class="item-slide__text-about">Вытяжное устройство для механической системы
                                    вентиляции
                                </h5>
                            </div>
                            <div class="item-slide__price">
                                <div class="item-slide__price-rub">
                                    <span class="item-slide__price-rub_from">6 848 ₽</span> –
                                    <span class="item-slide__price-rub_to">56 584 ₽</span>
                                </div>
                                <h4 class="item-slide__price-eur">
                                    <span class="item-slide__price-eur_from">77.60 €</span> –
                                    <span class="item-slide__price-eur_to">643.86 €</span>
                                </h4>
                            </div>
                            <div class="btn item-slide__btn">Подробнее</div>
                        </li>
                        <li class="slider__item item-slide">
                            <div class="item-slide__image-wrap _ibg">
                                <img src="@/images/g2h.png" alt="G2H" class="item-slide__image">
                            </div>
                            <div class="item-slide__text">
                                <div class="item-slide__title">G2H</div>
                                <h5 class="item-slide__text-about">Многофункциональное вытяжное устройство для
                                    естественной и гибридной вентиляции
                                </h5>
                            </div>
                            <div class="item-slide__price">
                                <div class="item-slide__price-rub">
                                    <span class="item-slide__price-rub_from">6 848 ₽</span> –
                                    <span class="item-slide__price-rub_to">56 584 ₽</span>
                                </div>
                                <h4 class="item-slide__price-eur">
                                    <span class="item-slide__price-eur_from">77.60 €</span> –
                                    <span class="item-slide__price-eur_to">643.86 €</span>
                                </h4>
                            </div>
                            <div class="btn item-slide__btn">Подробнее</div>
                        </li>
                        <li class="slider__item item-slide">
                            <div class="item-slide__image-wrap _ibg">
                                <img src="@/images/ghn.png" alt="GHN" class="item-slide__image">
                            </div>
                            <div class="item-slide__text">
                                <div class="item-slide__title">GHN</div>
                                <h5 class="item-slide__text-about">Вытяжное устройство с датчиком присутствия
                                </h5>
                            </div>
                            <div class="item-slide__price">
                                <div class="item-slide__price-rub">
                                    <span class="item-slide__price-rub_from">6 848 ₽</span> –
                                    <span class="item-slide__price-rub_to">56 584 ₽</span>
                                </div>
                                <h4 class="item-slide__price-eur">
                                    <span class="item-slide__price-eur_from">77.60 €</span> –
                                    <span class="item-slide__price-eur_to">643.86 €</span>
                                </h4>
                            </div>
                            <div class="btn item-slide__btn">Подробнее</div>
                        </li>
                        <li class="slider__item item-slide">
                            <div class="item-slide__image-wrap _ibg">
                                <img src="@/images/tda.png" alt="TDA" class="item-slide__image">
                            </div>
                            <div class="item-slide__text">
                                <div class="item-slide__title">TDA</div>
                                <h5 class="item-slide__text-about">Вытяжное устройство с датчиком присутствия
                                </h5>
                            </div>
                            <div class="item-slide__price">
                                <div class="item-slide__price-rub">
                                    <span class="item-slide__price-rub_from">6 848 ₽</span> –
                                    <span class="item-slide__price-rub_to">56 584 ₽</span>
                                </div>
                                <h4 class="item-slide__price-eur">
                                    <span class="item-slide__price-eur_from">77.60 €</span> –
                                    <span class="item-slide__price-eur_to">643.86 €</span>
                                </h4>
                            </div>
                            <div class="btn item-slide__btn">Подробнее</div>
                        </li>
                    </ul>
                </swiper-slide>
                <swiper-slide>
                    <ul class="slider__items">
                        <li class="slider__item item-slide">
                            <div class="item-slide__image-wrap _ibg">
                                <img src="@/images/bxc.png" alt="BXC" class="item-slide__image">
                            </div>
                            <div class="item-slide__text">
                                <div class="item-slide__title">BXC</div>
                                <h5 class="item-slide__text-about">Вытяжное устройство для механической системы
                                    вентиляции
                                </h5>
                            </div>
                            <div class="item-slide__price">
                                <div class="item-slide__price-rub">6 848 ₽ – 56 584 ₽</div>
                                <h4 class="item-slide__price-eur">77.60 € – 643.86 €</h4>
                            </div>
                            <div class="btn item-slide__btn">Подробнее</div>
                        </li>
                    </ul>
                </swiper-slide>

            </swiper>
            <div class="slider__usr-btns">
                <button class="slider__usr-button slider__usr-button_prev nav-button-prev"
                    :disabled="vSwiperIndex === 0" @click="prevVSwiperSlide"></button>
                <div class="slider__sheets">
                    <span class="slider__sheets-from">1</span>
                    /
                    <span class="slider__sheets-all">6</span>
                </div>
                <button class="slider__usr-button slider__usr-button_next nav-button-next"
                    :disabled="vSwiperIndex === 5 - 1" @click="nextVSwiperSlide"></button>
            </div>
        </div>
    </div>

</template>


<script lang="ts">
// import Swiper core and required modules
import SwiperClass, { Navigation, A11y, } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';


// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
// import '@/styles/_swiper-btns.scss';
// import "swiper/modules/navigation/navigation.min.css";
// import "swiper/modules/pagination/pagination.min.css";

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
            // swiper.navigation.nextEl = '.swiper-button-next1';
            // swiper.navigation.prevEl = '.swiper-button-prev1';
        };
        const onSlideChange = () => {
            console.log('slide change');
        };


        let vSwiperRef: SwiperClass | null = null
        const setVSwiperRef = (swiper: SwiperClass) => {
            vSwiperRef = swiper
        }
        const prevVSwiperSlide = () => setVSwiperRef?.slidePrev()
        const nextVSwiperSlide = () => setVSwiperRef?.slideNext()
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, A11y],
            setVSwiperRef,
            // vSwiperIndex,
            // updateVSwiperIndex,
            prevVSwiperSlide,
            nextVSwiperSlide
        };
    },
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: '.slider__usr-button_next',
                    prevEl: '.slider__usr-button_prev'
                },
            }
        }
    },
}
</script>


<style scoped lang="scss">
@import '@/styles/index.scss';

.slider {

    // .slider__slide
    &__slide {
        position: relative;
    }

    // .slider__items
    &__items {
        display: flex;
        justify-content: space-between;
        margin: 0 -10px;
    }

    // .slider__item
    &__item {
        flex: 0 1 25%;
        margin: 0 10px;
        padding: 25px;
        background-color: $bgn;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    // .slider__usr-btns
    &__usr-btns {
        position: absolute;
        top: -100px;
        right: 0;
        display: flex;
        align-items: center;
    }

    // .slider__usr-button
    &__usr-button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: $gray-arrow;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;


        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: -2px;

            mask-image: url(@/images/icons/arrow.svg);
            mask-size: 18px 20px;
            mask-repeat: no-repeat;
            mask-position: center;
            background-color: $white;
        }

        // .slider__usr-button_next
        &_next {
            transform: rotate(180deg);
        }

        // .slider__usr-button_prev
        &_prev {}
    }

    // .slider__sheets
    &__sheets {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 1.5;
        color: $gray-txt;
        display: block;
        margin: 0 20px;

    }

    // .slider__sheets-from
    &__sheets-from {
        color: $black;
        font-size: 2.4rem;
    }

    // .slider__sheets-all
    &__sheets-all {}

}



.item-slide {

    // .item-slide__image-wrap
    &__image-wrap {
        margin: 10px;
        padding-bottom: 100%;
    }

    // .item-slide__image
    &__image {}

    // .item-slide__text
    &__text {
        flex: 1 1 auto;
        margin-bottom: 35px;
    }

    // .item-slide__title
    &__title {
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 1.2;
        margin-bottom: 10px;
    }

    // .item-slide__text-about
    &__text-about {}

    // .item-slide__price-rub
    &__price {
        margin-bottom: 20px;
    }

    // .item-slide__price-rub
    &__price-rub {
        font-weight: 500;
        font-size: 2.2rem;
        line-height: 1.3;
        margin-bottom: 3px;
        font-family: $font-family-accent;
    }

    // .item-slide__price-eur
    &__price-eur {
        color: $gray-txt;
    }

    // .item-slide__btn
    &__btn {
        font-size: 1.6rem;
    }
}
</style>