<template>
    <li class="preview">
        <div class="preview__name">
            {{product.name}}
        </div>
        <div class="preview__category">
            {{product.description.slice(0,10) + "..."}}
        </div>
        <div class="preview__price">
            {{product.price}}
        </div>
        <div class="preview__icons">
            <router-link :to="'/product/' + product._id">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>    
            </router-link>
            <svg xmlns="http://www.w3.org/2000/svg" @click="deleteProduct(product._id)" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </div>
    </li>
</template>

<script>
import axios from "axios";

export default {
    props: [
        'product'
    ],
    methods: {
        deleteProduct: async function (id) {
            let config = {
                method: 'delete',
                url: process.env.VUE_APP_API_URL + 'api/products/' + id,
                headers : {
                    "Authorization": "Bearer " + this.$store.state.auth.jwt
                }
            }
            confirm('u sure ?');

            await axios(config).then(response => console.log(response)).catch(err => console.log(err));
            this.$store.dispatch("fetchProducts")
        }
    }
}
</script>

<style lang="scss">
    .preview {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        color: black;

        border-bottom: 1px solid grey;

        &__icons {
            display: flex;
            align-items: center;
            width: 50px;
            justify-content: space-between;

            & svg {
                cursor: pointer;
            }
        }
    }
</style>