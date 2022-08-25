<template>
    <div class="main__list-of-goods">
        <div class="main__text">
            <div class="main__text-left-side">
                <h1 class="main__title">Ваша корзина</h1>
                <h4 class="main__amount-of-goods"> {{ $store.state.goodsForBuy.length }} товара</h4>
            </div>
            <div class="main__text-right-side">
                <h5 class="main__clear-bucket" @click="$store.commit('clearArrItems')">Очистить корзину</h5>
            </div>
        </div>
        <div class="main__goods-wrap" v-if="$store.state.goodsForBuy.length > 0">
            <ul class="main__goods-items goods">
                <item-of-goods v-for="item in $store.state.goodsForBuy" :item="item" :key="item.id" />
                <!-- <li class="goods__item">
                    <div class="goods__row">
                        <div class="goods__image-wrap _ibg">
                            <img src="@/images/g2h.png" alt="G2H" class="goods-image">
                        </div>
                        <div class="goods__text-about">
                            <h4 class="goods__title">Вытяжное устройство G2H</h4>
                            <h6 class="goods__parametrs">12-72/168 м3/ч / гидрорегулируемый расход / от датчика
                                присутствия</h6>
                            <h6 class="goods__article">Артикул: G2H1065</h6>
                        </div>
                        <div class="goods__amount-btns btns">
                            <div class="btns__row">
                                <button class="btns__minus btns__cube">-</button>
                                <div class="btns__amount btns__cube">1 </div>
                                <button class="btns__plus btns__cube">+</button>
                            </div>
                            <div class="btns__price-of-bit"></div>
                        </div>
                        <h3 class="goods__summ">12 644 ₽</h3>
                        <div class="goods__delete">
                            <img src="@/images/icons/close.svg" alt="Удалить товар" class="goods__delete-image">
                        </div>
                    </div>
                </li>
                <li class="goods__item goods">
                    <div class="goods__row">
                        <div class="goods__image-wrap _ibg">
                            <img src="@/images/bxc.png" alt="G2H" class="goods-image">
                        </div>
                        <div class="goods__text-about">
                            <h4 class="goods__title">Вытяжное устройство G2H</h4>
                            <h6 class="goods__parametrs">12-72/168 м3/ч / гидрорегулируемый расход / от датчика
                                присутствия</h6>
                            <h6 class="goods__article">Артикул: G2H1065</h6>
                        </div>
                        <div class="goods__amount-btns btns">
                            <div class="btns__row">
                                <button class="btns__minus btns__cube"
                                    @click="$store.commit('degreeAmountItems')">-</button>
                                <div class="btns__amount btns__cube">2 </div>
                                <button class="btns__plus btns__cube">+</button>
                            </div>
                            <div class="btns__price-of-bit">12 644 ₽/шт.</div>
                        </div>
                        <h3 class="goods__summ">25 288 ₽</h3>
                        <div class="goods__delete">
                            <img src="@/images/icons/close.svg" alt="Удалить товар" class="goods__delete-image">
                        </div>
                    </div>
                </li>
                <li class="goods__item goods">
                    <div class="goods__row">
                        <div class="goods__image-wrap _ibg">
                            <img src="@/images/ghn.png" alt="G2H" class="goods-image">
                        </div>
                        <div class="goods__text-about">
                            <h4 class="goods__title">Вытяжное устройство G2H</h4>
                            <h6 class="goods__parametrs">12-72/168 м3/ч / гидрорегулируемый расход / от датчика
                                присутствия</h6>
                            <h6 class="goods__article">Артикул: G2H1065</h6>
                        </div>
                        <div class="goods__amount-btns btns">
                            <div class="btns__row">
                                <button class="btns__minus btns__cube">-</button>
                                <div class="btns__amount btns__cube">1 </div>
                                <button class="btns__plus btns__cube">+</button>
                            </div>
                            <div class="btns__price-of-bit"></div>
                        </div>
                        <h3 class="goods__summ">12 644 ₽</h3>
                        <div class="goods__delete">
                            <img src="@/images/icons/close.svg" alt="Удалить товар" class="goods__delete-image">
                        </div>
                    </div>
                </li> -->
            </ul>
            <div class="main__installation installation">
                <div class="installation__row">
                    <input type="checkbox" class="installation__check" value="true"
                        v-model="$store.state.needInstalletion">
                    <div class="installation__image-wrap">
                        <img src="@/images/icons/tools.svg" alt="installation" class="installation__image">
                    </div>
                    <div class="installation__text">
                        <h4 class="installation__title">Установка</h4>
                        <h5 class="installation__about">Отметьте, если Вам необходима консультация профессионала по
                            монтажу
                            выбранных товаров.</h5>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="main__goods-wrap-without-goods" v-else>В корзине нет товаров</h3>
    </div>
</template>


<script>
import ItemOfGoods from "@/components/ItemOfGoods";

export default {
    components: {
        ItemOfGoods
    }
}
</script>


<style scoped lang="scss">
@import '@/styles/index.scss';

.main {

    // .main__list-of-goods
    &__list-of-goods {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 55px;
    }

    // .main__text
    &__text {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 25px;
    }

    // .main__text-left-side
    &__text-left-side {
        display: flex;
        align-items: flex-end;

    }

    // .main__title
    &__title {
        font-weight: 700;
        font-size: 4rem;
        line-height: 1.2;
        margin-right: 27px;
        margin-bottom: -3px;
        letter-spacing: .5px;
    }

    // .main__amount-of-goods
    &__amount-of-goods {
        color: $gray-txt;
    }

    // .main__text-right-side
    &__text-right-side {
        align-self: flex-end;
    }

    // .main__clear-bucket
    &__clear-bucket {
        color: $gray-txt;
        position: relative;
        cursor: pointer;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            border-bottom: 1.5px solid $gray-txt;
        }

        @media (min-width: $md2) {
            &:hover {
                color: lighten($gray-txt, 15%);

                &::before {
                    border-bottom: 1.5px solid lighten($gray-txt, 15%);
                }
            }
        }
    }

    // .main__goods-items
    &__goods-items {
        width: 100%;
    }

    // .main__installation
    &__installation {}
}



.goods-image {}



.installation {

    // .installation__row
    &__row {
        display: flex;
        align-items: center;
        border-radius: 5px;
        background-color: $bgn;
        padding: 25px;
        width: 100%;
    }

    // .installation__check
    &__check {
        width: 19px;
        height: 19px;
    }

    // .installation__image-wrap
    &__image-wrap {
        border-radius: 4px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $white;
        margin: 0 20px;
    }

    // .installation__image
    &__image {
        width: 27px;
        height: 27px;
    }

    // .installation__text
    &__text {}

    // .installation__title
    &__title {
        font-weight: 600;
        margin-bottom: 2px;
    }

    // .installation__about
    &__about {
        color: $gray-txt;
        line-height: 1.5;
        font-size: 1.3rem;
    }
}
</style>