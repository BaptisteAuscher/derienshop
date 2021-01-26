<template>
  <div class="shop">
    <ProductPreview
      v-for="product in products"
      :key="product._id"
      :product="product"
    ></ProductPreview>
  </div>
</template>

<script>
import ProductPreview from "@/components/Product/ProductPreview.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductPreview
  },
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },

  created: function() {
    this.fetchProducts();
  }
};
</script>

<style lang="scss">
@import "@/scss/__variables.scss";

.shop {
  width: 90vw;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 1050px) {
  .shop {
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .shop {
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1600px) {
  .shop {
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
