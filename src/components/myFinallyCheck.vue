<template>
    <div class="main__finally-check check">
        <div class="check__wrapp">
            <div class="check__text check__text_top">
                <h2 class="check__title">Итого</h2>
                <div class="check__parametrs">
                    <div class="check__parametr-row row-1">
                        <h4 class="check__info">Сумма заказа</h4>
                        <div class="check__parametr">50 576 ₽</div>
                    </div>
                    <div class="check__parametr-row row-2">
                        <h4 class="check__info">Количество</h4>
                        <div class="check__parametr">4 шт</div>
                    </div>
                    <div class="check__parametr-row row-3">
                        <h4 class="check__info">Установка</h4>
                        <div class="check__parametr">Нет</div>
                    </div>
                </div>
            </div>
            <div class="check__text check__text_button">
                <div class="check__summ-of-all-goods-row">
                    <h3 class="check__text-summ">Стоимость товаров</h3>
                    <div class="check__summ-amount-rub">50 576 ₽</div>
                </div>
            </div>
            <div class="check__buttons-row">
                <div class="btn check__btn check__btn_confirm">Оформить заказ</div>
                <div class="btn check__btn check__btn_buy-in-one-click">Купить в 1 клик</div>
            </div>
        </div>
    </div>
</template>


<script>

export default {

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
        &_confirm {}

        // .check__btn_buy-in-one-click
        &_buy-in-one-click {
            padding: 12px 0;
            color: $blue;
            border: 1px solid $blue;
            background-color: $white;
        }
    }
}

.row-1 {}

.row-2 {}

.row-3 {}
</style>