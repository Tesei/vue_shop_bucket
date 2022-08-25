<template>
    <button class="btn">
        <slot></slot>
    </button>

</template>


<script>
export default {
    name: 'my-button'
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: 600;
    font-size: 1.8rem;
    margin-bottom: 12px;
    border-radius: 4px;
    line-height: 1.45;
    padding: 14px 0;
    color: $white;
    background-color: $blue;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    @media (min-width: $md2) {
        &:hover {
            transform: scale(1.02);
        }
    }
}

.btn_color-reverse {
    padding: 12px 0;
    color: $blue;
    border: 1px solid $blue;
    background-color: $white;
}
</style>