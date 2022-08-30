
<template>
    <div class="main__wrap">
        <div class="main__top">
            <!-- todo Доработать классы, чтобы было понятно при масштабировании -->
            <h6 class="main__bread-crumbs">Главная <span class="_arrow"></span> <span class="_active">Корзина</span>
            </h6>
        </div>
        <div class="main__body">
            <list-of-goods class="main__column main__column_left" />
            <finally-check class="main__column main__column_right" />
        </div>
    </div>
</template>


<script>
import ListOfGoods from "@/components/ListOfGoods.vue";
import FinallyCheck from "@/components/FinallyCheck.vue";

export default {
    components: {
        ListOfGoods,
        FinallyCheck
    }
}
</script>


<style scoped lang="scss">
@import '@/styles/index.scss';

.main {

    // .main__wrap
    &__wrap {}

    // .main__top
    &__top {}

    // .main__bread-crumbs
    &__bread-crumbs {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 50px;

        ._arrow {
            &::before {
                content: '\1F892';
            }

            font-size: 2.2rem;
            padding: 0 8px 0 10px;
            margin-bottom: 2px;
        }

        ._active {
            color: $gray-txt;
        }
    }

    // .main__body
    &__body {
        display: flex;
        align-items: flex-start;
        margin-bottom: 95px;
    }

    // main__column_left
    &__column_left {
        flex: 1 1 auto;
    }

    // main__column_right
    &__column_right {
        flex: 0 0 425px;
        align-self: center;
    }
}
</style>