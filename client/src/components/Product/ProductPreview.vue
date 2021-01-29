<template>
  <div class="product">
    <router-link :to="'/product/' + product._id">
      <img
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :src="product.colors[0].images[0].link"
        :alt="product.colors[0].images[0].alt"
      />
    </router-link>
    <transition name="up">
      <router-link
        @mouseover="hover = true"
        :to="'/product/' + product._id"
        class="product__name"
        v-show="hover || windowWidth < 1050"
        >{{ product.name }}<br v-if="windowWidth > 1050" />
        <span v-if="windowWidth > 1050">{{ formatPrice(product.price) }}</span>
      </router-link>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["product"],
  data() {
    return {
      hover: false
    };
  },
  computed: {
    ...mapGetters({
      windowWidth: "ui/getWindowWidth"
    })
  },
  methods: {
    formatPrice: price => (price / 100).toFixed(2) + "EUR"
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";

.product {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & a {
    font-family: "Work Sans";
    text-transform: uppercase;
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

      & span {
        font-size: 15px;
      }
    }

    &:hover img {
      opacity: 50%;
    }
  }
}

.up-enter-active,
.up-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.up-enter-active,
.up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.up-enter-to,
.up-leave {
  transform: translateY(0);
  opacity: 1;
}
</style>
