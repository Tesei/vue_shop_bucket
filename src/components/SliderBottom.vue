<template>
    <div class="slider-footer slider">

        <div class="slider__slide">
            <swiper :modules="modules" :slides-per-view="1" :space-between="30" :navigation="true"
                :pagination="{ type: 'fraction', }" @swiper="onSwiper" :preload-images="false">
                <swiper-slide v-for="slideBlock in 6" :key="slideBlock" class="slider__items">
                    <item-slider v-for="item in $store.state.arrGoods" :key="item.id" :item="item" />
                </swiper-slide>
            </swiper>

            <div class="slider__usr-btns">
                <button class="slider__usr-button slider__usr-button_prev"></button>
                <div class="slider__sheets">
                    <span class="swiper-pagination-current slider__sheets-from"></span>
                    /
                    <span class="swiper-pagination-total slider__sheets-all"></span>
                </div>
                <button class="slider__usr-button slider__usr-button_next "></button>
            </div>
        </div>
    </div>

</template>


<script>
import ItemSlider from "@/components/ItemSlider";

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/scss';

export default {
    components: {
        Swiper,
        SwiperSlide,
        ItemSlider
    },
    setup() {

        const onSwiper = (swiper) => {

            swiper.params.navigation.prevEl = document.querySelector('.slider__usr-button_prev');
            swiper.params.navigation.nextEl = document.querySelector('.slider__usr-button_next');
            swiper.navigation.init();
            swiper.navigation.update();

            swiper.params.pagination.el = document.querySelector('.slider__sheets');
            swiper.pagination.init();
            swiper.pagination.update();
            document.querySelector('.swiper-pagination').remove();
        };

        return {
            onSwiper,
            modules: [Navigation, Pagination],
        };
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
        transition: all 0.2s ease 0s;

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

        @media (min-width: $md2) {
            &:hover {
                background-color: lighten($gray-arrow, 10%);
            }
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

.swiper-button-disabled {
    background-color: lighten($gray-arrow, 17%);
}
</style>