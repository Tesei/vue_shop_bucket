<template>
    <li class="slider__item item-slide">
        <div class="item-slide__image-wrap _ibg">
            <img
                :src="itemImage"
                :alt=item.shortName
                class="item-slide__image"
            >
        </div>
        <div class="item-slide__text">
            <div class="item-slide__title">{{ item.name }}</div>
            <span class="item-slide__text-about text">{{ item.about }} </span>
        </div>
        <div class="item-slide__price">
            <div class="item-slide__price-rub">
                <span class="item-slide__price-rub_from">{{ itemPriceFromWithSpace }} ₽</span> –
                <span class="item-slide__price-rub_to">{{ itemPriceToWithSpace }} ₽</span>
            </div>
            <div class="item-slide__price-eur">
                <span class="item-slide__price-eur_from">77.60 €</span> –
                <span class="item-slide__price-eur_to">643.86 €</span>
            </div>
        </div>
        <my-button
            class="btn item-slide__btn"
            @click="addIteminList(item)"
        >Добавить в корзину
        </my-button>
    </li>
</template>


<script>
import { mapActions } from 'vuex'

export default {
    name: "slider-viewed-goods-item",
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        itemImage() {
            if (!this.item.shortName) {
                return
            }
            const fileName = this.item.shortName.toLowerCase();
            return require(`../images/${fileName}.png`);
        },
        itemPriceFromWithSpace() {
            return this.item.priceFrom.toString().replace(/[^\d.,]/g, '').split('').reverse().join('').replace(/(.{3})/g, '$1 ').replace(/[,]/g, '.').split('').reverse().join('');
        },
        itemPriceToWithSpace() {
            return this.item.priceTo.toString().replace(/[^\d.,]/g,
                '').split('').reverse().join('').replace(/(.{3})/g, '$1 ').replace(/[,]/g,
                    '.').split('').reverse().join('');
        }
    },
    methods: {
        ...mapActions({
            addIteminList: 'addIteminList',
        }),
    }
}
</script>


<style scoped lang="scss">
.slider__item {
    flex: 0 1 24%;
    padding: 25px;
    background-color: $bgn;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    min-height: 100%;
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
        margin-bottom: 40px;
    }

    // .item-slide__title
    &__title {
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 1.2;
        margin-bottom: 10px;
    }

    // .item-slide__text-about
    &__text-about {
        font-size: 1.4rem;
        line-height: 1.5;
    }

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
        font-size: 1.6rem;
    }

    // .item-slide__btn
    &__btn {
        font-size: 1.6rem;
    }
}
</style>