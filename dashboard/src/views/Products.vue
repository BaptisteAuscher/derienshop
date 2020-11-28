<template>
    <div class="products">
        <h1>Products</h1>
        <h2>List</h2>
        <div class="products__list">
            <ul>
                <ProductPreview></ProductPreview>
                <ProductPreview></ProductPreview>
                <ProductPreview></ProductPreview>
            </ul>
        </div>
        <h2>Add</h2>
        <div class="products__add">
            <AddProduct></AddProduct>
        </div>
    </div>
</template>

<script>
import ProductPreview from "@/components/Products/ProductPreview.vue";
import AddProduct from "@/components/Products/AddProduct.vue";

export default {
    components: {
        ProductPreview,
        AddProduct
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