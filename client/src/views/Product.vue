<template>
  <main class="product">
    <Slider :images="selectedColor.images"></Slider>
    <article class="product__article">
      <section class="product__info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="product__price">{{ formatPrice(product.price) }}</p>
      </section>

      <section class="product__colors">
        <div class="color__icon" v-for="(color, index) in product.colors" :key="index"  :style="`background-color: ${color.hex}; border: ${color === selectedColor ? selectedBorderIcon : defaultBorderIcon}`" @click="selectColor(index)">

        </div>
      </section>

      <section class="product__cta" data-dropup-auto="false">
        <select name="sizes" class="colorSelector" >
          <option class="option" :value="size.size" v-for="(size, index) in selectedColor.sizes" :key="index">{{size.size}}</option>
        </select>
        <Cta text="add to cart"></Cta>
      </section>
    </article>
  </main>
</template>

<script>
import Slider from "@/components/Product/Slider.vue";
import Cta from "@/components/Cta.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Slider,
    Cta
  },
  data() {
    return {
      selectedBorderIcon: "4px solid #515151",
      defaultBorderIcon: "2px solid #515151"
    };
  },
  computed: {
    ...mapGetters({
      product: "getProduct",
      selectedColor: "getSelectedColor"
    })
  },
  methods: {
    ...mapActions(["fetchProduct"]),
    formatPrice: price => (price / 100).toFixed(2) + "EUR",
    selectColor (id) {
      this.$store.commit("setSelectedColor", {
        product: this.product,
        id: id
      });
    }
  },
  created() {
    this.fetchProduct(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";

.product {
  display: flex;
  flex-wrap: wrap;
  width: 95vw;
  margin: 0 auto;
  margin-top: 20px;
  overflow: hidden;

  &__article {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 35%;

    & h2, p {
      text-transform: uppercase;
      font-family: 'Work Sans';
      color: $grey;
      margin: 0;
      padding: 0;
    }
    & h2 {
      font-size: 32px;
      font-weight: 800;
      margin-top: 10px;
    }

    & p {
      font-size: 20px;
      font-weight: 800;
      opacity: .7;

      &.product__price {
        margin-top: 10px;
      }
    }

    

    & .color__icon {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  &__colors {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &__cta {
    display: flex;
    justify-content: space-between;
    & .colorSelector {
      outline: none;
      border: 4px solid $grey;
      font-size: 20px;
      font-weight: 800;
      font-family: 'Work Sans';
      color: $grey;
      width: 48%;
      padding: 10px 20px;
      appearance: none;
      text-align: center;
      cursor: pointer;

      &:active, &:focus, &:hover {
        border: 4px solid $pink;
      }

      & .option {
        font-family: 'Work Sans';
        font-size: 20px;
        font-weight: 800;
      }
    }
  }
}
</style>
