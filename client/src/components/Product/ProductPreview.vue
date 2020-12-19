<template>
  <div class="product">
    <router-link to="/product/12345">       
        <img @mouseover="hover = true" @mouseleave="hover= false" src="https://images.derienshop.com/creme-logo-rouge.png" alt="tshirt image">
    </router-link>
    <transition name="up">
        <router-link @mouseover="hover = true" to="/product/12345" class="product__name" v-show="hover || windowWidth < 1050">ICE CREAM<br v-if="windowWidth > 1050"><span v-if="windowWidth > 1050">20.00EUR</span></router-link>
    </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            hover: false
        }
    },
    computed: {
        ...mapGetters({
            windowWidth: 'getWindowWidth'
        })
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/__variables.scss';

.product {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & a {
        font-family: 'Work Sans';
        font-size: 20px;
        font-weight: 800;
        color: $grey;
    }

    & img {
        width: 300px;
    }
}

@media screen and (min-width: 1050px) {
    .product {
        margin-right: 30px;
        position: relative;

        &__name {
        position: absolute;
        text-align: center;
        top: 50%;
        margin-top: -24px;
        z-index: 10;

            & span{
                font-size: 15px;
            }
        }

        &:hover img{
        opacity: 50%;
        }
    }
}

.up-enter-active, .up-leave-active {
  transition: transform .4s, opacity .4s;
}

.up-enter-active, .up-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.up-enter-to, .up-leave {
  transform: translateY(0);
  opacity: 1;
}

</style>