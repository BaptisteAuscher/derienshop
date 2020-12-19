<template>
  <div class="shop">
      <ProductPreview></ProductPreview>
      <ProductPreview></ProductPreview>
      <ProductPreview></ProductPreview>
      <ProductPreview></ProductPreview>
  </div>
</template>

<script>
import ProductPreview from '@/components/Product/ProductPreview.vue';

export default {
  components: {
    ProductPreview
  }
}
</script>

<style lang="scss">
@import '@/scss/__variables.scss';

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
    grid-template-columns: repeat(3, 1fr);

  }
}

@media screen and (min-width: 1200px) {
  
  
  .shop {
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);

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