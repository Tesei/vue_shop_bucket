<template>
    <li class="goods__item">
        <div class="goods__row">
            <div class="goods__image-wrap _ibg">
                <img :src="itemImage" :alt=item.shortName class="goods__image">
            </div>
            <div class="goods__text-about">
                <h4 class="goods__title">{{ item.name }}</h4>
                <h6 class="goods__parametrs">{{ item.about }}</h6>
                <h6 class="goods__article">Артикул: {{ item.article }}</h6>
            </div>
            <div class="goods__amount-btns btns">
                <div class="btns__row">
                    <button class="btns__minus btns__cube"
                        @click="$store.dispatch('degreaseAmountItems', item)">-</button>
                    <div class="btns__amount btns__cube">{{ item.amount }}</div>
                    <button class="btns__plus btns__cube"
                        @click="$store.dispatch('increaseAmountItems', item)">+</button>
                </div>
                <div class="btns__price-of-bit" v-if="item.amount > 1">{{ item.price.toString().replace(/[^\d.,]/g,
                        '').split('').reverse().join('').replace(/(.{3})/g, '$1 ').replace(/[,]/g,
                            '.').split('').reverse().join('')
                }} ₽/шт. </div>
            </div>
            <h3 class="goods__summ">{{ item.summ.toString().replace(/[^\d.,]/g,
                    '').split('').reverse().join('').replace(/(.{3})/g, '$1 ').replace(/[,]/g,
                        '.').split('').reverse().join('')
            }} ₽</h3>
            <div class="goods__delete">
                <img src="@/images/icons/close.svg" alt="Удалить товар" class="goods__delete-image"
                    @click="$store.dispatch('deleteItem', item)">
            </div>
        </div>
    </li>

</template>

<script>

export default {
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
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.goods {

    // .goods__item
    &__item {
        border-bottom: 1px solid #C4C4C4;
        margin-right: 5px;

        &:last-child {
            border-bottom: none;
            margin-bottom: 24px;
        }
    }

    // .goods__row
    &__row {
        display: flex;
        padding: 20px 0 20px;
        align-items: center;
        justify-content: space-between;
    }

    // .goods__image-wrap
    &__image-wrap {
        position: relative;
        padding-right: 100px;
        padding-bottom: 100px;
        margin: 0 2.7% 0 15px;
    }

    // .goods__text-about
    &__text-about {
        margin-right: 9.5%;
    }

    // .goods__title
    &__title {
        margin-bottom: 5px;
    }

    // .goods__parametrs
    &__parametrs {
        margin-bottom: 5px;
    }

    // .goods__article
    &__article {
        color: $gray-txt;
    }

    // .goods__amount-btns
    &__amount-btns {
        margin-right: 9.5%;
        position: relative;
    }

    // .goods__summ
    &__summ {
        margin-right: 35px;
        flex: 0 0 100px;
        font-weight: 500;
        font-family: $font-family-accent;
        text-align: right;
        // justify-self: flex-end;
    }

    // .goods__delete
    &__delete {
        align-self: flex-start;
        cursor: pointer;
        position: relative;
        z-index: 2;

        @media (min-width: $md2) {
            &:hover {
                &::after {
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    top: -8px;
                    left: -8.5px;
                    background-color: lighten($gray-txt, 45%);
                    z-index: 1;
                    border-radius: 50%;
                }
            }
        }
    }

    // .goods__delete-image
    &__delete-image {
        position: relative;
        z-index: 2;
    }
}

.btns {

    // .btns__row
    &__row {
        display: flex;
        margin-bottom: 10px;
    }

    // .btns__minus
    &__minus {
        border-radius: 4px 0 0 4px;

        @media (min-width: $md2) {
            &:hover {
                background-color: darken($bgn, 5%);
                ;
            }
        }
    }

    // .btns__amount
    &__amount {
        margin: 0 2px;
    }

    // .btns__plus
    &__plus {
        border-radius: 0 4px 4px 0;

        @media (min-width: $md2) {
            &:hover {
                background-color: darken($bgn, 5%);
                ;
            }
        }
    }

    // .btns__cube
    &__cube {
        width: 34px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.5;
        text-align: center;
        background-color: $bgn;
        cursor: pointer;
        transition: all 0.2s ease 0s;
    }

    // .btns__price-of-bit
    &__price-of-bit {
        position: absolute;
        bottom: -20px;
        left: 50%;
        font-family: $font-family-accent;
        font-size: 1.2rem;
        white-space: nowrap;
        transform: translateX(-50%);
    }
}
</style>