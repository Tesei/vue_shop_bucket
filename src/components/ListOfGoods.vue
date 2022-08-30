<template>
    <div class="main__list-of-goods">
        <div class="main__text">
            <div class="main__text-left-side">
                <h1 class="main__title">Ваша корзина</h1>
                <span class="main__amount-of-goods"> {{  $store.state.amountGoods  }} товара</span>
            </div>
            <div class="main__text-right-side">
                <button class="main__clear-bucket" @click="$store.dispatch('clearBucket')">Очистить корзину</button>
            </div>
        </div>

        <div class="main__goods-wrap" v-if="$store.state.amountGoods">
            <ul class="main__goods-items goods">
                <transition-group name="post-list">
                    <item-of-goods v-for="item in $store.state.goodsForBuy" :item="item" :key="item.id" />
                </transition-group>
            </ul>
            <div class="main__installation installation">

                <input type="checkbox" class="installation__check" value="true" v-model="$store.state.needInstallation">
                <div class="installation__image-wrap">
                    <img src="@/images/icons/tools.svg" alt="installation" class="installation__image">
                </div>
                <div class="installation__text">
                    <span class="installation__title">Установка</span>
                    <span class="installation__about">Отметьте, если Вам необходима консультация профессионала по
                        монтажу выбранных товаров.</span>
                </div>

            </div>
        </div>
        <h2 class="main__goods-wrap-without-goods" v-else>В корзине нет товаров</h2>
    </div>
</template>


<script>
import ItemOfGoods from "@/components/ItemOfGoods";

export default {
    components: {
        ItemOfGoods
    },
    mounted() {
        this.$store.dispatch('calculateWholeSumm');
        this.$store.dispatch('calculateAmountGoods');

    },
}
</script>


<style scoped lang="scss">
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
        margin-bottom: -7px;
        letter-spacing: .5px;
    }

    // .main__amount-of-goods
    &__amount-of-goods {
        color: $gray-txt;
        font-size: 1.6rem;
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
    &__installation {
        display: flex;
        align-items: center;
        border-radius: 5px;
        background-color: $bgn;
        padding: 25px;
        width: 100%;
    }

    // .main__goods-wrap
    &__goods-wrap {
        width: 100%;
    }

    // main__goods-wrap-without-goods
    &__goods-wrap-without-goods {
        font-size: 2rem;
    }
}

.goods-image {}

.installation {

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
    &__text {
        align-self: flex-start;
    }

    // .installation__title
    &__title {
        font-weight: 600;
        margin-bottom: 5px;
        font-size: 1.6rem;
        display: block;
    }

    // .installation__about
    &__about {
        color: $gray-txt;
        line-height: 1.5;
        font-size: 1.3rem;
    }
}

.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
    transition: all .4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(-130px);
}
</style>