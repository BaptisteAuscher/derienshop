<template>
    <div class="products">
        <h1>Products</h1>
        <h2>List</h2>
        <div class="products__list">
            <ul>
                <ProductPreview v-for="product in products" :key="product.id" :product="product"></ProductPreview>
            </ul>
        </div>
        <h2>Add</h2>
        <div class="products__add">
            <AddProduct></AddProduct>
        </div>
        <p>{{products}}</p>
    </div>
</template>

<script>
import ProductPreview from "@/components/Products/ProductPreview.vue";
import AddProduct from "@/components/Products/AddProduct.vue";
import {mapGetters, mapActions} from "vuex";

export default {
    components: {
        ProductPreview,
        AddProduct
    },
    methods: {
        ...mapActions(['fetchProducts'])
    },
    computed: {
        ...mapGetters({
            products: 'getProducts'
        })
    },
    created(){
        this.fetchProducts();
    }
}
</script>

<style lang="scss">
    .products {
        & h1 {
            padding-top: 40px;
            padding-left: 50px;
        }

        & h2 {
            padding-left: 70px;
        }
        &__list {
            display: flex;
            justify-content: center;
            & ul {
                padding: 0;
                width: 70%;
            }
        }

        &__add {
            display: flex;
            justify-content: center;
        }
    }
</style>