<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
    name: 'Cta',
    props: ['text']
}
</script>


<style lang="scss" scoped>
@import '@/scss/default.scss';
@import '@/scss/__variables.scss';

button {
    color: white;
    display: block;
    background-color: black;
    outline: none;
    font-size: 20px;
    font-weight: 800;
    padding: 0;
    padding: 10px 20px;
    border: 2px solid black;
    font-family: 'Work Sans';
    cursor: pointer;

    width: 100%;

    &:hover {
        background-color: $pink;
        border: 4px solid $pink;
    }
}

@media screen and (min-width: 1050px) {
    button {
        width: 48%;
    }
}
</style>