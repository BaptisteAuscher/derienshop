<template>
    <div class="nav">
        <div class="nav__links">
            <router-link to="/">Home</router-link>
            <router-link to="/shop">Shop</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <div class="nav__image">
            <img src="@/assets/logo-blanc.png" alt="logo de derien en blanc">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/scss/__variables.scss';
.nav {
    padding: 30px;
    background: $black;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__links {
        width: 30%;
        display: flex;
        justify-content: space-around;

    }

    &__image {
        align-self: center;
        & img {
            height: 30px;
        }
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 18px;

        &.router-link-exact-active {
            font-weight: bold;
        }
        &:hover {
            font-style: italic;
        }
    }
}
</style>