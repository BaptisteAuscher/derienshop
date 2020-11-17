<template>
    <div>
        <div class="nav">
            <div class="nav__burger" v-if="windowWidth < 768">
                <label for="burger-checkbox">
                    <img src="@/assets/burger.svg" alt="">
                </label>
                <input type="checkbox" name="burger" id="burger-checkbox">
                <div class="nav__phone-links" v-if="windowWidth < 768">
                    <router-link to="/">Home</router-link>
                    <router-link to="/shop">Shop</router-link>
                    <router-link to="/about">About</router-link> 
                </div>
            </div>
            <div class="nav__links" v-if="windowWidth > 768">
                <router-link to="/">Home</router-link>
                <router-link to="/shop">Shop</router-link>
                <router-link to="/about">About</router-link>
            </div>
            <div class="nav__image">
                <img src="@/assets/logo-blanc.png" alt="logo de derien en blanc">
            </div>
            <div class="nav__icons">
                <router-link to="/user"><img src="@/assets/user.svg" alt=""></router-link>
                <router-link to="/cart"><img src="@/assets/cart.svg" alt=""></router-link>
            </div>  
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            windowWidth: 'getWindowWidth'
        })
    }
}
</script>

<style lang="scss">
@import '@/scss/__variables.scss';
.nav {
    padding: 30px 10vw;
    background: $fond-navbar;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__links {
        width: 20%;
        min-width: 200px;
        display: flex;
        justify-content: space-between;

    }

    &__phone-links {
        width: 20%;
        min-width: 200px;
        visibility: hidden;
        display: none;
        justify-content: space-around;
        flex-direction: column;
    }

    &__image {
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

    &__burger {
        display: flex;
        flex-direction: column;
        width: 7vw;
        & label {
            cursor: pointer;
        }
        & input{
            display: none;

            &:checked + .nav__phone-links{
                display: flex;
                visibility: visible;
            }
        }
    }

    &__icons {
        display: flex;
        justify-content: space-between;
        width: 5vw;
        min-width: 50px;
        align-items: center;
    }
}

</style>