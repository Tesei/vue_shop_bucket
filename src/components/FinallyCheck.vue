<template>
    <div class="main__finally-check check">
        <div class="check__wrapp">

            <div class="check__data">
                <div class="check__text check__text_top">
                    <h2 class="check__title">Итого</h2>
                    <div class="check__parametrs">
                        <div class="check__parametr-row row-1">
                            <h4 class="check__info">Сумма заказа</h4>
                            <div class="check__parametr">{{  summWithSpace  }} ₽</div>
                        </div>
                        <div class="check__parametr-row row-2">
                            <h4 class="check__info">Количество</h4>
                            <div class="check__parametr">{{  $store.state.amountGoods  }} шт</div>
                        </div>
                        <div class="check__parametr-row row-3">
                            <h4 class="check__info">Установка</h4>
                            <div v-if="!($store.state.needInstallation)" class="check__parametr">Нет</div>
                            <div v-else class="check__parametr">Да</div>
                        </div>
                    </div>
                </div>
                <div class="check__text check__text_button">
                    <div class="check__summ-of-all-goods-row">
                        <h3 class="check__text-summ">Стоимость товаров</h3>
                        <div class="check__summ-amount-rub">{{  summWithSpace  }} ₽</div>
                    </div>
                </div>
                <div class="check__buttons-row" v-if="!dataSending">
                    <my-button class="btn check__btn check__btn_confirm" @click="orderSend">Оформить заказ</my-button>
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
                <h3 class="check__data-send-message" v-if="orderSuccess">Заказ софрмирован!</h3>
                <h3 class="check__data-send-message" v-if="orderError">Во время отправки данных произошёл сбой!
                    Попробуйте оформить заказ заново.</h3>
            </div>



        </div>

    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            orderBody: {   // данные для отправки(позже они преобразуются в json)
                summOfOrder: this.$store.state.wholeSumm,
                needInstallation: this.$store.state.needInstallation,
                listOfOrder: this.$store.state.goodsForBuy,
            },
            errors: [],    // массив для записи ошибок
            dataSending: false,
            orderSuccess: false,
            orderError: false,
        }
    },

    methods: {
        orderSend: function () {
            this.dataSending = true;

            axios.post(`http://localhost:8081`, {
                body: this.orderBody
            })
                // eslint-disable-next-line
                .then(response => {
                    this.dataSending = false;
                    this.orderSuccess = true;
                })
                .catch(e => {
                    this.errors.push(e);
                    this.dataSending = false;
                    this.orderError = true;
                })
        }
    },
    // Рассчитываем сумму заказа в хранилище, перед загрузкой страницы
    beforeCreate() {
        this.$store.dispatch("calculateWholeSumm");
    },
    computed: {
        summWithSpace() {
            return this.$store.state.wholeSumm.toLocaleString("ru-RU");
        }

    }
}
</script>


<style scoped lang="scss">
@import '@/styles/index.scss';

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
    &__info {}

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