<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
    name: 'Cta',
    props: ['text']
}
</script>


<style lang="scss">
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
    border: 2px solid black;
    font-family: 'Work Sans';
    cursor: pointer;

    width: 48%;

    &:hover {
        background-color: $pink;
        border: 4px solid $pink;
    }
}
</style>