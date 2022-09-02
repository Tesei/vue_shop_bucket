<template>
    <div class="main__finally-check check">
        <div class="check__wrapp">

            <div class="check__data">
                <div class="check__text check__text_top">
                    <h2 class="check__title">Итого</h2>
                    <ul class="check__parametrs">
                        <li class="check__parametr-row row-1">
                            <span class="check__info text">Сумма заказа</span>
                            <div class="check__parametr">{{ summWithSpace }} ₽</div>
                        </li>
                        <li class="check__parametr-row row-2">
                            <span class="check__info text">Количество</span>
                            <div class="check__parametr">{{ amountGoods }} шт</div>
                        </li>
                        <li class="check__parametr-row row-3">
                            <span class="check__info text">Установка</span>
                            <div v-if="!(needInstallation)" class="check__parametr">Нет</div>
                            <div v-else class="check__parametr">Да</div>
                        </li>
                    </ul>
                </div>
                <div class="check__text check__text_button">
                    <div class="check__summ-of-all-goods-row">
                        <span class="check__text-summ text">Стоимость товаров</span>
                        <div class="check__summ-amount-rub">{{ summWithSpace }} ₽</div>
                    </div>
                </div>
                <div class="check__buttons-row" v-if="!dataSending">
                    <my-button class="btn check__btn check__btn_confirm" @click="orderSend">Оформить
                        заказ</my-button>
                    <my-button class="btn btn_color-reverse check__btn check__btn_buy-in-one-click">Купить в 1 клик
                    </my-button>
                </div>
                <div class="check__data-send" v-else>
                    <div class="wait-three-line__wide">
                        <div class="wait-three-line__wide-wrap">
                            <div class="wait-three-line__wide_one"></div>
                            <div class="wait-three-line__wide_two"></div>
                            <div class="wait-three-line__wide_three"></div>
                        </div>
                    </div>
                </div>
                <span class="check__data-send-message text" v-if="orderSuccess">Заказ софрмирован!</span>
                <span class="check__data-send-message text" v-if="orderError">Во время отправки данных произошёл сбой!
                    Попробуйте оформить заказ заново.</span>
            </div>



        </div>

    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            orderSend: 'orderSend',
            calculateWholeSumm: 'calculateWholeSumm',
        }),
    },
    // Рассчитываем сумму заказа в хранилище, перед загрузкой страницы
    beforeCreate() {
        this.calculateWholeSumm;
    },
    computed: {
        ...mapState({
            wholeSumm: state => state.wholeSumm,
            needInstallation: state => state.needInstallation,
            goodsForBuy: state => state.goodsForBuy,
            amountGoods: state => state.amountGoods,
            dataSending: state => state.dataSending,
            orderSuccess: state => state.orderSuccess,
            orderError: state => state.orderError,
        }),
        summWithSpace() {
            return this.wholeSumm.toLocaleString("ru-RU");
        },
    }
}
</script>


<style scoped lang="scss">
.main {

    // .main__finally-check
    &__finally-check {}
}

.check {

    // .check__wrapp
    &__wrapp {
        background-color: $bgn;
        padding: 10% 9%;
    }

    // .check__data-send
    &__data-send {
        display: flex;
        justify-content: center;
        margin: 35px 0 20px;
    }

    // .check__data-send-message
    &__data-send-message {}

    // .check__text
    &__text {
        &_top {
            border-bottom: 1px solid $gray-txt;
            margin-bottom: 15px;
            padding-bottom: 25px;
        }

        &_button {}
    }

    // .check__title
    &__title {
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 1.2;
        display: block;
        margin-bottom: 30px;
        font-weight: 500;
    }

    // .check__parametrs
    &__parametrs {
        font-weight: 500;
    }

    // .check__parametr-row
    &__parametr-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    // .check__info
    &__info {
        font-size: 1.6rem;
    }

    // .check__parametr
    &__parametr {}

    // .check__summ-of-all-goods-row
    &__summ-of-all-goods-row {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-between;
    }

    // .check__text-summ
    &__text-summ {
        font-weight: 600;
        align-self: flex-end;
        height: 100%;
        display: block;
        margin-bottom: 4px;
        font-size: 1.8rem;
    }

    // .check__summ-amount-rub
    &__summ-amount-rub {
        font-family: $font-family-accent;
        font-weight: 700;
        font-size: 2.6rem;
        line-height: 1;
        align-self: flex-end;
    }

    // .check__buttons-row
    &__buttons-row {}

    // .check__btn-confirm
    &__btn {

        // .check__btn_confirm
        &_confirm {
            margin-bottom: 12px;
        }

        // .check__btn_buy-in-one-click
        &_buy-in-one-click {
            margin-bottom: 0;
        }
    }

    // .check__data-send-message
    &__data-send-message {
        font-size: 1.8rem;
        margin-top: 10px;
    }
}

.row-1 {}

.row-2 {}

.row-3 {}

.wait-three-line__wide {
    width: 10%;
    padding-bottom: 8%;
    position: relative;
    margin: 10px;


    // .wait-three-line__wide-wrap
    &-wrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    &_one,
    &_two,
    &_three {
        border-radius: 3px;
        background-color: $blue;
        width: 22%;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    // .wait-three-line__one
    &_one {
        padding-bottom: 20%;
        animation-name: growAndDegreePercentMin;
    }

    // .wait-three-line__two
    &_two {
        padding-bottom: 80%;
        animation-name: growAndDegreePercentMax;
    }

    // .wait-three-line__three
    &_three {
        padding-bottom: 20%;
        animation-name: growAndDegreePercentMin;
    }
}

@keyframes growAndDegreePercentMin {
    0% {
        padding-bottom: 20%;
    }

    100% {
        padding-bottom: 80%;
    }
}

@keyframes growAndDegreePercentMax {
    0% {
        padding-bottom: 80%;
    }

    100% {
        padding-bottom: 20%;
    }
}
</style>